import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  userId: string;
  confirm = '';
  constructor(private route: ActivatedRoute, private service: ServerService, private router: Router) { }

  ngOnInit() {

    localStorage.setItem('token', 'null');
    this.route.params.subscribe((params) => {
      this.userId = params.id;
    });

    this.service.confirEmail(this.userId).then(r => {
      this.confirm = r.status;
      alert(this.confirm);
      return this.router.navigate(['/sign']);
    });
  }

}
