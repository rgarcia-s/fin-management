import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsPositive,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  categoryName: string;

  @IsNumber()
  @IsPositive()
  value: number;

  @IsBoolean()
  isRecurrent: boolean;

  @IsBoolean()
  isInInstallments: boolean;

  @IsBoolean()
  @ValidateIf((transaction) => transaction.isInInstallments !== false)
  installments?: number;

  @IsBoolean()
  @ValidateIf((transaction) => transaction.isInInstallments !== false)
  currentInstallment?: number;

  @IsDateString({ strict: true })
  date: Date;

  @IsString()
  paymentMethod: string;
}
