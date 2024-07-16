import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class NotificationDto{

    
    @IsString()
    @IsNotEmpty()
    city: string
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsOptional()
    @IsString()
    comment: string

}