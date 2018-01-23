package main

import (
  "net/http"
  "io/ioutil"
  "fmt"
)

func main() {
  response, error := http.Get("http://google.co.jp")

  if error != nil {
    fmt.Println("error: %v", error)
  }

  defer response.Body.Close()
  body, error := ioutil.ReadAll(response.Body)

  if error != nil {
    fmt.Println("error: %v", error)
  }

  fmt.Printf("%q\n", body)
}
