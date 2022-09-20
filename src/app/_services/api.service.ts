import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError,Observable } from 'rxjs';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/GitHubcred';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseUrl:string='https://api.github.com/users/defunkt'
  constructor(private httpClient: HttpClient) { }
  public getProfile(searchQuery): Observable <any>{
    let dataUrl=`https://api.github.com/users/${searchQuery}? client_id=${CLIENT_ID} &client_secrets=${CLIENT_SECRET}`;
    
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.handleerrors)
    ); 
  }
  public handleerrors(error:HttpErrorResponse){
    let errormess:string;

    if(error.error instanceof ErrorEvent){
      errormess="MESSAGE : ${error.error.message}"
    }
    else{
      errormess="STATUS:${error.error.status} MESSAGE : ${error.error.message}"
    }
    return (errormess);
    
  }
  
  
  public getRepos(searchQuery):Observable <any[]>{
    let dataUrl=`https://api.github.com/users/${searchQuery}/repos? client_id=${CLIENT_ID} &client_secrets=${CLIENT_SECRET}`;
    console.log(searchQuery)
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.handleerrors)
    ); 
  }
}


