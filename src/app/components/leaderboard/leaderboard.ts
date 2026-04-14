import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-leaderboard',
  imports: [RevealDirective],
  templateUrl: './leaderboard.html',
})
export class Leaderboard {
  content = inject(ContentService);
}
