import express, { json } from "express";

const app = express();
const PORT = 3000;

app.use(json);

// 

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost/${PORT}`))