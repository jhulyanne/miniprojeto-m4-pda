// importado apenas o objeto router do express, e não ele inteiro
import { Router } from "express";
import { getAllBooks, getBookById, getAvailableBooks } from "../controller/Book.controller.js";

const books = Router();

// * não precisamos dos () das funções quando estamos passando elas como referência em rotas
books.get("/", getAllBooks);
books.get("/available", getAvailableBooks)
books.get("/:id", getBookById);

// exportando por padrão, podemos importar com qualquer nome no index.js
export default books;