import { IsDateString } from 'class-validator';

export class FindByDateTransactionDto {
  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}
