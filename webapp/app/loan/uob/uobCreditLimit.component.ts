import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';
import { Observable } from 'rxjs/Rx';

import { UobCreditLimit } from './uobCreditLimit.model';
import { UobCreditLimitService } from './uobCreditLimit.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-uob-credit-limit',
    templateUrl: './uobCreditLimit.component.html'
})
export class UobCreditLimitComponent implements OnInit, OnDestroy {

    uobCreditLimit: UobCreditLimit = new UobCreditLimit();

    currentAccount: any;
    eventSubscriber: Subscription;
    isSaving: Boolean;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;

    constructor(
        private uobCreditLimitService: UobCreditLimitService,
        private parseLinks: JhiParseLinks,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    save() {
        this.isSaving = true;
        this.subscribeToSaveResponse(
            this.uobCreditLimitService.create(this.uobCreditLimit));
    }

    clear() {
        this.uobCreditLimit = new UobCreditLimit();
    }

    private subscribeToSaveResponse(result: Observable<UobCreditLimit>) {
        result.subscribe((res: UobCreditLimit) =>
        this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: UobCreditLimit) {
        this.eventManager.broadcast({ name: 'uobCreditLimitListModification', content: 'OK'});
        this.isSaving = false;
    }

    private onSaveError() {
        this.isSaving = false;
    }

    ngOnInit() {

        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });

    }

    ngOnDestroy() {

    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
