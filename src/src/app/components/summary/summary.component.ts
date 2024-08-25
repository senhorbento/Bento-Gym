import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Constants } from '../../core/constants';
import { MatIconModule } from '@angular/material/icon';
import { Exercise } from '../../core/models/exercise';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, ReactiveFormsModule, CommonModule, MatIconModule, MatCardModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})

export class SummaryComponent {
  Constants: Constants = new Constants();
  exercises: Exercise[][] = [this.Constants._DAY1_, this.Constants._DAY2_];
  repetitions: { [key: string]: { seconds: number, milliseconds: number, isFinished: boolean }[] } = {};
  timers: { [key: string]: any[] } = {};

  constructor() {
    this.initializeRepetitionTimes();
  }


  initializeRepetitionTimes() {
    this.repetitions = this.repetitions || {};
    this.timers = this.timers || {};
    this.exercises.forEach(dayExercises => {
      dayExercises.forEach(exercise => {
        const times = [];
        for (let i = 0; i < exercise.Series; i++) {
          times.push({ seconds: 0, milliseconds: 0, isFinished: false });
        }
        this.repetitions[exercise.Name] = times;
        this.timers[exercise.Name] = [];
      });
    });
  }

  isAllSeriesCompleted(exercise: Exercise): boolean {
    const repetitions = this.repetitions[exercise.Name];
    if (!Array.isArray(repetitions)) return false;
    const allCompleted = repetitions.every(rep => rep.isFinished);
    return allCompleted;
  }

  startCounter(exercise: Exercise, repetitionIndex: number) {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      let { seconds, milliseconds, isFinished } = this.repetitions[exercise.Name][repetitionIndex];
      isFinished = true;
      seconds = elapsed;
      milliseconds += 10;
      if (seconds >= exercise.Rest) {
        milliseconds = 0;
        clearInterval(interval);
      }
      if (milliseconds >= 1000)
        milliseconds = 0;
      this.repetitions[exercise.Name][repetitionIndex] = { seconds, milliseconds, isFinished };
      this.timers[exercise.Name][repetitionIndex] = interval;
    }, 10);
  }
}
