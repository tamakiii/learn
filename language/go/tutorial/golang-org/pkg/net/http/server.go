package main

import (
  "net/http"
  "text/template"
)

type Page struct {
  Title string
  Count int
}

func viewHandler(w http.ResponseWriter, r*http.Request) {
  page := Page{"Hello, World", 1}
  template, error := template.New("new").Parse("{{.Title}} {{.Count}} count")

  if error != nil {
    panic(error)
  }

  error = template.Execute(w, page)

  if error != nil {
    panic(error)
  }
}

func main() {
  http.HandleFunc("/", viewHandler)
  http.ListenAndServe(":8080", nil)
}
