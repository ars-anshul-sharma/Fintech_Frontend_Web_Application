<template>
  <div>
    <div class="mb-7" style="font-weight:500">
      Applicant name
    </div>
    <div class="mt-4 mb-1">
      <label id="checkbox1"> {{ firstName + " " + lastName }} </label>
    </div>
    <br />
    <div class="mt-4 mb-2" style="font-weight:500">
      Account number
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <div class="input-group-text">7 digits</div>
      </div>
      <input
        v-model="account"
        v-on="setAccount()"
        type="text"
        class="form-control"
        id="inlineFormInputGroup"
      />
    </div>
  </div>
</template>

<style scoped>
#checkbox1 {
  padding: 10px 5px 10px 5px;
  background-color: rgb(231, 228, 228);
  display: inline;
  font-size: 16px;
  border-radius: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      lastName: this.$store.getters.getLastName,
      firstName: this.$store.getters.getFirstName,
      account: this.$store.getters.getAccount,
    };
  },
  methods: {
    setAccount() {
      this.$store.dispatch("setAccount", this.account);
    },
  },
};
</script>
