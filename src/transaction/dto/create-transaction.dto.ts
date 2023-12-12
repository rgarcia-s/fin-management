import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  ValidateIf,
} from 'class-validator';
import { TransactionTypeEnum } from '../enums/transactionType.enum';

export class CreateTransactionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  @Length(3, 30)
  categoryName: string;

  @IsNumber()
  @IsPositive()
  value: number;

  @IsEnum(TransactionTypeEnum)
  type: TransactionTypeEnum;

  @IsBoolean()
  isRecurrent: boolean;

  @IsBoolean()
  isInInstallments: boolean;

  @IsNumber()
  @IsPositive()
  @ValidateIf((transaction) => transaction.isInInstallments !== false)
  installments?: number;

  @IsNumber()
  @IsPositive()
  @ValidateIf((transaction) => transaction.isInInstallments !== false)
  currentInstallment?: number;

  @IsDateString({ strict: true })
  date: Date;

  @IsString()
  paymentMethod: string;
}
