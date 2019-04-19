import { EventService } from './../../shared/services/event.service';
import { BookedTable } from './../../shared/models/models';
import { ServerService } from 'src/app/shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booked-tables',
  templateUrl: './booked-tables.component.html',
  styleUrls: ['./booked-tables.component.scss']
})
export class BookedTablesComponent implements OnInit {
  user: UserData;
  bookedTable: BookedTable[] = [];
  api = environment.apiUrl;

  constructor(private server: ServerService, private eventService: EventService) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);

    this.server.getBookedTable(this.user.restaurantId).then((r) => {
      this.bookedTable = r;
    });
  }

  showFullInfo(table: BookedTable) {
    this.bookedTable.map((r) => {
      if (r.id != table.id) {
        r.showFullInfo = false;
      }
    });
    table.showFullInfo = !table.showFullInfo;
  }

  getDate(reservDate: string) {
    let date = new Date(reservDate);
    return date.getDate() + ' ' + this.getMonthName(date) + ' ' + date.getFullYear() + 'г.';
  }

  getMonthName(date: Date) {
    return this.eventService.getMonthName(date.getMonth() + 1, true, true);
  }

  acceptReserve(table: BookedTable) {
    this.server.acceptReserve(table).then(() => {
      table.reserveStatus = 1;
    });
  }

  deleteReserve(table: BookedTable, i) {
    this.server.deleteBookedTable(table).then(() => {
      this.bookedTable.splice(i, 1);
    });
  }
  rejectReserve(table: BookedTable, i) {
    this.server.rejectReserve(table).then(() => {
      table.reserveStatus = 2;
    });
  }
}
