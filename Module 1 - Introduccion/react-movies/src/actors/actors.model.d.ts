import { string } from "yup";

export interface actorCreationDTO{
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}