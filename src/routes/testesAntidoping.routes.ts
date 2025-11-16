import { Router } from 'express';
import testesAntidopingController from '../controllers/testesAntidoping.controller';

const testesRouter: Router = Router();

testesRouter.get('/', testesAntidopingController.index);
testesRouter.get('/:id', testesAntidopingController.show);
testesRouter.post('/', testesAntidopingController.create);
testesRouter.put('/:id', testesAntidopingController.update);
testesRouter.delete('/:id', testesAntidopingController.delete);

export { testesRouter };