import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Libro } from './schemas/libro.schema';
import { CreateLibroDto } from './dto/create-libro.dto';

@Injectable()
export class LibrosService {
  constructor(@InjectModel(Libro.name) private libroModel: Model<Libro>) {}

  findAll() {
    return this.libroModel.find().exec();
  }

  create(createLibroDto: CreateLibroDto) {
    const libro = new this.libroModel(createLibroDto);
    return libro.save();
  }

  findOne(id: string) {
    return this.libroModel.findById(id).exec();
  }

  update(id: string, updateLibroDto: CreateLibroDto) {
    return this.libroModel.findByIdAndUpdate(id, updateLibroDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.libroModel.findByIdAndDelete(id).exec();
  }
}
