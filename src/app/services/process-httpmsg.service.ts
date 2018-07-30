import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPmsgService {

  constructor() { }

  public extractData(res: Response) {
    const body = res.json();

    return body || { };
  }
}
