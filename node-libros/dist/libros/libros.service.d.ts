import { Model } from 'mongoose';
import { Libro } from './schemas/libro.schema';
import { CreateLibroDto } from './dto/create-libro.dto';
export declare class LibrosService {
    private libroModel;
    constructor(libroModel: Model<Libro>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Libro, {}, {}> & Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    create(createLibroDto: CreateLibroDto): Promise<import("mongoose").Document<unknown, {}, Libro, {}, {}> & Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Libro, {}, {}> & Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateLibroDto: CreateLibroDto): Promise<import("mongoose").Document<unknown, {}, Libro, {}, {}> & Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Libro, {}, {}> & Libro & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
