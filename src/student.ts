import { Person } from "./Person"
import moment from 'moment'

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export class Student implements Person {
    public id: number; 
    public name: string;
    public email: string; 
    public birthData: moment.Moment;

    constructor(
    id: number,
    name: string,
    email: string, 
    birthData: moment.Moment
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthData = birthData;
    }

    public getId(): number {
        return this.id
    };
    
    public getName(): string {
        return this.name
    };

    public getEmail(): string {
        return this.email
    };

    public getBirthData(): moment.Moment {
        return this.birthData;
    };

    public setName(name: string): void {
        this.name = name
    };

    public setEmail(email: string): void {
        this.email = email
    };

    public setBirthData(data: moment.Moment): void {
        this.birthData = this.birthData
    };
}