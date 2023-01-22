import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  content : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    let res = this.http.get("http://localhost:8081/getdetail",{responseType: 'text'});

    res.subscribe( data =>this.content =data)
  }

}
