import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
// in case server side api is not available
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class AccountService  {
    constructor(private http: HttpClient) { }

    get(): Observable<HttpResponse<Account>> {
        /**
         *  if server side apis are not ready use below code otherwise commented
         * 
         */
        const headers = new HttpHeaders({
            "pragma": "no-cache",
            "date": "Thu, 26 Apr 2018 18:43:11 GMT",
            "content-encoding": "gzip",
            "x-content-type-options": "nosniff",
            "transfer-encoding": "chunked",
            "content-type": "application/json;charset=UTF-8",
            "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
            "connection": "keep-alive",
            "x-xss-protection": "1; mode=block",
            "x-application-context": "lis-app:swagger,prod:8080",
            "expires": "0"
        });
        const body: any = {
            "activated": true,
            "id": 3,
            "login": "admin",
            "firstName": "Administrator",
            "lastName": "Administrator",
            "email": "admin@localhost",
            "imageUrl": "",
            "langKey": "en",
            "createdBy": "system",
            "createdDate": "2018-03-07T17:44:34Z",
            "lastModifiedBy": "system",
            "lastModifiedDate": null,
            "authorities": [
              "ROLE_USER",
              "ROLE_ADMIN"
            ]
        };

        const response = new HttpResponse(
            {"body": body, "headers": headers, "status": 200}
        );

        const obs = new Observable<HttpResponse<Account>>((observer)=>{
            observer.next(response);
            observer.complete();
        });
        return obs;
        //return this.http.get<Account>(SERVER_API_URL + 'api/account', {observe : 'response'});
    }

    save(account: any): Observable<HttpResponse<any>> {
        return this.http.post(SERVER_API_URL + 'api/account', account, {observe: 'response'});
    }
}
