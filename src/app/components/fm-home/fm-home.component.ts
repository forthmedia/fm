import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fm-home',
  templateUrl: './fm-home.component.html',
  styleUrls: ['./fm-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmHomeComponent {
}
