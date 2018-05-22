
export class UobCreditLimit {
    constructor(
        public toLIS5Insurer?: string,
        public requesterName?: string,
        public submissionDate?: any,
        public marshEmailbox?: string,
        public discretiolaryLimitDL?: boolean,
        public creditLimitCL?: boolean,
        public limitToCancelNil?: boolean,
        public crr1to6?: boolean,
        public crr7to10?: boolean,
        public crr11to13?: boolean,
        public dCrr14to15?: boolean,
        public dNoCrr?: boolean,
        public forBorrowerGroup?: boolean,
        public nameOfEntity?: string,
        public currentFacilityLimitAmount?: number,
        public nameOfEntity2?: string,
        public currentFacilityLimitAmount2?: number,
        public newLIS?: boolean,
        public renewalAtSameAmount?: boolean,
        public renewalFromSGD?: boolean,
        public renewalFromUSD?: boolean,
        public increaseLimitTo?: boolean,
        public decreaseLimitTo?: boolean,
        public inventoryStockFinancing?: boolean,
        public structuredPredeliveryWorkingCapital?: boolean,
        public withRecourseFactoringBill?: boolean,
        public overseasWorkingCapitalLoansSupport?: boolean,
        public bankersGuarantee?: boolean,
        public acceptanceDate?: Date,
        public increaseLimitToSGD?:number,
        public increaseLimitToUSD?:number,
        public decreaseLimitToSGD?:number,
        public decreaseLimitToUSD?:number,
        public renewalFromSGDTxt?:number,
        public renewalFromUSDTxt?:number,
        public sgdCurrencyCurrentLIS?:number,
        public usdCurrencyCurrentLIS?:number
        
    ) {
        this.discretiolaryLimitDL = false;
        this.creditLimitCL = false;
        this.limitToCancelNil = false;
        this.crr1to6 = false;
        this.crr7to10 = false;
        this.crr11to13 = false;
        this.dCrr14to15 = false;
        this.dNoCrr = false;
        this.forBorrowerGroup = false;
        this.newLIS = false;
        this.renewalAtSameAmount = false;
        this.renewalFromSGD = false;
        this.renewalFromUSD = false;
        this.increaseLimitTo = false;
        this.decreaseLimitTo = false;
        this.inventoryStockFinancing = false;
        this.structuredPredeliveryWorkingCapital = false;
        this.withRecourseFactoringBill = false;
        this.overseasWorkingCapitalLoansSupport = false;
        this.bankersGuarantee = false;
        // this.acceptanceDate=new Date();
        // this.increaseLimitToSGD=0;
        // this.increaseLimitToUSD=0;
        // this.decreaseLimitToSGD=0;
        // this.decreaseLimitToUSD=0;
    }
}
