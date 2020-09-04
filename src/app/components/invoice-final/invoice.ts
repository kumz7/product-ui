export class Invoice {
    // _description;_qty;_unit_price;_discount;_total;sub_total;
    fields:Array<Array<string>>;
    invoice_no;  
    date:string="";
    sub_total=0;total_rate=0;sales_tax=0;others=0;total=0;
} 