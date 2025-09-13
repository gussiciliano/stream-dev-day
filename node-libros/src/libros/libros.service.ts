import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Libro } from './schemas/libro.schema';

@Injectable()
export class LibrosService {
  constructor(@InjectModel(Libro.name) private libroModel: Model<Libro>) {}

  async findAll(): Promise<Libro[]> {
    return this.libroModel.find().exec();
  }

  async findOne(id: string): Promise<Libro> {
    return this.libroModel.findById(id).exec();
  }

  async create(data: Partial<Libro>): Promise<Libro> {
    const libro = new this.libroModel(data);
    return libro.save();
  }

  async update(id: string, data: Partial<Libro>): Promise<Libro> {
    return this.libroModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.libroModel.findByIdAndDelete(id).exec();
  }
}
