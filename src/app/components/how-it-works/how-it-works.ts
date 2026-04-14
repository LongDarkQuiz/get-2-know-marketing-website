import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-how-it-works',
  imports: [RevealDirective],
  templateUrl: './how-it-works.html',
})
export class HowItWorks {
  content = inject(ContentService);
}
