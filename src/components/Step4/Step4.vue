<template>
    <div>
        
        <!-- Financial institution name -->
         <div class="card text-black bg-light mb-3 hover">
                <div class="card-header header">
                    Financial institution name
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8 my-col border-right ">
                            Mizuho Bank
                            </div>
                        <div class="col-4 my-col">
                           
                        </div>
                    </div>
                </div>
            </div>


            <!-- Branch number -->
            <div class="card text-black bg-light mb-3 hover">
                <div class="card-header header ">
                    <span class="badge badge-danger">Mandatory</span>&nbsp;
                    Branch number
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8 my-col border-right ">
                            <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">3 digits</div>
                                        </div>
                                        <input type="password" class="form-control" id="inlineFormInputGroup" >
                                </div>
                            </div>
                        <div class="col-4 my-col">
                            
                        </div>
                    </div>
                </div>
            </div>

                <!-- Account type -->
             <div class="card text-black bg-light mb-3 hover">
                <div class="card-header header ">
                    Account type
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8 my-col border-right ">
                            Usual
                            </div>
                        <div class="col-4 my-col">
                           
                        </div>
                    </div>
                </div>
            </div>

                <!-- Account number -->
             <div class="card text-black bg-light mb-3 hover">
                <div class="card-header header ">
                    <span class="badge badge-danger">Mandatory</span>&nbsp;
                    Account number
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8 my-col border-right ">
                            <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">7 digits</div>
                                        </div>
                                        <input type="password" class="form-control" id="inlineFormInputGroup" >
                                </div>
                            </div>
                        <div class="col-4 my-col">
                            
                        </div>
                    </div>
                </div>
            </div>

            <!-- Applicant name -->
            <div class="card text-black bg-light mb-3 hover">
                <div class="card-header header ">
                    Applicant name
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8 my-col border-right ">
                            Rakuten Taro
                            </div>
                        <div class="col-4 my-col">
                           
                        </div>
                    </div>
                </div>
            </div>

            <div class="card text-black bg-light mb-3 hover abc">
                <h4>Please note</h4>
                <ul>
                <li><span class="redfont">If you apply for iOS12 or MacOS10.14</span> , an error may occur when you <span class="redfont">move to the</span> Rakuten Card screen after registration. In that case, please follow the procedure below.</li>
                <ul>
                    <li class="redfont">After updating to the latest software, please register again.</li>
                    <li class="redfont">Click the "Change to account registration procedure after enrollment" button at the bottom to complete the procedure after the card arrives.</li>
                </ul>
                <li>To ensure security, we will <span class="redfont">only</span> specify <span class="redfont">an individual account in the name of the card</span> . Procedures cannot be performed with an account other than the card applicant (including family card applicants).</li>
                <li>If you close the screen of the financial institution site or cancel the procedure in the middle, this screen will be displayed, but the account registration procedure has not been completed. Please restart the account registration procedure from this screen.</li>
                <li>Please do not close this screen during the procedure on the financial institution site. <span class="redfont">If you close it, you need to apply again from the beginning</span>.</li>
                <li>Please do not move from this screen to another screen during the procedure on the financial institution site. <span class="redfont">If you move to another screen, you will not be able to return from the financial institution site</span>.</li>
                <li>Please note that if a certain amount of time has passed before returning to our site after moving to the financial institution site, the procedure may become invalid when you return to the screen of our site to maintain security.</li>
                <li>Regarding identity verification based on the "Act on Identity Verification of Customers, etc. by Financial Institutions, etc.", we outsource the business to the designated financial institution.</li>
                <li>For customers whose identity could not be verified by a financial institution, we may verify your identity.</li>
                <li>Please contact the financial institution window for operations on the financial institution site.</li>
                </ul>
            </div>

    </div>
</template>

<style scoped>
.abc{
    padding:10px;
}
.redfont{
    color:rgb(197, 19, 19);
}
</style>