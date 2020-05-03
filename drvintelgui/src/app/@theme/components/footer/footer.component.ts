import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Powered by <b><a href="https://drvintelli.com" target="_blank">DRV-INTELLI Solutions Pvt Ltd</a></b>
    </span>
  `,
})
export class FooterComponent {
}
