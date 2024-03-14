import { Router } from 'express';
import { genres, someBook } from '../controllers/genresControllers.js';

const routes = Router();

routes.get('/', genres);

export default routes;
