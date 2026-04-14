import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-cta',
  imports: [RevealDirective],
  templateUrl: './cta.html',
})
export class Cta {
  content = inject(ContentService);
}
