import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'fm-nav',
  templateUrl: './fm-nav.component.html',
  styleUrls: ['./fm-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmNavComponent {
  @Input() uid: string = '';
  @Output() onLogout: EventEmitter<void> = new EventEmitter();

  logout(): void {
    this.onLogout.emit();
  }
}
