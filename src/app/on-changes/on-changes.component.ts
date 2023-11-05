import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges{
  @Input() hero!: Hero;
  @Input() power!: string;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for(let propName in changes) {
      let chng = changes[propName];
      let curr = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${curr}, previousValue = ${prev}`);
    }
  }

  reset() {
    this.changeLog = [];
  }
}
