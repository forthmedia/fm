import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'fm-nav',
  templateUrl: './fm-nav.component.html',
  styleUrls: ['./fm-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmNavComponent {
  @Input() uid: string = '';
}
