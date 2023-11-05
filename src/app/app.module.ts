import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import { SpyParentComponent } from './spy-parent/spy-parent.component';
import { SpyDirective } from './spy.directive';
import { FormsModule } from '@angular/forms';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterViewComponent, ChildViewComponent } from './after-view/after-view.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { AfterContentComponent, ChildComponent } from './after-content/after-content.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective,
    OnChangesParentComponent,
    OnChangesComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    ChildViewComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    CounterParentComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
