import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { Router } from '@angular/router';
import * as signalR from "@aspnet/signalr";
import { SignalrService } from 'src/app/shared/services/signalr.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  connection;
  con: boolean = false;

  constructor(private service: ServerService, private router: Router, private signalR: SignalrService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      return this.router.navigate(['']);
    } else if (token !== 'null') {
      // this.signalR.makeOrder();
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('http://5.23.55.101/chat', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets,
          accessTokenFactory: () => token
        })
        .build();
      this.connection.start().then(() => {
      }).catch((err) => console.log(err));
      this.connection.on('ListenToAccept', function (username, messageOrder) {
        // Html encode display name and message.
        var encodedName = username;
        var encodedMsg = messageOrder;
        console.log(username);
        console.log(messageOrder);
      });
    }
  }

  senMassage() {
    this.connection.send('MakeOrder', 'dasda')
      .then(() => console.log('sended'));
  }
}
