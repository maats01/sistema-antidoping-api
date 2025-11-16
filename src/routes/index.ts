import { Router } from 'express';
import { atletasRouter } from './atletas.routes';
import { testesRouter } from './testesAntidoping.routes';

const router: Router = Router();

router.use('/atletas', atletasRouter);
router.use('/testes-antidoping', testesRouter);

export { router };