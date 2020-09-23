package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/windi-api/router"
)

func main() {
	app := fiber.New(fiber.Config{
		Prefork:       true,
		CaseSensitive: true,
		StrictRouting: true,
		ServerHeader:  "Windi",
	})
	app.Use(cors.New())
	app.Use(limiter.New())
	app.Use(compress.New())
	app.Use(logger.New())
	router.SetupRoutes(app)
	app.Listen(":4000")
}
