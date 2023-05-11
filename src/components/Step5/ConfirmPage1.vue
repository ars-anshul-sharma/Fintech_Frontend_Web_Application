<template>
  <div>
    <div class="row ab">
      <div class="col" style="margin:50px;">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Full Name</div>
          </div>
          <label class="form-control">{{ firstName + "  " + lastName }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Gender</div>
          </div>
          <label class="form-control">{{ gender }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Birthday</div>
          </div>
          <label class="form-control">{{ birthDate }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Mail Address</div>
          </div>
          <label class="form-control">{{ mail + "@" + domain }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Phone Number 1</div>
          </div>
          <label class="form-control">{{phn1+"-"+phn2+"-"+phn3}}</label>
        </div>

        <br /><br />

        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Phone Number 2</div>
          </div>
          <label class="form-control">{{phon1+"-"+phon2+"-"+phon3}}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Postal code</div>
          </div>
          <label class="form-control">{{ userAddress }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Address</div>
          </div>
          <label class="form-control">{{
            userAddress1 + "  " + userAddress2 + "  " + userAddress3
          }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Family Relation</div>
          </div>
          <label class="form-control">{{ familyInfo }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Number of households</div>
          </div>
          <label class="form-control">{{ household }}</label>
        </div>
      </div>
      <div class="col" style="margin:50px;">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Residence status</div>
          </div>
          <label class="form-control">{{ residenceStatus }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Residence years</div>
          </div>
          <label class="form-control">{{ residenceYear }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Payment of mortgage or rent</div>
          </div>
          <label class="form-control">{{ paymentMethod }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Employment</div>
          </div>
          <label class="form-control">{{ employmentType }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Annual income including tax</div>
          </div>
          <label class="form-control">{{ annualIncome }}</label>
        </div>

        <br /><br />

        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Household income</div>
          </div>
          <label class="form-control">{{ householdIncome }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Savings amount</div>
          </div>
          <label class="form-control">{{ savingAmount }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Bill to</div>
          </div>
          <label class="form-control">{{ billInfo }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Purpose of card</div>
          </div>
          <label
            v-if="purposeCard1 == true && purposeCard2 == true"
            class="form-control"
            >Both shopping and cash borrowing, etc.</label
          >
          <label v-else-if="purposeCard2 == true" class="form-control"
            >Used for cash borrowing, etc.</label
          >
          <label v-else-if="purposeCard1 == true" class="form-control"
            >Used for everyday shopping, etc.</label
          >
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">
              Automatic revolving service application
            </div>
          </div>
          <label class="form-control">{{revolveService}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ab {
  background: rgb(225, 242, 247);
}
</style>

<script>
export default {
  data() {
    return {
      lastName: this.$store.getters.getLastName,
      firstName: this.$store.getters.getFirstName,
      birthDate: this.$store.getters.getBirthDate,
      gender: this.$store.getters.getGender,
      mail: this.$store.getters.getMail,
      domain: this.$store.getters.getDomain,
      userAddress: this.$store.getters.getUserAddress,
      userAddress1: this.$store.getters.getUserAddress1,
      userAddress2: this.$store.getters.getUserAddress2,
      userAddress3: this.$store.getters.getUserAddress3,
      familyInfo: this.$store.getters.getFamilyInfo,
      household: this.$store.getters.getHousehold,
      residenceStatus: this.$store.getters.getResidenceStatus,
      residenceYear: this.$store.getters.getResidenceYear,
      paymentMethod: this.$store.getters.getPaymentMethod,
      employmentType: this.$store.getters.getEmploymentType,
      annualIncome: this.$store.getters.getAnnualIncome,
      householdIncome: this.$store.getters.getHouseholdIncome,
      savingAmount: this.$store.getters.getSavingAmount,
      billInfo: this.$store.getters.getBillInfo,
      purposeCard1: this.$store.getters.getPurposeCard1,
      purposeCard2: this.$store.getters.getPurposeCard2,
      revolveService: this.$store.getters.getRevolveService,
      phn1: this.$store.getters.getPhn1,
      phn2: this.$store.getters.getPhn2,
      phn3: this.$store.getters.getPhn3,
      phon1: this.$store.getters.getPhon1,
      phon2: this.$store.getters.getPhon2,
      phon3: this.$store.getters.getPhon3,  
      vall: "",
    };
  },
};
</script>
