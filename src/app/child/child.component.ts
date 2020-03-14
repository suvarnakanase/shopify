import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() varChild;
  @Output() myEve = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  passData(val){
    console.log(val);
    this.myEve.emit(val);
  }

}
