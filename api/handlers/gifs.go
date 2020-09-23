package handlers

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Gif struct
type GifData struct {
	ID     string `json:"id,omitempty" bson:"_id,omitempty"`
	URL    string `json:"url" bson:"url"`
	UserID string `json:"user_id" bson:"user_id"`
}

func CreateGif(c *fiber.Ctx) error {
	// connection to the mongodb server
	initDB()
	// defining the database and the collection
	collection := mg.Db.Collection("gifs")
	// New Gif struct
	gif := new(GifData)
	// Parse body into struct
	c.BodyParser(gif)
	// token payload
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(string)
	// forces MongoDB to always set its own generated ObjectIDs
	gif.ID = ""
	// addes the user_id to the gif object
	gif.UserID = tokenID
	// insert the record
	insertionResult, err := collection.InsertOne(c.Context(), gif)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	// response
	return c.Status(201).JSON(insertionResult)
}

func GetAllGifs(c *fiber.Ctx) error {
	// connection to the mongodb server
	initDB()
	// defining the database and the collection
	collection := mg.Db.Collection("gifs")
	// New Gif struct
	gifs := new(GifData)
	// Parse body into struct
	c.BodyParser(gifs)
	// get all records
	query := bson.D{}
	data, err := collection.Find(c.Context(), query)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	var gifsArr []GifData = make([]GifData, 0)
	// iterate the data and decode each item into an Employee
	if err := data.All(c.Context(), &gifsArr); err != nil {
		return c.Status(500).SendString(err.Error())

	}
	// return employees list in JSON format
	return c.JSON(&gifsArr)
}

func DeleteGif(c *fiber.Ctx) error {
	// connection to the mongodb server
	initDB()
	// defining the database and the collection
	collection := mg.Db.Collection("gifs")
	// gets the record id
	gifID, err := primitive.ObjectIDFromHex(
		c.Params("id"),
	)
	// the provided ID might be invalid ObjectID
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	// find and delete the employee with the given ID
	query := bson.D{{Key: "_id", Value: gifID}}
	result, err := collection.DeleteOne(c.Context(), &query)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	// the employee might not exist
	if result.DeletedCount < 1 {
		return c.Status(500).SendString(err.Error())
	}
	// the record was deleted
	return c.Status(201).SendString("The record was deleted with success.")
}

func GetUserGifs(c *fiber.Ctx) error {
	// connection to the mongodb server
	initDB()
	// defining the database and the collection
	collection := mg.Db.Collection("gifs")
	// New Gif struct
	gifs := new(GifData)
	// Parse body into struct
	c.BodyParser(gifs)
	// token payload
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(string)
	// get all records
	query := bson.D{{Key: "user_id", Value: tokenID}}
	data, err := collection.Find(c.Context(), query)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	var gifsArr []GifData = make([]GifData, 0)
	// iterate the data and decode each item into an Employee
	if err := data.All(c.Context(), &gifsArr); err != nil {
		return c.Status(500).SendString(err.Error())

	}
	// return employees list in JSON format
	return c.JSON(&gifsArr)
}
