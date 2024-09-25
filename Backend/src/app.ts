//Criei a aplicação Express e configurei os middlewares instalados que ficarão nela.

import 'express-async-errors'; 
import express, { Request, Response, NextFunction } from 'express'; //Aqui foi importado o express e e os tipos 
import cors from 'cors'; 
import morgan from 'morgan';
import helmet from 'helmet';

const app = express(); 
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());

 //Aqui, toda rota que formos criar, passará essa msg
app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World");
})
 
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})
 
export default app;