import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { OutputData } from 'src/app/models/signup.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-facial',
  templateUrl: './facial.component.html',
  styleUrls: ['./facial.component.scss']
})
export class FacialComponent implements OnInit {


  constructor( private apiService: ApiService) { }


  ngOnInit(): void {
  }

  openCam(){
      this.apiService.imageDetect().subscribe((res)=>{
        // console.log(res)
      })
    }

}
