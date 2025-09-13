import { Model } from 'mongoose';
import { Libro } from './schemas/libro.schema';
export declare class LibrosService {
    private libroModel;
    constructor(libroModel: Model<Libro>);
    findAll(): Promise<Libro[]>;
    findOne(id: string): Promise<Libro>;
    create(data: Partial<Libro>): Promise<Libro>;
    update(id: string, data: Partial<Libro>): Promise<Libro>;
    delete(id: string): Promise<any>;
}
