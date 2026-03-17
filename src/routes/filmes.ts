import { Router, Request, Response } from "express";
import { Filme } from "../models/filme";

const router = Router();

let filmes: Filme[] = [
  { id: 1, titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", ano: 1972, assistido: true },
  { id: 2, titulo: "Interestelar", diretor: "Christopher Nolan", ano: 2014, assistido: false }
];

router.get("/", (req: Request, res: Response) => {
  res.json(filmes);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const filme = filmes.find(f => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }
  res.json(filme);
});

router.post("/", (req: Request, res: Response) => {
  const { titulo, diretor, ano, assistido } = req.body;

  if (!titulo || !diretor || ano === undefined || assistido === undefined) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const novoFilme: Filme = {
    id: filmes.length + 1, // ID sequencial simples
    titulo,
    diretor,
    ano,
    assistido
  };

  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const filme = filmes.find(f => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  const { titulo, diretor, ano, assistido } = req.body;

  if (titulo !== undefined) filme.titulo = titulo;
  if (diretor !== undefined) filme.diretor = diretor;
  if (ano !== undefined) filme.ano = ano;
  if (assistido !== undefined) filme.assistido = assistido;

  res.json(filme);
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  filmes = filmes.filter(f => f.id !== id);

  res.json({ mensagem: "Filme removido com sucesso" });
});

export default router;