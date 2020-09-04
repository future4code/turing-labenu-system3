export  abstract class Person{
    protected id: number; 
    public name: string;
    protected email: string; 
    protected birthData: string; 
    
    constructor(id: number, 
        name: string, 
        email: string, 
        birthData: string, 

        ) {
        this.id = id;
        this.name = name; 
        this.email = email; 
        this.birthData = birthData;
       
    }
}