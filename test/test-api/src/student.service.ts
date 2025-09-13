import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';
import { Activity } from './schemas/activity.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(data: Partial<Student>): Promise<Student> {
    return this.studentModel.create(data);
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
  }

  async update(id: string, data: Partial<Student>): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string): Promise<Student | null> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }

  async addActivity(studentId: string, activity: Activity): Promise<Student> {
    const student = await this.studentModel.findById(studentId);
    if (!student) throw new NotFoundException('Student not found');
    student.activities.push(activity);
    return student.save();
  }
}