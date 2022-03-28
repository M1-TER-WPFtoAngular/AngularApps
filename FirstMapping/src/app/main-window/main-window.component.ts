import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("MainWindow");
  }

  ngOnInit(): void {
    let GRID1 = document.getElementById("GRID1") ;
    let BTN1 = document.getElementById("BTN1") ;
    let TEXTBLOCK1 = document.getElementById("TEXTBLOCK1") ;
    let affiche = document.getElementById("affiche") ;

    if (GRID1 && BTN1 && TEXTBLOCK1 && affiche) {
      BTN1.innerText = "Button" ;
      // 1: Liste des CSS
      let style = "margin: 0px, 324px, 0px, 0px;" //The pixel is WPF's default unit of measurement.
      style += "text-align: center;" ;
      style += "vertical-align: top;" ;
      BTN1.setAttribute("style", style) ;
      // 2: Liste des eventlistener


      TEXTBLOCK1.innerText = "Hello world" ;
      // 1: Liste des CSS
      style = "margin: 370px,144px,0px,0px;"
      style += "text-align: left;" ;
      style += "vertical-align: top;" ;
      BTN1.setAttribute("style", style) ;
      // 2: Liste des eventlistener


      affiche.innerText = "" ;
      // 1: Liste des CSS
      style = "margin: 370px,144px,0px,0px;"
      style += "text-align: center;" ;
      style += "vertical-align: center;" ;
      BTN1.setAttribute("style", style) ;
      // 2: Liste des eventlistener
    }
  }
  //Revoir le nommage des paramètres ici car HTMLElement pas équivalent à Object de WPF
  afficher(sender : HTMLElement) : void { //et RoutedEventArgs pas présent non plus
    //console.log(elmt) ;
    if (sender.innerText == "")
      sender.innerText = "Coucou";
    else
      sender.innerText = "";
  }
}
