import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Libro extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  autor: string;

  @Prop()
  publicado: Date;
}

export const LibroSchema = SchemaFactory.createForClass(Libro);
