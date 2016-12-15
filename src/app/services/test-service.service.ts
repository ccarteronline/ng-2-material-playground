import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestServiceService {
    constructor(private http: Http) { }

    getJsonFromApi () {
        return this.http.get('http://localhost:8800/api/getSomething')
            .map(response => response.json());
    }

    postToApi (postItems) {
        return this.http.post('http://localhost:8800/api/postSomething', postItems)
            .map(response => response.json());
    }
}
