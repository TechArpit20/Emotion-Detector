import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.scss']
})
export class HeadnavComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService) { }

  public isMenuCollapsed = true;

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this.router.navigate([''])
  }

  goToFacial(){
    this.router.navigate(['/user/facial'])
  }

  goToConv(){
    this.router.navigate(['/user/conversation'])
  }

}
