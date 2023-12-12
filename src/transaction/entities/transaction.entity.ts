import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionTypeEnum } from '../enums/transactionType.enum';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => Category, (category) => category.transactions, {
    cascade: true,
    onDelete: 'SET NULL',
    eager: true,
  })
  category: Category;

  @Column({ type: 'money' })
  value: number;

  @Column({ type: 'varchar' })
  type: TransactionTypeEnum;

  @Column({ type: 'boolean' })
  isRecurrent: boolean;

  @Column({ type: 'boolean' })
  isInInstallments: boolean;

  @Column({ type: 'integer', default: 1 })
  installments?: number;

  @Column({ type: 'integer', default: 1 })
  currentInstallment?: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 255 })
  paymentMethod: string;
}
