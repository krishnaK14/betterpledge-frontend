import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }
   
    sendData(user:JSON) {
        return this.http.post('https://6208bf5c.ngrok.io/createdonor',user);
    }
    getData() {
        return this.http.get("https://6208bf5c.ngrok.io/createdonor");
    }
    changeProfile(value){
    
    }
}