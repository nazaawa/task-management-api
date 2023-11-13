import { IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @IsNotEmpty()
    usernamed : string;
    @IsString()
    @IsNotEmpty()
    password : string;
}