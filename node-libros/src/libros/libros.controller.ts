import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get()
  findAll() {
    return this.librosService.findAll();
  }

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.librosService.create(createLibroDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.librosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibroDto: CreateLibroDto) {
    return this.librosService.update(id, updateLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.librosService.remove(id);
  }
}
