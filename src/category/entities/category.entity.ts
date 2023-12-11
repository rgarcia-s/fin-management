import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 30,
    transformer: {
      to: (value: string) => value.charAt(0).toUpperCase() + value.slice(1),
      from: (value) => value,
    },
  })
  name: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
