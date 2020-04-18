import {HttpRequest,
        HttpResponse,
        HttpHandler,
        HttpEvent,
        HttpInterceptor
} from '@angular/common/http'

import {Injectable} from '@angular/core'
import { Observable, onErrorResumeNext} from 'rxjs'

const appKey = 'kid_SkZdjKh78';
const appSecret = '3d8788689d384c1aa9f3ce1575f73be7';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if (request.url.endsWith('login') || request.url.endsWith(appKey)){
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        }else {
            request = request.clone({
                setHeaders: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
                }
            })           
        }


        return next.handle(request);
    }
}