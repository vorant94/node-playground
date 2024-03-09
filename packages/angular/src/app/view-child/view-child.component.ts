import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from './view-child-child/view-child-child.component';
import { ViewChildConditionalChildComponent } from './view-child-conditional-child/view-child-conditional-child.component';
import { ViewChildStaticChildComponent } from './view-child-static-child/view-child-static-child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [
    ViewChildChildComponent,
    ViewChildStaticChildComponent,
    ViewChildConditionalChildComponent,
  ],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss',
})
export class ViewChildComponent implements OnInit {
  @ViewChild(ViewChildChildComponent)
  child!: ViewChildChildComponent;
  @ViewChild(ViewChildStaticChildComponent, { static: true })
  staticChild!: ViewChildStaticChildComponent;
  @ViewChild(ViewChildConditionalChildComponent, { static: true })
  conditionalChild!: ViewChildConditionalChildComponent;

  ngOnInit() {
    console.log('child inside ngOnInit', this.child);
    console.log('static child inside ngOnInit', this.staticChild);
    console.log('conditional child inside ngOnInit', this.conditionalChild);
  }
}
