import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { mType } from './mType';
import { AppService } from '../components/app.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService,public service:AppService) {} // {2}

  // public openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template); // {3}
  //}
  ngOnInit() {
  }

}
