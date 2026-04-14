import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-story',
  imports: [RevealDirective],
  templateUrl: './story.html',
})
export class Story {
  content = inject(ContentService);
}
