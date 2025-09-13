import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Activity, ActivitySchema } from './activity.schema';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
    name!: string;

  @Prop({ type: [ActivitySchema], default: [] })
    activities!: Activity[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);