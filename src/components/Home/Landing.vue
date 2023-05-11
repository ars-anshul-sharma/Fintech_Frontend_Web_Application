<template>
  <div id="app">
    <!-- <link  rel="stylesheet" href="../../css/bootstrap/dist/css/bootstrap.css" /> 
    <link  rel="stylesheet" href="../../css/bootstrap-vue/dist/bootstrap-vue.css" />
    <link  rel="stylesheet" href="../../css/styles.css" />  
    <link  rel="stylesheet" href="https://unpkg.com/bootstrap-vue@2.1.0/dist/bootstrap-vue.common.js" />  
     -->

    <Header />
    <!-- <Home /> -->
    <b-row class="body-content">
      <b-col md="1" id="paymentDiv">
        <transition name="slideLeft">
          <div v-if="!disabledPayment" class="paymentBox">
            <div class="heading">
              <h5 class="">Card Types</h5>
            </div>
            <PaymentTypes
              class=""
              :paymentSelections.sync="paymentSelections"
              :disabledPayment.sync="disabledPayment"
              :resetPayment.sync="resetPayment"
            />
          </div>
        </transition>
      </b-col>
      <b-col
        v-bind:md="
          !disabledPayment
            ? showCompare
              ? '9'
              : '10'
            : showCompare
            ? '9'
            : '10'
        "
        id="CardTabDiv"
      >
        <div class="content-bg">
          <div class="heading">
            <h2 class="slideFromLeft">
              Narrow it down further (Please select below)
            </h2>
          </div>
          <div>
            <Questions
              class="slideFromRight"
              :questions="questions"
              :questionSelections.sync="questionSelections"
              :resetQuestionSelections.sync="resetQuestionSelections"
            />
          </div>
          <CardTabs
            :recommendedCards.sync="filteredRecCards"
            :OtherCards.sync="OtherCards"
            :showOtherCards.sync="showOtherCards"
            :showCompare.sync="showCompare"
            @comparisonSelectionFromCardTabs="updateComparison"
            @resetAll="resetAllInps"
          />
        </div>
      </b-col>
      <b-col md="1">
        <CompareBar
          :showCompare.sync="showCompare"
          :compareCards.sync="compareCards"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";


import Header from "./Banner";
import Questions from "./Questions.vue";
import PaymentTypes from "./PaymentTypes.vue";
import CardTabs from "./CardTabs.vue";
import CompareBar from "./CompareBar.vue";

import cards_json from "../../data/cards.json";
import questions_json from "../../data/questions.json";

export default {

  name: "Landing",
  components: {
    // CardTypes,
    // Home,
    Header,
    Questions,
    PaymentTypes,
    CardTabs,
    CompareBar,
  },
  methods: {
    // JSON update methods
    updateCardsJSON(json) {
      let cardList = json["cards"];
      for (let i = 0; i < cardList.length; i++) {
        const card = cardList[i];
        this.$set(card, "selected", false);
        this.$set(card, "flipped", false);
      }
      console.log(cardList);
      return cardList;
    },
    updateQuestionsList(json) {
      console.log("Updating Questions");
      let questionsList = json["questions"];
      for (let i = 0; i < questionsList.length; i++) {
        const question = questionsList[i];
        this.$set(question, "selected", false);
      }
      //   console.log(questionsList);
      return questionsList;
    },

    // Method to populate all the cards on launch
    populateAllCards() {
      this.filteredRecCards = this.cards;
    },
    checkFeatureSubString(features, selectedStr){
      for (let i = 0; i < features.length; i++) {
        const element = features[i].toLowerCase().trim();
        let tempStr= selectedStr.toLowerCase().trim();
        console.log("checkfeature",element, selectedStr)
       if(element.includes(tempStr))
       {
         return true;
       } 
      }
      return false;
    },
    // Method to check if all the selected questions are available in the card features
    checkAllQuesSelected(card, features, selected) {
      for (let i = 0; i < selected.length; i++) {
        let selectedObj = this.questions.filter((x) => selected[i] === x.id);
        // console.log("Selected Obj", selectedObj);
        let selectedStr = selectedObj[0].value;
        if (!this.checkFeatureSubString(features, selectedStr)) {
          return false;
        }
      }
      return true;
    },

    // Filtering cards based on the questions and payment types selected
    updateFilteredCards(quesFilters, paymentFilters) {
      this.resetCards();
      console.log("Questions selected", quesFilters);
      console.log("Payment Filters", paymentFilters);
      if (quesFilters.length === 0) {
        this.filteredRecCards = this.cards;
        return;
      }
      let recCards = [];
      for (let i = 0; i < this.cards.length; i++) {
        if (
          this.checkAllQuesSelected(
            this.cards[i],
            this.cards[i].features,
            quesFilters
          )
        ) {
          recCards.push(this.cards[i]);
        }
      }
      this.recCards = recCards;
      console.log("Inside Update filter, Recommended Cards", this.recCards);
      if (paymentFilters.length === 0) {
        this.filteredRecCards = recCards;
        return;
      }
      let filteredRecCards = recCards.filter((x) =>
        paymentFilters.includes(x.type)
      );
      this.filteredRecCards = filteredRecCards;
      console.log(
        "Inside Update filter, Filtered Recommended Cards",
        this.filteredRecCards
      );
    },
    updateComparison(newValue) {
      this.comparisonSelection = newValue;
      // console.log("Comparison Selection from App vue",this.comparisonSelection);
    },
    updateCheckBoxes() {
      let checkboxes = document.querySelectorAll(
        '.recCards input[type="checkbox"]'
      );
      for (let i = 0; i < checkboxes.length; i++) {
        if (this.compareCards.length === 2) {
          if (!checkboxes[i].checked) {
            checkboxes[i].disabled = true;
          }
        } else {
          checkboxes[i].disabled = false;
        }
      }
    },
    resetCards() {
      for (let i = 0; i < this.cards.length; i++) {
        const element = this.cards[i];
        element.flipped = false;
      }
    },
    resetPaymentTypes() {
      let checkboxes = document.querySelectorAll(
        '#paymentTypes input[type="checkbox"]'
      );
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].selected = false;
      }
      this.paymentSelections = [];
    },
    resetAllInps() {
      this.resetPaymentTypes();
      this.resetQuestionSelections = true;
      this.questionSelections = [];
      this.showCompare = false;
    },
  },
  data: function () {
    return {
      cards: this.updateCardsJSON(cards_json),
      questions: this.updateQuestionsList(questions_json),
      showCompare: false,
      disabledPayment: true,
      showOtherCards: false,
      questionSelections: [],
      paymentSelections: [],
      comparisonSelection: [],
      OtherCards: [],
      recCards: [],
      filteredRecCards: [],
      compareCards: [],
    };
  },
  beforeMount() {
    this.populateAllCards();
  },
  watch: {
    questionSelections: {
      deep: true,
      handler: function (newValue) {
        this.disabledPayment = newValue.length === 0;
        this.showOtherCards = newValue.length > 0;
        this.updateFilteredCards(newValue, this.paymentSelections);
      },
    },
    paymentSelections: {
      deep: true,
      handler: function (newValue) {
        this.updateFilteredCards(this.questionSelections, newValue);
      },
    },
    filteredRecCards: {
      deep: true,
      handler: function (newValue) {
        let recCardIds = [];
        for (let i = 0; i < newValue.length; i++) {
          recCardIds.push(newValue[i].id);
        }
        this.OtherCards = this.cards.filter((x) => !recCardIds.includes(x.id));
      },
    },
    comparisonSelection: {
      deep: true,
      handler: function (newValue) {
        console.log("Comparison selections App vue", newValue);
        this.compareCards = this.cards.filter((x) => newValue.includes(x.id));
        console.log("Compare Cards", this.compareCards);
        this.updateCheckBoxes();
      },
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  min-height: 100vh;
  /* margin-top: 60px; */
}

.content-bg {
  background: white;
  /* min-height: 80vh; */
  /* width: 80%; */
  /* background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  ); */
  border-radius: 1rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  /* display: flex; */
  overflow: hidden;
}

.body-content {
  padding-top: 1%;
  width: 100%;
}
.paymentBox {
  /* background-color: white; */
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
  padding-bottom: 10%;
}
.paymentBox .heading {
  padding: 6% 0 0.5%;
}
</style>