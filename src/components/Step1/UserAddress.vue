<template>
  <div>
    <!-- Work address -->
    <div class="mb-2" style="font-weight:500">
      Postal code <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="form-row align-items-center">
      <div class="col">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">〒</div>
          </div>
          <input
            v-model="userAddress"
            v-on="setUserAddress()"
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
          />
        </div>
      </div>
    </div>
    <div class="mt-2" style="font-weight:500">
      Prefecture / city / ward / town / chome
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="form-row align-items-center">
      <div class="col">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Chinese characters</div>
          </div>
          <input
            v-model="userAddress1"
            v-on="setUserAddress1()"
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
          />
        </div>
      </div>
    </div>
    <div class="form-row align-items-center">
      <div class="col">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Furigana</div>
          </div>
          <input
            v-model="userAddress2"
            v-on="setUserAddress2()"
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
          />
        </div>
      </div>
    </div>

    <div class="mt-2" style="font-weight:500">
      Address / number / building name / room number
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="form-row align-items-center">
      <div class="col">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Furigana</div>
          </div>
          <input
            v-model="userAddress3"
            v-on="setUserAddress3()"
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userAddress: this.$store.getters.getUserAddress,
      userAddress1: this.$store.getters.getUserAddress1,
      userAddress2: this.$store.getters.getUserAddress2,
      userAddress3: this.$store.getters.getUserAddress3,
      vall: "",
    };
  },
  methods: {
    setUserAddress() {
      this.$store.dispatch("setUserAddress", this.userAddress);

    },
    setUserAddress1() {
      this.$store.dispatch("setUserAddress1", this.userAddress1);
    },
    setUserAddress2() {
      this.$store.dispatch("setUserAddress2", this.userAddress2);
    },
    setUserAddress3() {
      this.$store.dispatch("setUserAddress3", this.userAddress3);
    },
  },
};
</script>
