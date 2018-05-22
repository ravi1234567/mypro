import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { JhiPaginationUtil } from 'ng-jhipster';
import { PFICreditLimitComponent } from './pfi/pfiCreditLimit.component';
import { UobCreditLimitComponent } from './uob/uobCreditLimit.component'


export const LoanApplicationRoute: Routes = [
    {   
        path: 'pfiuser',
        component: PFICreditLimitComponent,
        data: {
            //authorities: ['ROLE_USER'],
            pageTitle: 'Loan Aplication For PFI User'
        },
        //canActivate: [UserRouteAccessService]
    },
    {   
        path: 'uobuser',
        component: UobCreditLimitComponent,
        data: {
            //authorities: ['ROLE_USER'],
            pageTitle: 'Loan Aplication For UOB user'
        },
        //canActivate: [UserRouteAccessService]
    }
];
