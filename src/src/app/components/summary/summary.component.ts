import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})

export class SummaryComponent {
  exercises = [
    {
      "Exercise": "Voador Frontal",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    },
    {
      "Exercise": "Flexão de Braço Solo",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    },
    {
      "Exercise": "Tríceps Paraleleo",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    },
    {
      "Exercise": "Bíceps Simutâneo HBC",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    },
    {
      "Exercise": "Remada Articulada Neutra",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    },
    {
      "Exercise": "Desenvolvimento Completo HBC",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    },
    {
      "Exercise": "Voador Invertido",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    },
    {
      "Exercise": "Abdominal Supra",
      "Repetitions": 15,
      "Series": 3,
      "Rest": 30
    }
  ];

  repetitionTimes: { [key: string]: { seconds: number, milliseconds: number }[] } = {};
  timers: { [key: string]: any[] } = {};

  constructor() {
    this.initializeRepetitionTimes();
  }

  initializeRepetitionTimes() {
    this.exercises.forEach(exercise => {
      const times = [];
      for (let i = 0; i < exercise.Series; i++) {
        times.push({ minutes: 0, seconds: 0, milliseconds: 0 });
      }
      this.repetitionTimes[exercise.Exercise] = times;
      this.timers[exercise.Exercise] = [];
    });
  }

  startCounter(exercise: any, repetitionIndex: number, event: any) {
    let { seconds, milliseconds } = this.repetitionTimes[exercise.Exercise][repetitionIndex];
    const interval = setInterval(() => {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds >= exercise.Rest) {
        clearInterval(interval);
      }
      this.repetitionTimes[exercise.Exercise][repetitionIndex] = { seconds, milliseconds };
    }, 10);

    this.timers[exercise.Exercise][repetitionIndex] = interval;
  }
}
