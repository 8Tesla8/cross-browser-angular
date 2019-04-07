import { Component, OnInit } from '@angular/core';
import { BrowserDefinder } from 'src/app/browser/browserDefinder';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public browserDefinder = new BrowserDefinder();

  constructor() { }

  ngOnInit() {
  }


}
