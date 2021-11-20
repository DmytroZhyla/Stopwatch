import { Component } from '@angular/core';
import {interval, pipe} from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  time: number = 0
  started: boolean = true
  stopped: boolean = false
  period: number = 1000
  dbclicked: boolean = false
  min:number = 0
  sec:number = 0

  sub$ = interval(this.period).subscribe(value => {
    this.time++
    this.min = Math.floor((this.time % 3600)/60);
    this.sec = Math.floor(this.time % 60);
    console.log(this.time)
  })

  stop(): void {
    this.sub$.unsubscribe()
    this.time = 0
    this.started = !this.started
    this.stopped = !this.stopped
  }

  start(): void {
    this.sub$ = interval(this.period).subscribe(value => {
        this.time++
        this.min = Math.floor((this.time % 3600)/60);
        this.sec = Math.floor(this.time % 60);
        console.log(this.time)
      }
    )
    this.started = !this.started
    this.stopped = !this.stopped
  }

  Wait() {
    this.sub$.unsubscribe()
    this.started = false
    this.stopped = true
    this.dbclicked = false
  }

  Reset() {
    this.time = 0
  }

  dbclick() {
    this.dbclicked =true
    setTimeout((value => {
      if (this.dbclicked === true){
        this.dbclicked=false

      }
    }),500)

  }



}
