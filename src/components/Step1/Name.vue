<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="mb-2" style="font-weight:500">
          Lastname <span style="font-size:17px; color:red;">*</span>
        </div>
        <input
          v-model="lastName"
          v-on="setLastName()"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Chinese"
        />
      </div>

      <div class="col">
        <div class="mb-2" style="font-weight:500">
          Firstname <span style="font-size:17px; color:red;">*</span>
        </div>
        <input
          v-model="firstName"
          v-on="setFirstName()"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Chinese"
        />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="mt-1 mb-2" style="font-weight:500">
          Sei <span style="font-size:17px; color:red;">*</span>
        </div>
        <input
          v-model="seiName"
          v-on="setSeiName()"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Hiragana"
        />
      </div>

      <div class="col">
        <div class="mt-1 mb-2" style="font-weight:500">
          Mei <span style="font-size:17px; color:red;">*</span>
        </div>
        <input
          v-model="meiName"
          v-on="setMeiName()"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Hiragana"
        />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="mt-1 mb-2" style="font-weight:500">
          Lastname <span style="font-size:17px; color:red;">*</span>
        </div>
        <input
          v-model="lastNameRoma"
          v-on="setLastNameRoma()"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Romaji"
        />
      </div>

      <div class="col">
        <div class="mt-1 mb-2" style="font-weight:500">
          Firstname <span style="font-size:17px; color:red;">*</span>
        </div>
        <input
          v-model="firstNameRoma"
          v-on="setFirstNameRoma()"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Romaji"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lastName: this.$store.getters.getLastName,
      firstName: this.$store.getters.getFirstName,
      seiName: this.$store.getters.getSeiName,
      meiName: this.$store.getters.getMeiName,
      lastNameRoma: this.$store.getters.getLastNameRoma,
      firstNameRoma: this.$store.getters.getFirstNameRoma,
      vall: "",
    };
  },
  methods: {
    setLastName() {
      this.$store.dispatch("setLastName", this.lastName);
    },
    setFirstName() {
      this.$store.dispatch("setFirstName", this.firstName);
    },
    setSeiName() {
      this.$store.dispatch("setSeiName", this.seiName);
    },
    setMeiName() {
      this.$store.dispatch("setMeiName", this.meiName);
    },

    setLastNameRoma() {
      this.$store.dispatch("setLastNameRoma", this.lastNameRoma);
    },
    setFirstNameRoma() {
      this.$store.dispatch("setFirstNameRoma", this.firstNameRoma);
    },
  },
};
</script>
