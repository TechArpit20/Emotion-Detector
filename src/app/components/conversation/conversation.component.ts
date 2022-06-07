import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OutputData } from 'src/app/models/signup.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @ViewChild('cancelDialog') cancelComponent!: TemplateRef<any>;

  constructor( private apiService: ApiService, 
    public dialog: MatDialog) { }
  sentence:string='';
  mood: string='';
  ngOnInit(): void {
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
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
      width: '250px',
    });
  }
}

