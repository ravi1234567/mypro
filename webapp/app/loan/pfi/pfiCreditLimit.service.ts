import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { PFICreditLimit } from './PFICreditLimit.model';
import { createRequestOption } from '../../shared';

export type PFICreditLimitResponseType = HttpResponse<PFICreditLimit>;
export type PFICreditLimitArrayResponseType = HttpResponse<PFICreditLimit[]>;

@Injectable()
export class PFICreditLimitService {

    private resourceUrl = SERVER_API_URL + 'api/loan/pfiuser';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(pfiCreditLimit: PFICreditLimit): Observable<any> {
        const copy = this.convert(pfiCreditLimit);
        console.log(pfiCreditLimit);
        return this.http.post<PFICreditLimit>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: PFICreditLimitResponseType) => this.convertResponse(res));
    }

    update(pfiCreditLimit: PFICreditLimit): Observable<PFICreditLimitResponseType> {
        const copy = this.convert(pfiCreditLimit);
        return this.http.put<PFICreditLimit>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: PFICreditLimitResponseType) => this.convertResponse(res));
    }

    private convertResponse(res: PFICreditLimitResponseType): PFICreditLimitResponseType {
        const body: PFICreditLimit = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: PFICreditLimitArrayResponseType): PFICreditLimitArrayResponseType {
        const jsonResponse: PFICreditLimit[] = res.body;
        const body: PFICreditLimit[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to pfiCreditLimit.
     */
    private convertItemFromServer(json: any): PFICreditLimit {
        const copy: PFICreditLimit = Object.assign(new PFICreditLimit(), json);
        // copy.submissionDate = this.dateUtils
        //     .convertLocalDateFromServer(json.submissionDate);
        return copy;
    }

    /**
     * Convert a pfiCreditLimit to a JSON which can be sent to the server.
     */
    private convert(pfiCreditLimit: PFICreditLimit): PFICreditLimit {
        const copy: PFICreditLimit = Object.assign({}, pfiCreditLimit);
        // copy.submissionDate = this.dateUtils
        //     .convertLocalDateToServer(pfiCreditLimit.submissionDate);
        return copy;
    }
}
