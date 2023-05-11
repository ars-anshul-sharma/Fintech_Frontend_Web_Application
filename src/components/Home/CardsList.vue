<template>
  <div>
    <!-- Container to add the list of cards inside -->
    <b-container class="parent">
      <!-- card row (flex) to store the list of cards -->
      <b-row id="card-list" align-v="center">
        <!-- to loop through the list of card objects available and generate cards for each object -->
        <b-col md="3" v-for="card in cards" :key="card.id" class="w-20">
          <Card
            :card="card"
            :showCompare="showCompare"
            :comparisonSelection.sync="comparisonSelectionCardList"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from "./Card.vue";
// import json from "../data/cards.json";
export default {
  name: "CardsList",
  components: {
    Card,
  },
  props: ["cards", "comparisonSelectionCardList", "selected", "showCompare"],
  // {
  //   cards: Object,
  //   comparison: Array,
  //   selected: Array,
  //   showCompare: Boolean,
  // },
  watch: {
    // On change of the cards selected for comparison, this gets triggered
    comparisonSelectionCardList: {
      deep: true,
      handler: function (newValue) {
        this.updateComparison(newValue);
      },
    },
  },
  methods: {
    updateComparison(newValue) {
      this.$emit("update:comparisonSelectionCardList", newValue);
      console.log("Comparison Selection From Card List", newValue);
    },
  },
  data: function () {
    return {};
  },
};
</script>