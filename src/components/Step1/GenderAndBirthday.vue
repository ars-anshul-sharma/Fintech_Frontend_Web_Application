<template>
  <div>
    <div class="mb-2" style="font-weight:500">
      Gender
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="middle">
      <label>
        <input
          id="m1r1"
          v-model="gender"
          @change="setGender()"
          class="design"
          type="radio"
          name="radio"
          value="Male"
          checked
        />
        <div class="front-end box box1">
          <span class="spanDesign">Male</span>
        </div>
      </label>

      <label>
        <input
          id="m1r2"
          v-model="gender"
          @change="setGender()"
          class="design"
          type="radio"
          name="radio"
          value="Female"
        />
        <div class="back-end box box1">
          <span class="spanDesign">Female</span>
        </div>
      </label>
    </div>

    <div>
      <div class="mb-2" style="font-weight:500">
        Birthday <span style="font-size:17px; color:red;">*</span>
      </div>
      <input
        v-model="birthDate"
        v-on="setBirthDate()"
        type="date"
        class="form-control"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      birthDate: this.$store.getters.getBirthDate,
      gender: this.$store.getters.getGender,
      vall: "",
    };
  },
  methods: {
    setBirthDate() {
      this.$store.dispatch("setBirthDate", this.birthDate);
    },
    setGender() {
      this.$store.dispatch("setGender", this.gender);
    },
  },
};
</script>
