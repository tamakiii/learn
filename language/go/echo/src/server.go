package main

import (
  "net/http"
  "github.com/labstack/echo"
  "os"
  "io"
)

func getUser(c echo.Context) error {
  id := c.Param("id")
  return c.String(http.StatusOK, id)
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
  e.GET("/", func(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, World!")
  })
  e.GET("/users/:id", getUser)
  e.GET("/show", show)
  e.POST("/save", save)
  e.Logger.Fatal(e.Start(":1323"))
}
