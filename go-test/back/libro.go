package main

import "time"

type Libro struct {
    ID         int       `json:"id"`
    Titulo     string    `json:"titulo"`
    Autor      string    `json:"autor"`
    Publicado  time.Time `json:"publicado"`
}
