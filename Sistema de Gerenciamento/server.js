const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let materias = [
  { id: 1, nome: "Aço", unidade_medida: "kg", quantidade_estoque: 1000 }
];
let produtos = [
  { id: 1, nome: "Parafuso", descricao: "Parafuso de aço", quantidade_estoque: 200 }
];
let ordens = [
  { id: 1, data_inicio: "2025-10-01", data_fim: null, status: "Em andamento", id_produto: 1, quantidade_produzida: 0 }
];
let consumo = [
  { id: 1, id_ordem: 1, id_materia_prima: 1, quantidade_usada: 50 }
];

app.post("/materias", (req, res) => {
  const nova = { id: materias.length + 1, ...req.body };
  materias.push(nova);
  res.status(201).json(nova);
});
app.get("/materias", (req, res) => res.json(materias));

app.post("/produtos", (req, res) => {
  const novo = { id: produtos.length + 1, ...req.body };
  produtos.push(novo);
  res.status(201).json(novo);
});
app.get("/produtos", (req, res) => res.json(produtos));

app.post("/ordens", (req, res) => {
  const nova = { id: ordens.length + 1, ...req.body };
  ordens.push(nova);
  res.status(201).json(nova);
});
app.get("/ordens", (req, res) => res.json(ordens));

app.post("/consumo", (req, res) => {
  const novo = { id: consumo.length + 1, ...req.body };
  consumo.push(novo);
  res.status(201).json(novo);
});
app.get("/consumo", (req, res) => res.json(consumo));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
