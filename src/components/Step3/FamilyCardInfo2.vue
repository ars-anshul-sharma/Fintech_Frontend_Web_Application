<template>
  <div>
    <div class="mb-2" style="font-weight:500">
      Family card with Edy function
    </div>
    <p class="edyP">
      Edy function is included <span style="color:red">free</span> of
      <span style="color:red">charge</span> for those who apply
    </p>
    <div style="margin-bottom:100px; padding:3px" class="outer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-gift "
        viewBox="0 0 16 16"
      >
        <path
          d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"
        /></svg
      >&nbsp;&nbsp;
      <a class="a" href="http://r10.to/hbKnvS">
        Get 500 yen worth of Edy as a gift.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We will deliver a card with
        500 yen worth of Edy already
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deposited.
      </a>
    </div>

    <div class="mb-2" style="font-weight:500">
      Notice for family cards only for card members (free)
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="middle">
      <label>
        <input
          v-model="cardMembers"
          @change="setCardMembers()"
          value="Accept"
          class="design"
          type="radio"
          name="radio10"
          checked
        />
        <div class="front-end box box7">
          <span class="spanDesign">Accept</span>
        </div>
      </label>

      <label>
        <input
          v-model="cardMembers"
          @change="setCardMembers()"
          value="Cannot accept"
          class="design"
          type="radio"
          name="radio10"
        />
        <div class="back-end box box7">
          <span class="spanDesign">Cannot accept</span>
        </div>
      </label>
    </div>

    {{ vall }}

    <div class="mb-2" style="font-weight:500">
      PIN <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">4 digits</div>
      </div>
      <input
        v-model="pin1"
        v-on="setPin1()"
        maxlength="4"
        id="pin3"
        type="text"
        class="form-control"
      />
    </div>
    For verification, please enter it again.
    <div class="mt-2 input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">4 digits</div>
      </div>
      <input
        v-model="pinRepeat1"
        v-on="setPinRepeat1()"
        type="text"
        class="form-control"
        maxlength="4"
        id="pin4"
      />
    </div>
  </div>
</template>

<style scoped>
.edyP {
  background-color: lightyellow;
  border: 1px solid orangered;
  padding: 10px 5px 10px 10px;
}
.outer {
  background-color: rgb(247, 234, 224);
}
.box7 {
  width: 150px;
  height: 45px;
}
</style>

<script>
export default {
  data() {
    return {
      mail: this.$store.getters.getMail,
      cardMembers: this.$store.getters.getCardMembers,
      pin1: this.$store.getters.getPin1,
      pinRepeat1: this.$store.getters.getPinRepeat1,
      vall: "",
    };
  },
  methods: {
    setMail() {
      this.$store.dispatch("setMail", this.mail);
    },
    setDomain() {
      this.$store.dispatch("setDomain", this.domain);
    },
    setCardMembers() {
      this.$store.dispatch("setCardMembers", this.cardMembers);
    },
    setPin1() {
      this.$store.dispatch("setPin1", this.pin1);
    },
    setPinRepeat1() {
      this.$store.dispatch("setPinRepeat1", this.pinRepeat1);
    },
  },
};
</script>
