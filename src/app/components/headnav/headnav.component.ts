import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.scss']
})
export class HeadnavComponent implements OnInit {

  constructor() { }

  public isMenuCollapsed = true;

  ngOnInit(): void {
  }

}
