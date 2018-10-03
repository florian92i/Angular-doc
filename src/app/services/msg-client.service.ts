import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MsgClientService {
  public messages: string[] = [];
  public biduole: string = 'ok';
  add_msg_client(message: string) {
    this.messages.push(message);
  }
}
