import { prisma } from '../lib/prisma'
import { Teste, Prisma } from '@prisma/client'

class TestesAntidopingService {

    async getAll(): Promise<Teste[]> {
        return await prisma.teste.findMany();
    }

    async getById(id: number): Promise<Teste | null> {
        return await prisma.teste.findFirst({
            where: {
                id: id
            }
        });
    }

    async create(data: Prisma.TesteCreateInput): Promise<Teste> {
        data.data_exame = new Date(data.data_exame + "T00:00:00Z");
        const teste: Teste = await prisma.teste.create({
            data: data
        });

        return teste;
    }

    async update(id: number, data: Prisma.TesteUpdateInput): Promise<Teste> {
        data.data_exame = new Date(data.data_exame + "T00:00:00Z");
        const teste_atualizado: Teste = await prisma.teste.update({
            where: {
                id: id
            },
            data: data
        });

        return teste_atualizado;
    }

    async delete(id: number): Promise<boolean> {
        const teste = await this.getById(id);

        if (teste === null) {
            return false;
        }

        await prisma.teste.delete({
            where: {
                id: id
            }
        });

        return true;
    }
}

export default new TestesAntidopingService();