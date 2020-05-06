import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";

@Injectable()
export class ObdService {

    constructor(private http: HttpClient) { }

    obdURL = "./getdata";

    getObdData(): any {
        return this.http.get<any>(`${this.obdURL}`, { observe: "response" })
            .pipe(
                tap(res => {
                    console.log(res);
                    return res;
                })
            );
    }

}
