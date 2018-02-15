package main

import (
  "net/http"
  "github.com/labstack/echo"
  "github.com/labstack/echo/middleware"
  "os"
  "io"
)

type User struct {
  Name string `json:"name" xml:"name" form:"name" query:"name"`
  Email string `json:"email" xml:"email" form:"email" query:"email"`
}

func getUser(c echo.Context) error {
  id := c.Param("id")
  return c.String(http.StatusOK, id)
}

func postUser(c echo.Context) error {
  u := new(User)
  if err := c.Bind(u); err != nil {
    return err
  }
  return c.JSON(http.StatusCreated, u)
}

func show(c echo.Context) error {
  team := c.QueryParam("team")
  member := c.QueryParam("member")
  return c.String(http.StatusOK, "team: " + team + ", member: " + member)
}

func save(c echo.Context) error {
  name := c.FormValue("name")
  avatar, err := c.FormFile("avatar")
  if err != nil {
    return err
  }

  src, err := avatar.Open()
  if err != nil {
    return err
  }
  defer src.Close()

  dst, err := os.Create(avatar.Filename)

  if _, err = io.Copy(dst, src); err != nil {
    return err
  }

  return c.HTML(http.StatusOK, "<b>Thank you! " + name + "</b>")
  // name := c.FormValue("name")
  // email := c.FormValue("email")
  // return c.String(http.StatusOK, "name: " + name + ", email:" + email)
}

func main() {
  e := echo.New()
  e.Use(middleware.Logger())
  e.Use(middleware.Recover())

  g := e.Group("/admin")
  g.Use(middleware.BasicAuth(func(username, password string, c echo.Context) (bool, error) {
    if username == "joe" && password == "secret" {
      return true, nil
    }
    return false, nil
  }))

  e.GET("/admin", func(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, admin")
  })

  e.GET("/", func(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, World!")
  })

  e.GET("/users/:id", getUser)
  e.POST("/users", postUser)
  e.GET("/show", show)
  e.POST("/save", save)
  e.Static("/static", "src/static")
  e.Logger.Fatal(e.Start(":1323"))
}
