package main

import "fmt"

func main() {
  // ./type-interface.go:8: no new variables on left side of :=
  // ./type-interface.go:8: constant 0.867+0.5i truncated to real
  // v := 42
  // v := 3.142
  v := 0.867 + 0.5i
  fmt.Printf("v is of typ %T\n", v)
}
