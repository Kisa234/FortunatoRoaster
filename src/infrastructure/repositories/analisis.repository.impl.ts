import { AnalisisDataSource } from "../../domain/datasources/analisis.datasource";
import { CreateAnalisisDto } from "../../domain/dtos/analisis/analisis/create";
import { UpdateAnalisisDto } from "../../domain/dtos/analisis/analisis/update";
import { AnalisisEntity } from "../../domain/entities/analisis.entity";
import { AnalisisRepository } from "../../domain/repository/analisis.repository";

export class AnalisisRepositoryImpl implements AnalisisRepository{
    
    constructor(
        private readonly analisis: AnalisisDataSource
    ){}

    createAnalisis(createAnalisisDto: CreateAnalisisDto): Promise<AnalisisEntity> {
        return this.analisis.createAnalisis(createAnalisisDto);
    }
    getAnalisisById(id_lote: string): Promise<AnalisisEntity | null> {
        return this.analisis.getAnalisisById(id_lote);
    }
    updateAnalisis(id: string, updateAnalisisDto: UpdateAnalisisDto): Promise<AnalisisEntity> {
        return this.analisis.updateAnalisis(id, updateAnalisisDto);
    }

}