import { TuesteDataSource } from '../../domain/datasources/tueste.datasource';
import { CreateTuesteDto } from '../../domain/dtos/tueste/create';
import { UpdateTuesteDto } from '../../domain/dtos/tueste/update';
import { TuesteEntity } from '../../domain/entities/tueste.entity';
import { TuesteRepository } from '../../domain/repository/tueste.repository';


export class TuesteRepositoryImpl implements TuesteRepository{

    constructor(
        private readonly tuesteDataSource: TuesteDataSource
    ) { }

    createTueste(createTuesteDto: CreateTuesteDto): Promise<TuesteEntity> {
        return this.tuesteDataSource.createTueste(createTuesteDto);
    }
    getTuesteById(id: string): Promise<TuesteEntity | null> {
        return this.tuesteDataSource.getTuesteById(id); 
    }
    updateTueste(id: string, updateTuesteDto: UpdateTuesteDto): Promise<TuesteEntity> {
        return this.tuesteDataSource.updateTueste(id, updateTuesteDto);
    }
    deleteTueste(id: string): Promise<TuesteEntity> {
        return this.tuesteDataSource.deleteTueste(id);
    }
    getTostadosByFecha(fecha: Date): Promise<TuesteEntity[]> {
        return this.tuesteDataSource.getTostadosByFecha(fecha);
    }
    
}