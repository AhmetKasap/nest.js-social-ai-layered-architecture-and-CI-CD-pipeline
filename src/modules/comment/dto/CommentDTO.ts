import { IsNotEmpty, IsUUID, Length } from "class-validator";
export class CommentDTO {
    @IsNotEmpty()
    @Length(5,200)
    text : string

    @IsNotEmpty()
    @IsUUID()
    postId : string
}

