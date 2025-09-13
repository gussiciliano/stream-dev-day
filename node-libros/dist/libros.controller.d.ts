import { LibrosService } from './libros.service';
import { Libro } from './schemas/libro.schema';
export declare class LibrosController {
    private readonly librosService;
    constructor(librosService: LibrosService);
    findAll(): Promise<Libro[]>;
    findOne(id: string): Promise<Libro | null>;
    create(data: Partial<Libro>): Promise<Libro>;
    update(id: string, data: Partial<Libro>): Promise<Libro | null>;
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
}
