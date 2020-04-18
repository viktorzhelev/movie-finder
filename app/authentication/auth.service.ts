import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

const appKey = 'kid_SkZdjKh78';
const appSecret = '3d8788689d384c1aa9f3ce1575f73be7';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;
const btoaString = appKey + ":" + appSecret;
const localStorageAuth = localStorage.getItem('authtoken');


@Injectable()
export class AuthService {
    currentAuthtoken: string;
    constructor(private http: HttpClient) {

    }

    login(model: LoginModel) {
        return this.http.post(loginUrl,JSON.stringify(model)
        // {
        //     headers: this.createAuthHeaders('Basic')
        // }
        )
    }

    register(model: RegisterModel) {
         return this.http.post(registerUrl,JSON.stringify(model)
        // {   
        //     headers:  this.createAuthHeaders('Basic')
        // }
        )
    }

    logout() {
        return this.http.post(logoutUrl, {}
            // {
            //     headers: this.createAuthHeaders('Kinvey')
            // }
            )
    }

    getAuthtoken() {
        this.currentAuthtoken;
    }

    setAuthtoken(value: string) {
        console.log('setAuthoken.........');
        console.log(value);
        this.currentAuthtoken = value;
    }
    
    checkIfLogged() {
        return this.currentAuthtoken === localStorage.getItem('authtoken')
    }

    // private createAuthHeaders (type: string){
    //     if (type === "Basic") {
    //         return new HttpHeaders({
    //             'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
    //             'Content-Type': 'application/json'
    //         })
            
    //     }else {
    //         return new HttpHeaders(
    //             {'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
    //             'Content-Type': 'application/json'
    //         })          
    //     }
    // }
}
