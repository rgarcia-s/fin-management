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

  @Column({ type: 'integer', nullable: true })
  installments?: number;

  @Column({ type: 'integer', nullable: true })
  currentInstallment?: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 255 })
  paymentMethod: string;
}
