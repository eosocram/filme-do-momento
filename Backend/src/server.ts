import express from 'express';

import dotenv from 'dotenv';
dotenv.config();


const PORT =  (process.env.PORT ?  parseInt(process.env.PORT, 10): 3000).toString();
import app from './app'

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

