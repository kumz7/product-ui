import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  header;
  msgs;
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}
  public deploy(){

  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  ngOnInit() {
  }

}
