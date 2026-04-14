import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-physical-card',
  imports: [RevealDirective],
  templateUrl: './physical-card.html',
})
export class PhysicalCard {
  content = inject(ContentService);
}
