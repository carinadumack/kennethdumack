import {Component, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.scss']
})
export class TwitterFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLoad($event: EventEmitter<any>) {

  }
}
