package handlers

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

// User struct
type UserData struct {
	ID       string `json:"id,omitempty" bson:"_id,omitempty"`
	Username string `json:"username" bson:"username"`
	Email    string `json:"email" bson:"email"`
	Password string `json:"password" bson:"password"`
}

func CreateUser(c *fiber.Ctx) error {
	// connection to the mongodb server
	initDB()
	// defining the database and the collection
	collection := mg.Db.Collection("users")
	// New User struct
	user := new(UserData)
	// Parse body into struct
	c.BodyParser(user)
	// hashes the password from the user input
	hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), 6)
	if err != nil {
		return c.Status(400).SendString(err.Error())
	}
	// forces MongoDB to always set its own generated ObjectIDs
	user.ID = ""
	// exchanges the user input password with the hashed password
	user.Password = string(hash)
	// insert the record
	insertionResult, err := collection.InsertOne(c.Context(), user)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	// response
	return c.Status(201).JSON(insertionResult)
}

func LoginUser(c *fiber.Ctx) error {
	// connection to the mongodb server
	initDB()
	// defining the database and the collection
	collection := mg.Db.Collection("users")
	// New User struct
	user := new(UserData)
	// Parse body into struct
	c.BodyParser(user)
	pass := user.Password
	// gets a single record
	query := bson.M{"email": user.Email}
	collection.FindOne(c.Context(), query).Decode(user)
	// verifies if the passwords match
	match := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(pass))
	if match != nil {
		return c.Status(400).SendString(match.Error())
	}
	// Create token
	token := jwt.New(jwt.SigningMethodHS256)
	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["id"] = user.ID
	// Generate encoded token and send it as response.
	loginToken, err := token.SignedString([]byte("jd9OOUGdlo"))
	if err != nil {
		return c.Status(400).SendString(err.Error())

	}
	// response
	return c.Status(200).JSON(fiber.Map{
		"token":    loginToken,
		"username": user.Username,
	})
}
