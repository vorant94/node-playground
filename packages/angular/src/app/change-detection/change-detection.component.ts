import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChangeDetectionChildComponent } from './change-detection-child/change-detection-child.component';
import { ChangeDetectionStateModel } from './change-detection.models';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [ChangeDetectionChildComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
  insideItself: ChangeDetectionStateModel = { counter: 0 };
  insideChildWithOutput: ChangeDetectionStateModel = { counter: 0 };
  insideChildPush: ChangeDetectionStateModel = { counter: 0 };

  countInsideItself() {
    this.insideItself.counter++;
  }

  countInsideChildWithOutput() {
    this.insideChildWithOutput.counter++;
  }

  countInsideChildPush() {
    this.insideChildPush = {
      counter: this.insideChildPush.counter + 1,
    };
  }
}
