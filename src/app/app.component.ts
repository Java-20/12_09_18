import {AfterViewInit, Component, OnInit} from '@angular/core';
import {fadeInOut, inOutAnim, inOutHAnim} from './app.animation';
import {interval, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[inOutAnim,fadeInOut,inOutHAnim]
})
export class AppComponent implements AfterViewInit{
  isVisible: boolean = false;

  names: string[] = [];

  getState(): string{
    // return this.isVisible ? 'show' : 'hide';
    return 'myState';
  }

  ngAfterViewInit(): void {
    let i = interval(300);
    let s = i.subscribe(v=>{
      if(v<10) {
        this.names.push('Name ' + v)
      }else{
        s.unsubscribe();
      }
    })
  }

  remove(i:number){
    this.names.splice(i,1);
  }






}
