import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
} from 'class-validator';
import { TransactionTypeEnum } from '../enums/transactionType.enum';
import { Transform } from 'class-transformer';

export class FindByFilterTransactionDto {
  @IsDateString()
  @ValidateIf((dto) => typeof dto.startDate === 'string')
  startDate: Date = new Date();

  @IsDateString()
  @ValidateIf((dto) => typeof dto.endDate === 'string')
  endDate: Date = new Date();

  @IsEnum(TransactionTypeEnum)
  @IsOptional()
  type: TransactionTypeEnum;

  @IsUUID()
  @IsOptional()
  category: string;

  @Transform(({ value }) =>
    value === 'true' ? true : value === 'false' ? false : 'invalid',
  )
  @IsBoolean()
  @IsOptional()
  isRecurrent: boolean;
}
