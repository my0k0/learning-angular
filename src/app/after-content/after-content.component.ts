import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-child',
  template: '<input [(ngModel)]="hero">'
})
export class ChildComponent {
  hero = 'Magneta';
}

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements AfterContentInit, AfterContentChecked {
  private prevHero = '';
  comment = '';

  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit(): void {
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked(): void {
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
}
