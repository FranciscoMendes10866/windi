package router

import "github.com/gofiber/fiber/v2"

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api/v1")
	auth := api.Group("/auth")
	auth.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello from router")
	})
}
