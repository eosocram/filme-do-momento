import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbUser: string | undefined = process.env.DB_USER;
const dbPassword: string | undefined = process.env.DB_PASSWORD;
const dbCluster: string | undefined = process.env.DB_CLUSTER;
const dbName: string | undefined = process.env.DB_NAME;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;
const connectBancoDados = async (): Promise<void> => {
    try {
        await mongoose.connect(uri);
        console.log('Conexão com MongoDB estabelecida com sucesso!');
      } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1); // Sair do processo com erro
      }
};

connectBancoDados();

const PORT =  (process.env.PORT ?  parseInt(process.env.PORT, 10): 3000).toString();
import app from './app';

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

