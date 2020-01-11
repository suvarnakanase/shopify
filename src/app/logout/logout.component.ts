import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService , private rou: Router, private ds: DatatransferService) { }

  ngOnInit() {
    this.auth.removeval();
    this.rou.navigate(['/login']);

    this.ds.changemenu({status:0});

  }

}
