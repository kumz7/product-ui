import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { AppService } from '../components/app.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnChanges {
  @Input() print:boolean;
  @Input() isPrint:boolean;
  @Input() tableData:any=[];
  @Input() invoiceData:Array<any>;
  @Input() header:Array<string>;
  @Output() selectedRecord = new EventEmitter();
  private gridApi: GridApi;
  activeCol  = ['name','contact','ticket','issue']
  columnDefs = [];
  rowData = [];
  title = 'app';
  constructor(private service:AppService){
  }
  ngOnChanges(changes: SimpleChanges): void{
    if(Object.keys(changes)[0]=="print"&&this.gridApi){
      if(this.print)
      this.gridApi.setDomLayout('print');
    else
      this.gridApi.setDomLayout(null);
      return;
    }
    if(this.header){
      this.header.forEach(hdr=>{
        this.columnDefs.push({'headerName':hdr,'field':hdr,sortable: true, filter: true});
      })
    }
    if(this.invoiceData){
      this.tableData = [];
      this.rowData = [];
      this.invoiceData.forEach(element => {
        this.rowData.push(element);   
      });
      // this.columnDefs.push({'headerName':key,'field':key,sortable: true, filter: true});
    }
    else if(this.tableData) {
      this.columnDefs = [];
      this.rowData = [];
      let rowObj = {};
      this.tableData.forEach((element, eltI) => {
        rowObj = {};
            Object.keys(element).forEach((key ,keyI ) => {
              if(keyI==0&&eltI==0)              
                this.columnDefs.push({'headerName':key,hide:true,'field':key,sortable: true, filter: true});
                if(key=='id')
                  rowObj[key] = element[key];
              Object.keys(element[key]).forEach((keychild ,index ) => {
                if(keychild=='mapping') return;
                if(keychild=='id') keychild='id_'+key;
                  if(eltI==0){
                    let flag = (this.activeCol.indexOf(keychild)==-1); 
                    this.columnDefs.push({'headerName':keychild,hide:flag,'field':keychild,sortable: true, filter: true});
                  }
                  //git status
                  rowObj[keychild] = element[key][keychild];
              }); 
            });
            this.rowData.push(rowObj);
      });
    }
    setTimeout(() => {
      if(this.gridApi){
        this.gridApi.sizeColumnsToFit();
      }
    }, 150);
  }
  onRowClicked(event:any){
    this.selectedRecord.emit();
    this.service.setRow(this.tableData.filter(row => row.id==event.data.id)[0]);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.setDomLayout(null);
    params.api.sizeColumnsToFit();
  } 
}
