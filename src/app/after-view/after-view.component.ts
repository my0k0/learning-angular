import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-child-view',
  template: `
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="hero">
  `
})
export class ChildViewComponent {
  hero = 'Magneta';
}

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
  private prevHero = '';

  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterViewParent constructor');
  }

  ngAfterViewInit(): void {
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked(): void {
    if(this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  comment = '';

  private doSomething(){
    let c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
    if (c !== this.comment) {
      this.logger.tick_then(() => this.comment = c);
      // this.comment = c;
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
}
