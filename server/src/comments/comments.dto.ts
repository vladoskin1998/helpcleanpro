import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class AddComments{

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    comment: string

    @IsNumber()
    @IsNotEmpty()
    rating: number
}