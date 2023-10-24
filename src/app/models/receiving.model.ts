import { LetterType } from "./letter-type.model";
import { Personnel } from "./personnel.model";

export class Receiving {
    public id: number;
    public fromSender: string;
    public description: string;
    public eventDateStart: string;
    public eventDateEnd: string;
    public note: string;
    public contact: string;
    public letterType: LetterType;
    public dateTimeReceived: string;
    public receivedBy: Personnel;
    public remarks: string;

    constructor(_id: number, _fromSender: string, _description: string, _eventDateStart: string, _eventDateEnd: string,
        _note: string, _contact: string, _letterType: LetterType, _dateTimeReceived: string, _receiveBy: Personnel, _remarks: string) {
        this.id = _id;
        this.fromSender = _fromSender;
        this.description = _description;
        this.eventDateStart = _eventDateStart;
        this.eventDateEnd = _eventDateEnd;
        this.note = _note;
        this.contact = _contact;
        this.letterType = _letterType;
        this.dateTimeReceived = _dateTimeReceived;
        this.receivedBy = _receiveBy;
        this.remarks = _remarks;
    }
}