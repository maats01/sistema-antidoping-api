import { Prisma, Teste } from '@prisma/client'
import { Request, Response } from 'express'
import testesAntidopingService from '../services/testesAntidoping.service'

class TestesAntidopingController {

    // GET /testes
    async index(req: Request, res: Response) {
        try {
            const testes: Teste[] = await testesAntidopingService.getAll();
            return res.status(200).json(testes);

        } catch (error) {
            return res.status(500).json({ error: "Erro interno ao consultar os resultados dos exames." });
        }
    }

    // GET /testes/:id
    async show(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const teste: Teste | null = await testesAntidopingService.getById(id);

            if (teste === null) {
                return res.status(404).json({ error: "Resultado do exame não foi encontrado." });
            }

            return res.status(200).json(teste);

        } catch (error) {
            return res.status(500).json({ error: "Erro interno ao consultar o resultado do exame." });
        }
    }

    // POST /testes
    async create(req: Request, res: Response) {
        const { data_exame, resultado_positivo, substancia_detectada, atleta_id } = req.body;

        const teste_create_input: Prisma.TesteCreateInput = {
            data_exame: data_exame,
            resultado_positivo: resultado_positivo,
            substancia_detectada: substancia_detectada,

            atleta: {
                connect: {
                    id: atleta_id
                }
            }
        };
        
        try {
            const novo_teste: Teste = await testesAntidopingService.create(teste_create_input);
            return res.status(201).json(novo_teste);

        } catch (error) {
            return res.status(400).json({ error: "Erro ao adicionar o exame." });
        }
    }
    
    // PUT /testes/:id
    async update(req: Request, res: Response) {
        const { data_exame, resultado_positivo, substancia_detectada, atleta_id } = req.body;
        const id: number = Number(req.params.id);

        const teste_update_input: Prisma.TesteUpdateInput = {
            data_exame: data_exame,
            resultado_positivo: resultado_positivo,
            substancia_detectada: substancia_detectada,

            atleta: {
                connect: {
                    id: atleta_id
                }
            }
        };
        
        try {
            const teste_atualizado: Teste = await testesAntidopingService.update(id, teste_update_input);
            return res.status(200).json(teste_atualizado);

        } catch (error) {
            return res.status(400).json({ error: "Erro ao atualizar os dados do exame." });
        }        
    }

    // DELETE /testes/:id
    async delete(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id);
            const is_deleted: boolean = await testesAntidopingService.delete(id);

            if (is_deleted) {
                return res.status(200).json({ msg: "Exame deletado com sucesso." });
            }

            return res.status(404).json({ error: "Exame não encontrado." });

        } catch (error) {
            return res.status(500).json({ error: "Erro interno ao deletar o registro." });
        }
    }
}

export default new TestesAntidopingController();