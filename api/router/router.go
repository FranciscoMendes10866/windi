package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/windi-api/guards"
	"github.com/windi-api/handlers"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api/v1")
	auth := api.Group("/auth")
	auth.Post("/signup", handlers.CreateUser)
	auth.Post("/signin", handlers.LoginUser)
	gifs := api.Group("/gifs")
	gifs.Post("/", guards.Protected(), handlers.CreateGif)
	gifs.Delete("/:id", guards.Protected(), handlers.DeleteGif)
	gifs.Get("/", handlers.GetAllGifs)
}
