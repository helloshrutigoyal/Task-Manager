export class NameValueItem
{
    label : string;
    value : any;
    selected : boolean; // just a place holder i am not using it.

    constructor(label : string, value : any) 
    {
        this.label = label;
        this.value = value;
    }
}