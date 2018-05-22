import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { UobCreditLimit } from './uobCreditLimit.model';
import { createRequestOption } from '../../shared';

export type UobCreditLimitResponseType = HttpResponse<UobCreditLimit>;
export type UobCreditLimitArrayResponseType = HttpResponse<UobCreditLimit[]>;

@Injectable()
export class UobCreditLimitService {

    private resourceUrl = SERVER_API_URL + 'api/loan/uob-credit-limit';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(uobCreditLimit: UobCreditLimit): Observable<any> {
        console.log(uobCreditLimit);
        const copy = this.convert(uobCreditLimit);
        return this.http.post<UobCreditLimit>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: UobCreditLimitResponseType) => this.convertResponse(res));
    }

    update(uobCreditLimit: UobCreditLimit): Observable<UobCreditLimitResponseType> {
        const copy = this.convert(uobCreditLimit);
        return this.http.put<UobCreditLimit>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: UobCreditLimitResponseType) => this.convertResponse(res));
    }

    private convertResponse(res: UobCreditLimitResponseType): UobCreditLimitResponseType {
        const body: UobCreditLimit = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: UobCreditLimitArrayResponseType): UobCreditLimitArrayResponseType {
        const jsonResponse: UobCreditLimit[] = res.body;
        const body: UobCreditLimit[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to UobCreditLimit.
     */
    private convertItemFromServer(json: any): UobCreditLimit {
        const copy: UobCreditLimit = Object.assign(new UobCreditLimit(), json);
        copy.submissionDate = this.dateUtils
            .convertLocalDateFromServer(json.submissionDate);
        copy.acceptanceDate = this.dateUtils
            .convertLocalDateFromServer(json.acceptanceDate);
        return copy;
    }

    /**
     * Convert a UobCreditLimit to a JSON which can be sent to the server.
     */
    private convert(uobCreditLimit: UobCreditLimit): UobCreditLimit {
        const copy: UobCreditLimit = Object.assign({}, uobCreditLimit);
        copy.submissionDate = this.dateUtils
            .convertLocalDateToServer(uobCreditLimit.submissionDate);
        // copy.acceptanceDate = this.dateUtils
        //     .convertLocalDateToServer(uobCreditLimit.acceptanceDate);
        return copy;
    }
}
