import {
    IsString,
    IsNotEmpty,
    IsOptional
} from 'class-validator';

export class CreateBookmarkDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    descriptions?: string;

    @IsString()
    @IsNotEmpty()
    link: string;
}