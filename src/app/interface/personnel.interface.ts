import { IDesignation } from "./designation.interface";

export interface IPersonnel {
    id: number;
    lastName: string;
    firstName: string;
    middleName: string;
    extName: string;
    designation: IDesignation;
    username: string;
    dateTimeCreated: string;
}