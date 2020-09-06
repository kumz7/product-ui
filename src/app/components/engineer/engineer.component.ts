import { Component, OnInit, Input } from '@angular/core';
import { Engineer } from './engineer';
import { AppService } from '../app.service';
import { mType } from 'src/app/toast/mType';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {
  @Input() isDisabled:boolean;
  @Input() object:Engineer[];
  aparts;astatus;
  remarks:string ="";
  @Input() parts:Array<string> = [];
  @Input() status:Array<string> = [];
  constructor(public service:AppService) { }
  isList:boolean = true;
  ngOnInit() {
    this.service.engineer = new Engineer();
  }
  delete(id){
    let index; let Rdata;
    this.service.deleteEngineer(id).subscribe(data=>{
      this.service.showToast("Success","Deleted!",mType.success);
    },error=>{
      this.service.showToast("Error","in deletion!",mType.error); 
    },()=>{
      this.service.getDayMapping(this.service.currentData.id); 

        this.service.engineer.remarks = "";
        this.service.engineer.parts = "";
        this.service.engineer.status = "";
      // let subs = this.service.getRow().subscribe(data=>{
      //   Rdata = data ;
      //   index = Rdata.engineer.findIndex((val)=>val.id==id)
      //   Rdata.engineer.splice(index,1);
      // });
      // setTimeout(() => {
      //   subs.unsubscribe();
      //   this.service.engineer.remarks = "";
      //   this.service.engineer.parts = "";
      //   this.service.engineer.status = "";
      //   this.service.getCurrentData = Rdata;
      //   this.service.setRow(this.service.getCurrentData);
      // }, 500);
    })
  }
  showTable(){
    this.isList=!this.isList;
  }
  selectStatus(option){

    this.service.engineer.status =  option;
  }
  selectParts(option){
    this.service.engineer.parts =  option;
  }
}
