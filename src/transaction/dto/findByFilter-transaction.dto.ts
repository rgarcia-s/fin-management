import { IsDateString, IsEnum, ValidateIf } from 'class-validator';
import { TransactionTypeEnum } from '../enums/transactionType.enum';

export class FindByFilterTransactionDto {
  @IsDateString()
  @ValidateIf((dto) => typeof dto.startDate === 'string')
  startDate: Date = new Date();

  @IsDateString()
  @ValidateIf((dto) => typeof dto.endDate === 'string')
  endDate: Date = new Date();

  @IsEnum(TransactionTypeEnum)
  @ValidateIf((dto) => typeof dto.type === 'string')
  type: TransactionTypeEnum;
}
