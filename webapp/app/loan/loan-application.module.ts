import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LisAppSharedModule } from '../shared';
import { PFICreditLimitComponent } from './pfi/pfiCreditLimit.component';
import { PFICreditLimitService } from './pfi/pfiCreditLimit.service';
import { UobCreditLimitComponent } from './uob/uobCreditLimit.component';
import { UobCreditLimitService } from './uob/uobCreditLimit.service';
import { LoanApplicationRoute} from './loan-application.route';

const PAGE_SET_STATES = [
    ...LoanApplicationRoute,
];

@NgModule({
    imports: [
        LisAppSharedModule,
        RouterModule.forRoot(PAGE_SET_STATES, { useHash: true })
    ],
    declarations: [    
        PFICreditLimitComponent,
        UobCreditLimitComponent
],
    entryComponents: [    
        PFICreditLimitComponent,
        UobCreditLimitComponent
],
    providers: [    
        PFICreditLimitService,
        UobCreditLimitService
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoanApplicationModule {}
