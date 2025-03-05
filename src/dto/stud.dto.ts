import { IsString, IsInt, Min, Length } from "class-validator"

export class StudentsDto {
    @IsString()
    name: string

    @IsInt()
    @Min(1)
    age: number

    @IsString()
    @Length(1,1)
    grade: string
}