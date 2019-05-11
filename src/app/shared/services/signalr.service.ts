import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public api = environment.apiUrlR;
  connection;
  token: string;
  constructor() {
    // this.token = localStorage.getItem('token');
    // console.log(this.token);
    // if (this.token) {
    //   // if ( !this.connection.started ) {
    //   this.connectionToSignalR(this.token);
    //   // }
    // }
  }
  connectionToSignalR(token) {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://5.23.55.101/chat', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
        accessTokenFactory: () => token
      })
      .build();
    this.connection.start().then((r) => {
      console.log('connection started');
    });
    this.connection.on('ListenToAccept', function (username, userOrderJson) {
      // Html encode display name and message.
      console.log(username);
      console.log(userOrderJson);
    });
  }

  // start() {
  // }

  makeOrder() {
    this.connection.send('makeOrder', 'ClientAccountTransaction');
  }
}
