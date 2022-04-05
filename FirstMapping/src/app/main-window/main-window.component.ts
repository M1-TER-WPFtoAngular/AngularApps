import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from "@angular/router";
@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {


  private GRID1 : HTMLElement | null = null;
  private BTN1  : HTMLElement | null = null;
  private TEXTBLOCK1  : HTMLElement | null = null;
  private affiche  : HTMLElement | null = null;

  constructor(private titleService: Title,
    private router: Router)  {
    titleService.setTitle("MainWindow");
  }

  ngOnInit(): void {
    this.GRID1 = document.getElementById("GRID1") ;
    this.BTN1 = document.getElementById("BTN1") ;
    this.TEXTBLOCK1 = document.getElementById("TEXTBLOCK1") ;
    this.affiche = document.getElementById("affiche") ;


    if (this.GRID1 && this.BTN1 && this.TEXTBLOCK1 && this.affiche) {
      this.BTN1.innerText = "Button" ;
      // 1: Liste des CSS
      let style = "" ;//The pixel is WPF's default unit of measurement.
      style += "position: absolute;";
      style += "left: " + ((window.innerWidth / 2) - (this.BTN1.clientWidth / 2))  + "px;";
      style += "top: 0px;";
      // Center / Top
      this.BTN1.setAttribute("style", style) ;

      let className = "" ;
      this.BTN1.setAttribute("class", className) ;
      
      // -=-=-=-=-=-=-=-=-
      this.TEXTBLOCK1.innerText = "Hello world" ;
      // 1: Liste des CSS
      style = ""; 
      style += "position: absolute;";
      style += "left: 0px;";
      style += "top: 0px;";
      // Left / Top
      this.TEXTBLOCK1.setAttribute("style", style) ;

      className = "" ;
      this.TEXTBLOCK1.setAttribute("class", className) ;
     


      // -=-=-=-=-=-=-=-=-
      this.affiche.innerText = "" ;
      // 1: Liste des CSS
      style = "";
      style += "position: absolute;";
      console.log((window.innerWidth / 2) - (this.affiche.clientWidth / 2));
      console.log((window.innerHeight / 2) - (this.affiche.clientHeight / 2))  ;
      style += "left: " + ((window.innerWidth / 2) - (this.affiche.clientWidth / 2))  + "px;";
      style += "top: " + ((window.innerHeight / 2) - (this.affiche.clientHeight / 2))  + "px;";
      // Center / Center
      this.affiche.setAttribute("style", style) ;

      className = "" ; 
      this.affiche.setAttribute("class", className) ;

      

      // -=-=-=-=-=-=-=-=-
    }
  }
  //Revoir le nommage des paramètres ici car HTMLElement pas équivalent à Object de WPF
  public afficher(sender : HTMLElement, target : HTMLElement) : void { //et RoutedEventArgs pas présent non plus
    //console.log(elmt) ;
    if (target.innerText == "")
      target.innerText = "Coucou";
    else
      target.innerText = "";

  
  //    this.router.navigate(['/window1'])
  }
}
