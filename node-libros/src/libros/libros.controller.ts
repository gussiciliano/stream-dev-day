import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from './schemas/libro.schema';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get()
  async findAll(): Promise<Libro[]> {
    return await this.librosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Libro | null> {
    return await this.librosService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<Libro>): Promise<Libro> {
    return await this.librosService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Libro>): Promise<Libro | null> {
    return await this.librosService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ deleted: boolean }> {
    const result = await this.librosService.delete(id);
    return { deleted: !!result };
  }
}
