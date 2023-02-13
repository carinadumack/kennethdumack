import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public headline: string | null = null;

  @Input()
  public subline: string | null = null;

  @Input()
  public backgroundImg: string | null = null;


  constructor() { }

  ngOnInit(): void {
  }

}
