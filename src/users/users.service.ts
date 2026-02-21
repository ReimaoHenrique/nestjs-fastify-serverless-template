import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.client.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  }

  async findOne(id: string) {
    const userId = Number(id);
    if (Number.isNaN(userId)) {
      throw new BadRequestException('Invalid user id');
    }

    const user = await this.prisma.client.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
