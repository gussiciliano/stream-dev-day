import { Document } from 'mongoose';
export declare class Libro extends Document {
    titulo: string;
    autor: string;
    publicado: Date;
}
export declare const LibroSchema: import("mongoose").Schema<Libro, import("mongoose").Model<Libro, any, any, any, Document<unknown, any, Libro, any, {}> & Libro & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Libro, Document<unknown, {}, import("mongoose").FlatRecord<Libro>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Libro> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
