const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let alunos = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com" },
  { id: 2, nome: "João Souza", email: "joao@email.com" }
];

let cursos = [
  { id: 1, titulo: "JavaScript Básico", descricao: "Introdução ao JS", carga_horaria: 20 },
  { id: 2, titulo: "Node.js Avançado", descricao: "Backend com Node", carga_horaria: 40 }
];

let matriculas = [
  { id: 1, id_aluno: 1, id_curso: 2, data_matricula: "2025-10-07" }
];

app.post("/alunos", (req, res) => {
  const novo = { id: alunos.length + 1, ...req.body };
  alunos.push(novo);
  res.status(201).json(novo);
});
app.get("/alunos", (req, res) => res.json(alunos));

app.post("/cursos", (req, res) => {
  const novo = { id: cursos.length + 1, ...req.body };
  cursos.push(novo);
  res.status(201).json(novo);
});
app.get("/cursos", (req, res) => res.json(cursos));

app.post("/matriculas", (req, res) => {
  const nova = { id: matriculas.length + 1, ...req.body };
  matriculas.push(nova);
  res.status(201).json(nova);
});
app.get("/matriculas", (req, res) => res.json(matriculas));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
