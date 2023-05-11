<template>
  <!-- the comparebar is shown only if the showCompare prop is set to true -->
  <div class="compareList" v-if="showCompare">
    <b-container id="compareDiv">
      <h3 class="heading">Selected</h3>
      <b-row id="compare-list" class="flex-col" align-v="center">
        <b-col
          class="mb-10 compareCard"
          v-for="card in compareCards"
          :key="card.id"
        >
          <img src="../../assets/plus.png" alt="" class="plus" />
          <img
            class="card-image flip-container"
            v-bind:src="require('../../assets/cards/' + card.image)"
          />
        </b-col>
      </b-row>
      <b-button
        class="compareBtn"
        v-if="showCompareBtn"
        v-b-modal.cardComparisonModal
        >Compare Selected</b-button
      >
      <!-- Modal to show the comparison between the selected Cards -->
      <CompareCardModal :compareCards="compareCards" />
      <!-- <b-button class="details" v-b-modal="cardComparisonModal">View Details</b-button> -->
    </b-container>
  </div>
</template>

<script>
import CompareCardModal from "./CompareCardModal.vue";
export default {
  name: "CompareBar",
  props: ["showCompare", "compareCards"],
  components: {
    CompareCardModal,
  },
  methods: {},
  watch: {
    compareCards: {
      deep: true,
      handler: function (newValue) {
        if (newValue.length === 2) {
          this.showCompareBtn = true;
          // this.flattenComparedCards(newValue);
        } else {
          this.showCompareBtn = false;
        }
      },
    },
    showCompare: {
      deep: true,
      handler: function (newValue) {
        if (!newValue) {
          for (let i = 0; i < this.compareCards.length; i++) {
            this.compareCards[i].selected = false;
            let checkbox = document.querySelectorAll(
              "#card_" + this.compareCards[i].id
            );
            checkbox.selected = false;
            console.log("Checkbox", this.compareCards[i].id, checkbox);
          }
          console.log("compare cards", this.compareCards);
          this.$emit("update:showCompare", newValue);
        }
      },
    },
  },
};
</script>