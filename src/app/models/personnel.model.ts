import { Designation } from "./designation.model";

export class Personnel {
    public id: number;
    public lastName: string;
    public firstName: string;
    public middleName: string;
    public extName: string;
    public designation: Designation;
    public username: string;
    public dateTimeCreated: string;

    constructor(_id: number, _lastName: string, _firstName: string, _middleName: string, _extName: string,
        _designation: Designation, _username: string, _dateTimeCreated: string)
    {
        this.id = _id;
        this.lastName = _lastName;
        this.firstName = _firstName;
        this.middleName = _middleName;
        this.extName = _extName;
        this.designation = _designation;
        this.username = _username;
        this.dateTimeCreated = _dateTimeCreated
    }
}