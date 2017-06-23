package main

import "fmt"

// ./short-variable-declarations.go:5: syntax error: non-declaration statement outside function body
// g := true

func main() {
  var i, j int = 1, 2
  k := 3
  c, python, java := true, false, "no!"

  fmt.Println(i, j, k, c, python, java)
}
