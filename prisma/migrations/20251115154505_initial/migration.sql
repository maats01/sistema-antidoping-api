-- CreateTable
CREATE TABLE "atletas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "idade" INTEGER NOT NULL,
    "peso" DECIMAL(5,2) NOT NULL,
    "altura" INTEGER NOT NULL,
    "esporte" VARCHAR(50) NOT NULL,

    CONSTRAINT "atletas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testes_antidoping" (
    "id" SERIAL NOT NULL,
    "data_exame" TIMESTAMP(3) NOT NULL,
    "resultado_positivo" BOOLEAN NOT NULL,
    "substancia_detectada" VARCHAR(255),
    "atleta_id" INTEGER NOT NULL,

    CONSTRAINT "testes_antidoping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "testes_antidoping" ADD CONSTRAINT "testes_antidoping_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "atletas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
