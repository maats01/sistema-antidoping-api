import { Router } from 'express';
import atletasController from '../controllers/atletas.controller';

const atletasRouter: Router = Router();

atletasRouter.get('/', atletasController.index);
atletasRouter.get('/:id', atletasController.show);
atletasRouter.post('/', atletasController.create);
atletasRouter.put('/:id', atletasController.update);
atletasRouter.delete('/:id', atletasController.delete);

export { atletasRouter };