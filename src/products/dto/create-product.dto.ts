import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @Type(() => Number)
  price: number;
}
