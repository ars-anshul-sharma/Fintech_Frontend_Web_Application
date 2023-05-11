<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="mb-2" style="font-weight:500">
          Lastname <span style="font-size:17px; color:red;">*</span>
        </div>
        <input
          v-model="lastName1"
          v-on="setLastName1()"
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
          v-model="firstName1"
          v-on="setFirstName1()"
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
          v-model="seiName1"
          v-on="setSeiName1()"
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
          v-model="meiName1"
          v-on="setMeiName1()"
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
          v-model="lastNameRoma1"
          v-on="setLastNameRoma1()"
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
          v-model="firstNameRoma1"
          v-on="setFirstNameRoma1()"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Romaji"
        />
      </div>
    </div>

    <div class="mb-2" style="font-weight:500; margin-top:50px;">
      Gender
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="middle">
      <label>
        <input
          v-model="gender1"
          id="ug1"
          value="Male"
          @change="setGender1()"
          class="design"
          type="radio"
          name="radio8"
          checked
        />
        <div class="front-end box box1">
          <span class="spanDesign">Male</span>
        </div>
      </label>

      <label>
        <input
          v-model="gender1"
          id="ug2"
          value="Female"
          @change="setGender1()"
          class="design"
          type="radio"
          name="radio8"
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
        v-model="birthDate1"
        v-on="setBirthDate1()"
        type="date"
        class="form-control"
      />
    </div>

    <div class="mt-3 mb-2" style="font-weight:500">
      Relation
      <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="middle">
      <label>
        <input
          v-model="relation"
          @change="setRelation()"
          value="Spouse"
          class="design"
          type="radio"
          name="radio9"
          checked
        />
        <div class="front-end box box1">
          <span class="spanDesign">Spouse</span>
        </div>
      </label>

      <label>
        <input
          v-model="relation"
          @change="setRelation()"
          value="Parent"
          class="design"
          type="radio"
          name="radio9"
        />
        <div class="back-end box box1">
          <span class="spanDesign">Parent</span>
        </div>
      </label>
      <label>
        <input
          v-model="relation"
          @change="setRelation()"
          value="Child"
          class="design"
          type="radio"
          name="radio9"
        />
        <div class="back-end box box1">
          <span class="spanDesign">Child</span>
        </div>
      </label>
    </div>

    <div class="mb-2" style="font-weight:500">
      Mail Address <span style="font-size:17px; color:red;">*</span>
    </div>
    <div class="row">
      <div class="col">
        <input
          v-model="mail1"
          v-on="setMail1()"
          type="text"
          class="form-control"
        />
      </div>
      <span style="font-weight:500">@</span>&nbsp;
      <div class="col">
        <select
          onee
          id="option"
          name="LeaveType"
          v-model="domain1"
          @change="setDomain1()"
          style="width: 160px; height:37px; border-radius: 5px; border:1px darkgrey; padding:0 0 0 10px;"
        >
          <option>Please select</option>
          <option>au.com</option>
          <option>ezweb.ne.gp</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastName1: this.$store.getters.getLastName1,
      firstName1: this.$store.getters.getFirstName1,
      seiName1: this.$store.getters.getSeiName1,
      meiName1: this.$store.getters.getMeiName1,
      lastNameRoma1: this.$store.getters.getLastNameRoma1,
      firstNameRoma1: this.$store.getters.getFirstNameRoma1,
      gender1: this.$store.getters.getGender1,
      birthDate1: this.$store.getters.getBirthDate1,
      relation: this.$store.getters.getRelation,
      mail1: this.$store.getters.getMail1,
      domain1: this.$store.getters.getDomain1,
    };
  },
  methods: {
    setLastName1() {
      this.$store.dispatch("setLastName1", this.lastName1);
    },
    setFirstName1() {
      this.$store.dispatch("setFirstName1", this.firstName1);
    },
    setSeiName1() {
      this.$store.dispatch("setSeiName1", this.seiName1);
    },
    setMeiName1() {
      this.$store.dispatch("setMeiName1", this.meiName1);
    },

    setLastNameRoma1() {
      this.$store.dispatch("setLastNameRoma1", this.lastNameRoma1);
    },
    setFirstNameRoma1() {
      this.$store.dispatch("setFirstNameRoma1", this.firstNameRoma1);
    },
    setGender1() {
      this.$store.dispatch("setGender1", this.gender1);
    },
    setBirthDate1() {
      this.$store.dispatch("setBirthDate1", this.birthDate1);
    },
    setRelation() {
      this.$store.dispatch("setRelation", this.relation);
    },
    setMail1() {
      this.$store.dispatch("setMail1", this.mail1);
    },
    setDomain1() {
      this.$store.dispatch("setDomain1", this.domain1);
    },
  },
};
</script>
