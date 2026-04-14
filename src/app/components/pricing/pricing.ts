import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-pricing',
  imports: [RevealDirective],
  templateUrl: './pricing.html',
})
export class Pricing {
  content = inject(ContentService);
}
