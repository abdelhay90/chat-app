import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from '../../../model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input()
  messages: IMessage[];
  constructor() {}

  ngOnInit() {}
}
