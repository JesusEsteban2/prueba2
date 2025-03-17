import express from 'express';
import { resolve } from 'path';
import cors from 'cors';

export const createApp = () => {
    console.log('Iniciando App...');

    const app = express();
    const publicPath = resolve('public');

    app.disable('x-powered-by');

    console.log('Registrando Middleware...');

    app.use(cors());
};
