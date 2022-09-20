import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor() { }
  @Input() githubrepos:any[];

  length:any;
  page:number=1;
  ngOnInit(): void {
    this.length=this.githubrepos.length;
  }

}
