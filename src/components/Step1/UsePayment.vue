<template>
  <div>
    <div class="mb-2" style="font-weight:500">
      Use Payment Method
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <p><b>Please select the financial institution to process.</b></p>
    <div id="ray1" class="card row col-12 my-col">
      <div id="anss" class="row col-12">
        <div class="col-3">
          <div id="cd1" class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="1"
              id="pp1"
            />
            <label class="form-check-label" for="pp1">
              <img id="img1" src="../../assets/1.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>

        <div class="col-3">
          <div id="cd2" class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="2"
              id="pp2"
            />
            <label class="form-check-label" for="pp2">
              <img id="img1" src="../../assets/2.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="3"
              id="pp3"
            />
            <label class="form-check-label" for="pp3">
              <img id="img1" src="../../assets/3.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="4"
              id="pp4"
            />
            <label class="form-check-label" for="pp4">
              <img id="img1" src="../../assets/4.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
      </div>
      <br />
      <div id="anss" class="row col-12">
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="5"
              id="pp5"
            />
            <label class="form-check-label" for="pp5">
              <img id="img1" src="../../assets/5.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="6"
              id="pp6"
            />
            <label class="form-check-label" for="pp6">
              <img id="img1" src="../../assets/6.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="7"
              id="pp7"
            />
            <label class="form-check-label" for="pp7">
              <img id="img1" src="../../assets/7.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="8"
              id="pp8"
            />
            <label class="form-check-label" for="pp8">
              <img id="img1" src="../../assets/8.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
      </div>
      <br />
      <div id="anss" class="row col-12">
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="9"
              id="pp9"
            />
            <label class="form-check-label" for="pp9">
              <img id="img1" src="../../assets/9.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="10"
              id="pp10"
            />
            <label class="form-check-label" for="pp10">
              <img id="img1" src="../../assets/10.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="11"
              id="pp11"
            />
            <label class="form-check-label" for="pp11">
              <img id="img1" src="../../assets/11.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="12"
              id="pp12"
            />
            <label class="form-check-label" for="pp12">
              <img id="img1" src="../../assets/12.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
      </div>
      <br />
      <div id="anss" class="row col-12">
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="13"
              id="pp13"
            />
            <label class="form-check-label" for="pp13">
              <img id="img1" src="../../assets/13.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="14"
              id="pp14"
            />
            <label class="form-check-label" for="pp14">
              <img id="img1" src="../../assets/14.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="15"
              id="pp15"
            />
            <label class="form-check-label" for="pp15">
              <img id="img1" src="../../assets/15.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="card1 hover">
            <input
              v-model="payMethod"
              @change="setPayMethod()"
              class="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              value="16"
              id="pp16"
            />
            <label class="form-check-label" for="pp16">
              <img id="img1" src="../../assets/16.png" alt="MISSING JPG" />
            </label>
          </div>
        </div>
      </div>

      
      
    </div>
  </div>
</template>

<style>
#img1 {
  width: 80px;
  height: 50px;
}

.a-tag {
  text-decoration: underline;
}
.hover:hover {
  box-shadow: 2px 2px 13px -5px rgb(170, 166, 166);
  border: 2px solid rgb(202, 202, 202);
}
.passage {
  margin-left: 30px;
}

.card1 {
  display: flex;
  flex-direction: column;
  background: var(--white);
  width: 120px;
  margin-bottom: 10px;
  padding: 15px 25px 15px 35px;
  border-radius: 10px;
  border: 1px solid lightgrey;
}
#anss {
  margin-left: 11px;
  margin-top: 20px;
}
.my-col {
  padding: 30px;
}
#ray1 {
  border-radius: 10px;
  /* align-content: center; */
}
</style>

<script>
export default {
  data() {
    return {
      payMethod: this.$store.getters.getPayMethod,
      vall: "",
    };
  },
  mounted() {},
  methods: {
    setPayMethod() {
      this.$store.dispatch("setPayMethod", this.payMethod);
    },
  },
};
</script>
