import { Router } from "express";
import { AnalisisDataSourceImpl } from "../../infrastructure/datasources/analisis.datasource.impl";
import { AnalisisRepositoryImpl } from "../../infrastructure/repositories/analisis.repository.impl";
import { AnalisisController } from "./controller";

export class AnalisisRoutes{

    static get routes():Router{
        const router = Router();

        const datasource = new AnalisisDataSourceImpl();
        const analisisRepository = new AnalisisRepositoryImpl(datasource);
        const analisisController = new AnalisisController(analisisRepository);

        router.post('/',analisisController.createAnalisis);
        router.get('/:id',analisisController.getAnalisisById);
        router.put('/:id',analisisController.updateAnalisis);
       
        return router;
    }


}