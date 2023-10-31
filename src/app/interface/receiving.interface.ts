import { ILetterType } from "./letter-type.interface";
import { IPersonnel } from "./personnel.interface";

export interface IReceiving {
     id: number;
     fromSender: string;
     description: string;
     eventDateStart: string;
     eventDateStart_formatted: string;
     eventDateEnd: string;
     eventDateEnd_formatted: string;
     note: string;
     contact: string;
     letterType: ILetterType;
     dateReceived: string;
     dateReceived_formatted: string;
     receivedBy: IPersonnel;
     remarks: string;
}