import { IsString } from 'class-validator';

export class StoreDto {
  @IsString()
  content: string;
}
