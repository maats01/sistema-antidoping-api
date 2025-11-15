import { prisma } from '../lib/prisma'
import { Atleta, Prisma } from '@prisma/client'

class AtletasService {

    async getAll(): Promise<Atleta[]> {
        return await prisma.atleta.findMany();
    }

    async getById(id: number): Promise<Atleta | null> {
        return await prisma.atleta.findFirst({
            where: {
                id: id
            }
        });
    }

    async create(data: Prisma.AtletaCreateInput): Promise<Atleta> {
        const atleta: Atleta = await prisma.atleta.create({
            data: data
        });

        return atleta;
    }

    async update(id: number, data: Prisma.AtletaUpdateInput): Promise<Atleta> {
        const atleta_atualizado: Atleta = await prisma.atleta.update({
            where: {
                id: id
            },
            data: data
        });

        return atleta_atualizado;
    }

    async delete(id: number): Promise<boolean> {
        const atleta: Atleta | null = await this.getById(id);

        if (atleta === null) {
            return false;
        }

        await prisma.atleta.delete({
            where: {
                id: id
            }
        });

        return true;
    }
}