import { Request, Response } from 'express';


import { AnalisisRepository } from "../../domain/repository/analisis.repository";
import { CreateAnalisis } from "../../domain/usecases/analisis/analisis/create-analisis";
import { CreateAnalisisDto } from "../../domain/dtos/analisis/analisis/create";
import { GetAnalisis } from "../../domain/usecases/analisis/analisis/get-analisis";
import { UpdateAnalisisDto } from '../../domain/dtos/analisis/analisis/update';
import { UpdateAnalisis } from "../../domain/usecases/analisis/analisis/update-analisis";

export class AnalisisController {

    constructor(
        private readonly analisisRepository: AnalisisRepository
    ){}


    public createAnalisis = async (req: Request, res: Response) => {
        const [error, createAnalisisDto] = CreateAnalisisDto.create(req.body);
        if (error) {
            return res.status(400).json({ error });
        }
        new CreateAnalisis(this.analisisRepository)
            .execute(createAnalisisDto!)
            .then( analisis => res.json(analisis))
            .catch( error => res.status(400).json({ error }));
    }

    public getAnalisisById = async (req: Request, res: Response) => {
        new GetAnalisis(this.analisisRepository)
            .execute(req.params.id)
            .then( analisis => res.json(analisis))
            .catch( error => res.status(400).json({ error }));
    }

    public updateAnalisis = async (req: Request, res: Response) => {
        const id_analisis = req.params.id;
        const [error, createAnalisisDto] = UpdateAnalisisDto.update({...req.body,analisis_id: id_analisis});
        if (error) {
            return res.status(400).json({ error });
        }
        new UpdateAnalisis(this.analisisRepository)
            .execute(id_analisis,createAnalisisDto!)
            .then( analisis => res.json(analisis))
            .catch( error => res.status(400).json({ error }));
    };

}