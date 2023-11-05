import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges {
  @Input() counter!: number;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.counter === 0)
      this.changeLog = [];

    let chng = changes['counter'];
    let cur = chng.currentValue;
    let prev = JSON.stringify(chng.previousValue);
    this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
