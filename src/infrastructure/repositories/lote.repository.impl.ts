import { LoteDataSource } from "../../domain/datasources/lote.datasource";
import { CreateLoteDto } from "../../domain/dtos/lote/create";
import { UpdateLoteDto } from "../../domain/dtos/lote/update";
import { LoteEntity } from "../../domain/entities/lote.entity";
import { LoteRepository } from "../../domain/repository/lote.repository";

export class LoteRepositoryImpl  implements LoteRepository {
    constructor(
        private readonly datasource: LoteDataSource
    ){}

    createLote(createLoteDto: CreateLoteDto): Promise<LoteEntity> {
        return this.datasource.createLote(createLoteDto);
    }
    getLoteById(id: string): Promise<LoteEntity | null> {
        return this.datasource.getLoteById(id);
    }
    updateLote(id: string, updateLoteDto: UpdateLoteDto): Promise<LoteEntity> {
        return this.datasource.updateLote(id, updateLoteDto);
    }
    deleteLote(id: string): Promise<LoteEntity> {
        return this.datasource.deleteLote(id);
    }
    getLotesByEstado(estado: string): Promise<LoteEntity[]> {
        return this.datasource.getLotesByEstado(estado);
    }


}