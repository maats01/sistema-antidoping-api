import { Atleta, Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import atletasService from '../services/atletas.service';

class AtletasController {
    
    // GET /atletas
    async index(req: Request, res: Response) {
        try {
            const atletas: Atleta[] = await atletasService.getAll();
            return res.status(200).json(atletas);

        } catch (error) {
            return res.status(500).json({ error: "Erro interno ao consultar os atletas." });
        }
    }

    // GET /atletas/:id
    async show(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const atleta: Atleta | null = await atletasService.getById(id);

            if (atleta === null) {
                return res.status(404).json({ error: "Atleta não encontrado." });
            }

            return res.status(200).json(atleta);
        
        } catch (error) {
            return res.status(500).json({ error: "Erro interno ao consultar atleta." });
        }
    }

    // POST /atletas
    async create(req: Request, res: Response) {
        const { nome, idade, peso, altura, esporte } = req.body;

        const atleta_create_input: Prisma.AtletaCreateInput = {
            nome: nome,
            idade: idade,
            altura: altura,
            esporte: esporte,
            peso: peso
        };
        
        try {
            const novo_atleta: Atleta = await atletasService.create(atleta_create_input);
            return res.status(201).json(novo_atleta);

        } catch (error) {
            return res.status(400).json({ error: "Erro ao adicionar um novo atleta." });
        }
    }
    
    // PUT /atletas/:id
    async update(req: Request, res: Response) {
        const { nome, idade, peso, altura, esporte } = req.body;
        const id: number = Number(req.params.id);

        const atleta_update_input: Prisma.AtletaUpdateInput = {
            nome: nome,
            idade: idade,
            peso: peso,
            altura: altura,
            esporte: esporte
        }

        try {
            const atleta_atualizado: Atleta = await atletasService.update(id, atleta_update_input);

            return res.status(200).json(atleta_atualizado);

        } catch (error) {
            return res.status(400).json({ error: "Erro ao atualizar os dados do atleta." });
        }
    }

    // DELETE /atletas/:id
    async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const is_deleted: boolean = await atletasService.delete(id);

            if (is_deleted) {
                return res.status(200).json({ msg: "Atleta deletado com sucesso." });
            }

            return res.status(404).json({ error: "Atleta não encontrado." });
        
        } catch (error) {
            return res.status(500).json({ error: "Erro interno ao deletar o registro." });
        }
    }
}