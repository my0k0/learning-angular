import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Directive, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LoggerService } from '../logger.service';

let nextId = 1;

@Directive()
export class PeekABooDirective implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css']
})
export class PeekABooComponent extends PeekABooDirective implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() name!: string;
  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    let is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges): void {
    let changeMsgs: string[] = [];

    for(let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changeMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changeMsgs.push(propName + ' ' + this.verb);
      }
    }

    this.logIt(`OnChanges: ${changeMsgs.join('; ')}`);
    this.verb = 'changed';
  }

  // Beaware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck(): void {
    this.logIt(`DoCheck`);
  }

  ngAfterContentInit(): void {
    this.logIt(`AfterContentInit`);
  }

  // Beaware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked(): void {
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('AfterViewInit');
  }

  // Beaware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked(): void {
    this.logIt('AfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logIt('OnDestroy');
  }
}
