<template>
  <b-container class="parent">
    <b-row id="question-list">
      <b-col
        md="3"
        v-bind:class="
          question.selected
            ? 'quesInp highlighted ques-card w-10'
            : 'quesInp ques-card w-10'
        "
        v-for="question in questions"
        :key="question.id"
      >
        <!-- Adding checkbox which will act as the question selection -->
        <input
          type="checkbox"
          v-bind:id="question.id"
          v-bind:value="question.id"
          v-model="questionSelections"
          class="inpCheck"
          @click="question.selected = !question.selected"
        />
        <label class="quesInpLabel" v-bind:for="question.id">
          <p class="quesInpDesc">{{ question.value }}</p>
        </label>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Questions",
  props: ["questionSelections", "questions", "resetQuestionSelections"],
  //   {
  //       questionSelections : Array,
  //   },
  watch: {
    resetQuestionSelections: {
      deep: true,
      handler: function () {
        for (let i = 0; i < this.questions.length; i++) {
          const element = this.questions[i];
          element.selected = false;
        }
        this.resetQuestionSelections = false;
        this.$emit("update:resetQuestionSelections", false);
      },
    },
    questionSelections: {
      deep: true,
      handler: function (newValue) {
        this.$emit("update:questionSelections", newValue);
      },
    },
  },
};
</script>