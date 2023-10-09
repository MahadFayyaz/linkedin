import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  password: string;
}

export class LoginUserDto {
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    password: string;

}
export class ForgotPasswordDto {
    @ApiProperty({
      example: '',
    })
    @IsEmail({}, { message: 'email must be a valid email' })
    @IsNotEmpty({ message: 'email is required' })
    email: string;
  }