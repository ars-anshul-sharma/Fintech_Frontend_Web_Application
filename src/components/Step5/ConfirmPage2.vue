<template>
  <div>
    <div class="row ab">
      <div class="col" style="margin:50px;">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Cashing frame</div>
          </div>
          <label class="form-control">{{ cashingFrame }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">
              Borrowing money from other companies
            </div>
          </div>
          <label class="form-control">{{ moneyBorrow }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Family card</div>
          </div>
          <label class="form-control">{{ familyCard }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">ETC card</div>
          </div>
          <label v-if="etcCard == true" class="form-control"
            >Apply (no annual membership fee)</label
          >
          <label v-if="etcCard == false" class="form-control">None</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Edy auto charge setting</div>
          </div>
          <label class="form-control">{{ edyCharge }}</label>
        </div>

        <br /><br />

        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Auto charge amount</div>
          </div>
          <label class="form-control">{{ chargeAmount }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Maximum daily amount</div>
          </div>
          <label class="form-control">{{ maxDailyAmount }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Notice from Rakuten Edy</div>
          </div>
          <label class="form-control">{{ edyNotice }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">PIN</div>
          </div>
          <label class="form-control">{{ pin }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Payment Method</div>
          </div>
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 1"
            src="../../assets/1.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 2"
            src="../../assets/2.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 3"
            src="../../assets/3.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 4"
            src="../../assets/4.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 5"
            src="../../assets/5.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 6"
            src="../../assets/6.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 7"
            src="../../assets/7.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 8"
            src="../../assets/8.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 9"
            src="../../assets/9.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 10"
            src="../../assets/10.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 11"
            src="../../assets/11.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 12"
            src="../../assets/12.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 13"
            src="../../assets/13.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 14"
            src="../../assets/14.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 15"
            src="../../assets/15.png"
            alt="MISSING PNG"
          />
          <img
            height="70px"
            width="180px"
            v-if="payMethod == 16"
            src="../../assets/16.png"
            alt="MISSING PNG"
          />
        </div>
      </div>
      <div class="col" style="margin:50px;">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Corporate name</div>
          </div>
          <label class="form-control">{{ corporateName + furigana }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Office name</div>
          </div>
          <label class="form-control">{{ officialName }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Postal code</div>
          </div>
          <label class="form-control">{{ address }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Address</div>
          </div>
          <label class="form-control">{{
            address1 + " " + address2 + " " + address3
          }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Phone Number</div>
          </div>
          <label class="form-control">00000</label>
        </div>

        <br /><br />

        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Length of service</div>
          </div>
          <label class="form-control">{{ lengthOfService }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Occupation</div>
          </div>
          <label class="form-control">{{ occupation }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Industry</div>
          </div>
          <label class="form-control">{{ industry }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">
              Confirmation of driver's license, etc.
            </div>
          </div>
          <label class="form-control">{{ driverLicense }}</label>
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Full Name (Family)</div>
          </div>
          <label class="form-control">{{ firstName1 + " " + lastName1 }}</label>
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

<script type="text/javascript">
export default {
  data() {
    return {
      cashingFrame: this.$store.getters.getCashingFrame,
      moneyBorrow: this.$store.getters.getMoneyBorrow,
      familyCard: this.$store.getters.getFamilyCard,
      etcCard: this.$store.getters.getEtcCard,
      edyCharge: this.$store.getters.getEdyCharge,
      chargeAmount: this.$store.getters.getChargeAmount,
      maxDailyAmount: this.$store.getters.getMaxDailyAmount,
      edyNotice: this.$store.getters.getEdyNotice,
      pin: this.$store.getters.getPin,
      pinRepeat: this.$store.getters.getPinRepeat,
      payMethod: this.$store.getters.getPayMethod,
      corporateName: this.$store.getters.getCorporateName,
      furigana: this.$store.getters.getFurigana,
      officialName: this.$store.getters.getOfficialName,
      address: this.$store.getters.getAddress,
      address1: this.$store.getters.getAddress1,
      address2: this.$store.getters.getAddress2,
      address3: this.$store.getters.getAddress3,
      lengthOfService: this.$store.getters.getLengthOfService,
      occupation: this.$store.getters.getOccupation,
      industry: this.$store.getters.getIndustry,
      driverLicense: this.$store.getters.getDriverLicense,
      lastName1: this.$store.getters.getLastName1,
      firstName1: this.$store.getters.getFirstName1,
    };
  },
};
</script>
