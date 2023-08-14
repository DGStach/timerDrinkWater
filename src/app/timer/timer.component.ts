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

  playAudio(){
    let audio = new Audio();
    audio.src = './pouringWater.mp3';
    audio.load();
    audio.play();
/*
    this.playAudio();
*/
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
  this.timeLeft = 120;
  }
}
