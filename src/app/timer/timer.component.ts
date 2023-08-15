import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  timeLeft: number = 120;
  interval:number = 0;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.playAudio()
        this.timeLeft = 120;
      }
    },1000)
  }
  audio = new Audio();

  playAudio(){
    this.audio.src = "assets/water.mp3";
    this.audio.play()
      .then(()=>console.log("it works"))
      .catch((err)=>console.log(`error log->`,err))
  }
  stopAudio(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }


  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
  this.timeLeft = 120;
  }
}
