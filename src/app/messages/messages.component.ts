import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import {MsgClientService} from '../services/msg-client.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, public msgclientService: MsgClientService) {
    console.log(msgclientService.messages);
  }
  ngOnInit() {
  }

}
