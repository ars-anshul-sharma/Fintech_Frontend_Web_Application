<template>
  <b-container class="parent">
    <b-row id="paymentTypes">
      <!-- if the disabledPayment prop is set to false, disabled the checkbox for the payment type -->
      <b-col
        md="12"
        v-bind:class="
          disabledPayment
            ? 'questionInp btn-card disabled'
            : payment.selected
            ? 'questionInp highlighted btn-card'
            : 'questionInp btn-card'
        "
        v-for="payment in paymentTypeList"
        :key="payment.id"
      >
        <!-- Adding checkbox which will act as the question selection -->
        <input
          type="checkbox"
          v-bind:id="payment.id"
          v-bind:value="payment.id"
          v-model="paymentSelections"
          class="inpCheck"
          @click="payment.selected = !payment.selected"
        />
        <label class="quesLabel" v-bind:for="payment.id">
          <img
            v-bind:src="require('../../assets/paymentTypes/' + payment.image)"
            alt=""
            class="type-img"
          />
        </label>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import json from "../../data/paymentTypes.json";
export default {
  name: "PaymentTypes",
  props: ["paymentSelections", "disabledPayment"],
  data: function () {
    return {
      paymentTypeList: this.updatePaymentTypeList(json),
    };
  },
  methods: {
    //Updating the raw payment Type data with the selected key-value pair
    updatePaymentTypeList(json) {
      let paymentList = json["paymentTypes"];
      for (let i = 0; i < paymentList.length; i++) {
        const paymentType = paymentList[i];
        this.$set(paymentType, "selected", false);
      }
      return paymentList;
    },
  },
  watch: {
    // whenever there is a change in the selection for the payment types, this gets triggered
    paymentSelections: {
      deep: true,
      handler: function (newValue) {
        this.$emit("update:paymentSelections", newValue);
      },
    },
    disabledPayment: {
      deep: true,
      handler: function (newValue) {
        this.$emit("update:disabledPayment", newValue);
      },
    },
  },
};
</script>