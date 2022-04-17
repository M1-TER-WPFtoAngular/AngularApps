import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-window1',
  templateUrl: './window1.component.html',
  styleUrls: ['./window1.component.css']
})
export class Window1Component implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("caca");
  }
  public Valider() : void {

  }

}
