export interface Filme {
    id: number;
    titulo: string;
    diretor: string;
    ano: number;
    assistido: boolean;
}

// Simulação de banco de dados em memória
export const filmes: Filme[] = [
    { id: 1, titulo: "Inception", diretor: "Christopher Nolan", ano: 2010, assistido: true }
];