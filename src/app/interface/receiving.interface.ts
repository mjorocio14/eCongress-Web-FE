import { ILetterType } from "./letter-type.interface";
import { IPersonnel } from "./personnel.interface";

export interface IReceiving {
     id: number;
     fromSender: string;
     description: string;
     eventDateStart: string;
     eventDateEnd: string;
     note: string;
     contact: string;
     letterType: ILetterType;
     dateTimeReceived: string;
     receivedBy: IPersonnel;
     remarks: string;
}