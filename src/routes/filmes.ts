import { Router, Request, Response } from 'express';
import { Filme, filmes } from '../models/filme';

const router = Router();

// GET - Listar todos os filmes
router.get('/', (req: Request, res: Response) => {
    res.json(filmes);
});

// POST - Adicionar novo filme
router.post('/', (req: Request, res: Response) => {
    const novoFilme: Filme = req.body;
    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});

// PUT - Atualizar filme por ID
router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const index = filmes.findIndex(f => f.id === parseInt(id));
    
    if (index !== -1) {
        filmes[index] = { ...filmes[index], ...req.body };
        res.json(filmes[index]);
    } else {
        res.status(404).json({ mensagem: "Filme não encontrado" });
    }
});

export default router;