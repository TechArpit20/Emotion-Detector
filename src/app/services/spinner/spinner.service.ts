import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  private loadingBar= new BehaviorSubject<boolean>(false)
  public readonly getLoader= this.loadingBar.asObservable();

  show(){
    this.loadingBar.next(true);
  }
  hide(){
    this.loadingBar.next(false);
  }
}
