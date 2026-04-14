import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  content = inject(ContentService);
}
