import { Component, inject, signal } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-events',
  imports: [RevealDirective],
  templateUrl: './events.html',
})
export class Events {
  content = inject(ContentService);
  activeTab = signal(0);

  setTab(index: number) {
    this.activeTab.set(index);
  }
}
