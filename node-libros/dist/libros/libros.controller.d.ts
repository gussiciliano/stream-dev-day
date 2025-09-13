import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
export declare class LibrosController {
    private readonly librosService;
    constructor(librosService: LibrosService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/libro.schema").Libro, {}, {}> & import("./schemas/libro.schema").Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    create(createLibroDto: CreateLibroDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/libro.schema").Libro, {}, {}> & import("./schemas/libro.schema").Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/libro.schema").Libro, {}, {}> & import("./schemas/libro.schema").Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateLibroDto: CreateLibroDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/libro.schema").Libro, {}, {}> & import("./schemas/libro.schema").Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/libro.schema").Libro, {}, {}> & import("./schemas/libro.schema").Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
