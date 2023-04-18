import React from 'react'
import './PaymentMethod.css';
const PaymentMethods = () => {
return (
    <>
    <div class="container rounded bg-white">
    <div class="row d-flex justify-content-center pb-5">
        <div class="col-sm-5 col-md-5 ml-1">
            <div class="py-4 d-flex flex-row">
                <h5><span class="fa fa-check-square-o"></span><b>PAYMENT METHODS</b> | </h5><span class="pl-2">Pay</span>
            </div>

            <div class="pt-2">

                <form class="pb-3">
                    <div class="d-flex flex-row align-content-center">
                        <div class="pt-2 "><input type="radio" name="radio1" id="r1" checked/></div>
                        <div class="rounded border d-flex w-100 px-2">
                            <div class="pt-2"><p><i class="fa fa-cc-visa text-primary pr-2"></i>Visa Debit Card</p></div>
                            <div class="ml-auto pt-2">************3456</div>
                        </div>
                    </div>
                </form>
                <div className='mt-3 text-center'>
                    <input  type="button" value="Proceed to payment" class="btn btn-primary btn-block"/>
                </div>
            </div>
        </div>
        <div class="col-sm-3 col-md-4 offset-md-1 mobile">
            <div class="py-4 d-flex justify-content-end">
                <h6><a href="#">Cancel and return to website</a></h6>
            </div>
            <div class="bg-light rounded d-flex flex-column">
                <div class="p-2 ml-3"><h4>Order Recap</h4></div>
                <div class="p-2 d-flex">
                    <div class="col-8">Contracted Price</div>
                    <div class="ml-auto">$186.76</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Amount toward deductible</div>
                    <div class="ml-auto">$0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Coinsurance( 0% )</div>
                    <div class="ml-auto">+ $0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Copayment</div>
                    <div class="ml-auto">+ $40.00</div>
                </div>
                <div class="border-top px-4 mx-3">
                </div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8">Total Deductible, Coinsurance, and Copay</div>
                    <div class="ml-auto">$40.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Maximum out-of-pocket on Insurance Policy (not reached)</div>
                    <div class="ml-auto">$6500.00</div>
                </div>
                <div class="border-top px-4 mx-3"></div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8">Insurance Responsibility</div>
                    <div class="ml-auto"><b>$71.76</b></div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Patient Balance  <span class="fa fa-question-circle text-secondary"></span></div>
                    <div class="ml-auto"><b>$71.76</b></div>
                </div>
                <div class="border-top px-4 mx-3"></div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8"><b>Total</b></div>
                    <div class="ml-auto"><b class="green">$85.00</b></div>
                </div>
            </div>
        </div>        
    </div>
</div>
    </>
  )
}

export default PaymentMethods
