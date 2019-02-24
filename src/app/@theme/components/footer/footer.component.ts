import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://www.linkedin.com/in/alex-lim-036250137/" target="_blank">Admin</a></b> 2017</span>
    <div class="socials">
      <a target="_blank" class="ion ion-ios-email"><small>admin@gmail.com</small></a><br/>
    </div>
  `,
})
export class FooterComponent {
}
