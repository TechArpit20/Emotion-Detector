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
  @ViewChild('cancelDialog') cancelComponent!: TemplateRef<any>;

  constructor( private apiService: ApiService, 
    public dialog: MatDialog) { }

  @Output() getPicture = new EventEmitter<WebcamImage>();
  sentence:string='';
  mood: string='';
  startCapture:boolean=false;
  all_images:WebcamImage[]=[]
  webcamImage!: WebcamImage;
  
  private trigger: Subject<void> = new Subject<void>();


  triggerSnapshot(): void {
   this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.all_images.push(webcamImage)
    this.getPicture.emit(webcamImage);
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
   }

   get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  ngOnInit(): void {
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  openCam(){
    this.startCapture=true
    // setTimeout(()=>{
    //   console.log("Triggered Stop")
    //   this.triggerSnapshot()
    //   this.startCapture=false
    // },3000)
    // while (this.all_images.length<11){
      // this.delay(1000);
      this.triggerSnapshot();
    // }
  }

  findEmotions(){
    const data={
      "sentence": this.sentence
    }
    this.apiService.textemotions(data).subscribe((res:OutputData)=>{
      this.mood=res.message
      this.openDialog()
    })
  }

  openDialog(): void {
    this.dialog.open(this.cancelComponent, {
      width: '800px',
    });
  }
}
