import express from 'express';
import filmeRoutes from './routes/filmes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Prefixando as rotas
app.use('/filmes', filmeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});