import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isUnsupportedNavigator: boolean;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.detectIE() < 11) {
      this.isUnsupportedNavigator = true;
    } else {
      this.isUnsupportedNavigator = false;
    }
    this.listenRouterChanges();
  }

  private detectIE() {
    if (window.navigator.userAgent.indexOf('MSIE ') > 0) {
      // IE 10 or older => return version number
      return parseInt(
        window.navigator.userAgent.substring(
          window.navigator.userAgent.indexOf(
            'MSIE '
          )
          + 5,
          window.navigator.userAgent.indexOf(
            '.',
            window.navigator.userAgent.indexOf('MSIE ')
          )
        ),
        10
      );
    }
  }

  private listenRouterChanges() {
    // Scroll to top after navigate
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }
}
