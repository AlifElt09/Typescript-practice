    /**
     * An online store supports several payment methods.
     * Every payment has:
     * - Transaction ID
     * - Amount
     * 
     * But each payment method processes the transaction differently.
     * -  Credit card's processing fee is 2% of payment amount
     * -  Bank Transfer's processing fee is 5000
     * -  E Wallet's processing 1% of payment amount
     * 
     * Example transactions:
     * ---------------------
     * Credit Card
     * Transaction: TRX001
     * Amount: Rp1,000,000
     * ---------------------
     * Bank Transfer
     * Transaction: TRX002
     * Amount: Rp750,000
     * ---------------------
     * E-Wallet
     * Transaction: TRX003
     * Amount: Rp500,000
     * ---------------------
     */

    class Payment {
        constructor (
            private transactionID : string,
            protected amount : number,
        ) {}
        calculateFee(): number {
            return 0
        }
    }

    class CreditCardPayment extends Payment {
        constructor (
            transactionID : string,
            amount : number,
            public fee : number
        ) {super(transactionID, amount)}
        calculateFee(): number {
            return this.amount + this.amount * this.fee
        }
    }

    class BankTransferPayment extends Payment {
        constructor (
            transactionID : string,
            amount : number,
            public fee : number
        ) {super(transactionID, amount)}
        calculateFee(): number {
            return this.amount + this.fee
        }
    }

    class EWalletPayment extends Payment {
        constructor (
            transactionID : string,
            amount : number,
            public fee : number
        ) {super(transactionID, amount)}
        calculateFee(): number {
            return this.amount + this.amount * this.fee
        }
    }

    const payments: Payment[] = [
        new CreditCardPayment(`TRX001`,1000000,0.02),
        new BankTransferPayment(`TRX001`,750000,5000),
        new EWalletPayment(`TRX001`,500000,0.01)
    ];

    for (const payment of payments) {
        console.log(payment.calculateFee());
    }