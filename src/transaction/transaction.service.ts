import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Between, MoreThanOrEqual, Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { FindByDateTransactionDto } from './dto/findByDate-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction =
      this.transactionsRepository.create(createTransactionDto);

    const category = await this.categoriesRepository.findOneBy({
      name: createTransactionDto.categoryName,
    });

    transaction.category = category
      ? category
      : this.categoriesRepository.create({
          name: createTransactionDto.categoryName,
        });

    return this.transactionsRepository.save(transaction);
  }

  async findAll() {
    return this.transactionsRepository.find();
  }

  async findOne(id: string) {
    return this.transactionsRepository.findOneBy({ id });
  }

  async findByDate(findByDateTransactionsDto: FindByDateTransactionDto) {
    return this.transactionsRepository.find({
      where: {
        date: Between(
          findByDateTransactionsDto.startDate,
          findByDateTransactionsDto.endDate,
        ),
      },
    });
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: string) {
    return this.transactionsRepository.delete(id);
  }
}
