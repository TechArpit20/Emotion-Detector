import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading: Observable<boolean> = this.loaderService.getLoader;

  constructor(private loaderService: SpinnerService) { }

  ngOnInit(): void {
  }

}
