import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
  @Prop({ type: String, required: true })
  type!: string; // <-- Agrega "!"

  @Prop({ type: String })
  description!: string;

  @Prop({ type: Date })
  date!: Date;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);