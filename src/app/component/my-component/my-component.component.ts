import { Component, OnInit } from '@angular/core';
import { BrowserDefinder } from 'src/app/browser/browserDefinder';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  public browserDefinder = new BrowserDefinder();

  public get className(): string {

    if (this.browserDefinder.isCurrentBrowserFirefox()) {
      return 'firefox';
    }
    else if (this.browserDefinder.isCurrentBrowserChrome()) {
      return 'chrome';
    }

    return '';
  };

  public get left(): number {
    if (this.browserDefinder.isCurrentBrowserFirefox()) {
      return 40;
    }
    else if (this.browserDefinder.isCurrentBrowserChrome()) {
      return 20;
    }

    return 0;
  }

}





  // create function that define a class wich I can use in HTML code
  // define some px top, from dymacal styles
