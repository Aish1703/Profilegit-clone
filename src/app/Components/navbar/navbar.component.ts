import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public githubUserQuery:string;
  public githubprofile: any;
  public githubrepos:any[];
  public errormessages: string;
 
  constructor(private githubService: ApiService, private ngxSpinnerService: NgxSpinnerService) { } //GithubService,private ngxSpinnerService: NgxSpinnerService) { }
  searchUser(){
    
    if(this.githubUserQuery===undefined||this.githubUserQuery==''){
      alert('Please enter username');
      return;
    }
    console.log(this.githubUserQuery);
    this.ngxSpinnerService.show();

    this.githubService.getProfile(this.githubUserQuery).subscribe((data)=>{
      console.log("in search user");
      this.githubprofile=data;
    },(error)=>{
      this.errormessages=error;
    })

    this.githubService.getRepos(this.githubUserQuery).subscribe((data)=>{
      this.githubrepos=data;
      this.ngxSpinnerService.hide();
    },(error)=>{
      this.errormessages=error;
    })
  }
  ngOnInit(): void {
  }

}
