import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.html',
})
export class Hero {
  content = inject(ContentService);
}
