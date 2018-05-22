import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';
import { Observable } from 'rxjs/Rx';

import { PFICreditLimit } from './PFICreditLimit.model';
import { PFICreditLimitService } from './pfiCreditLimit.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-pfi-credit-limit',
    templateUrl: './pfiCreditLimit.component.html'
})
export class PFICreditLimitComponent implements OnInit, OnDestroy {

    pfiCreditLimit: PFICreditLimit = new PFICreditLimit();

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
        private loanApplicationService: PFICreditLimitService,
        private parseLinks: JhiParseLinks,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    save() {
        this.isSaving = true;
        this.subscribeToSaveResponse(
            this.loanApplicationService.create(this.pfiCreditLimit));            
    }

    clear() {
        this.pfiCreditLimit = new PFICreditLimit();
    }

    private subscribeToSaveResponse(result: Observable<PFICreditLimit>) {
        result.subscribe((res: PFICreditLimit) =>
        this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: PFICreditLimit) {
        this.eventManager.broadcast({ name: 'pfiCreditLimitListModification', content: 'OK'});
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
