import { customer } from './customer/customer';

export class utils {
    
    public static validateEmail(email:string):boolean{
       return (/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(email);
    }
    public static validateMobile(mobile:string,flag:boolean):boolean{
        if(flag&&mobile.trim().length==0)
            return true;
        if(!mobile.startsWith("+91"))mobile="+91"+mobile;
        return (/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/.test(mobile));
     }
     public static validateNameSpace(name:string):boolean{
        return /^[a-zA-Z ]*$/.test(name);
     }

        

            
    
    
}