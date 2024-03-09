import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ChangeDetectionStateModel } from '../change-detection.models';

@Component({
  selector: 'app-change-detection-child',
  standalone: true,
  imports: [],
  templateUrl: './change-detection-child.component.html',
  styleUrl: './change-detection-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionChildComponent {
  @Input() state!: ChangeDetectionStateModel;
  @Output() count = new EventEmitter();
}
