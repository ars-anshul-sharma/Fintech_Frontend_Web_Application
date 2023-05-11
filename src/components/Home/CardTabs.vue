<template>
  <b-card no-body>
    <!-- tabIndex view-model is used to select the active tab  -->
    <b-tabs v-model="tabIndex" card>
      <!-- Button used to reset all the inputs and user modified data -->
      <div class="reset-btn">
        <!-- on button click a reset function (user-defined) is called, which resets all the selection data -->
        <button class="reset" @click="resetAll">Reset</button>
      </div>
      <!-- Button used to enable the comparison functionality -->
      <div class="compare-btn">
        <!-- Button to show the compare bar in the cards & t -->
        <button class="compare" @click="toggleCompare">Compare</button>
      </div>

      <!-- Tab to show the recommended cards
      1. showOtherCards is a prop which is used to enable / disable the Other Cards section
      2. If Other Cards section is not shown, the title of the recommended cards tab becomes "All cards" -->
      <b-tab
        id="recommended"
        v-bind:title="showOtherCards ? 'Recommended Cards' : 'All Cards'"
      >
        <div class="recCards">
          <CardsList
            :cards="recommendedCards"
            :showCompare="showCompare"
            :comparisonSelectionCardList.sync="comparisonSelection"
          />

          <!-- If there are no recommended cards, a message is displayed to the user,
           and a button to take him to the other cards section -->
          <div v-if="recommendedCards.length === 0" class="no-results">
            <img class="noDataImg" src="../../assets/noData.png" alt="" />
            <h1>No recommendedations</h1>
            <br />
            <p>
              Sorry, We could not find any recommendations for the selected
              filters.
              <br />
              You can check some of the other cards that we offer in the
              <!-- On button click, tabIndex++ is used to bring up the index of the tab shown (i.e, to show the other cards tab, index = 1) -->
              <b-button @click="tabIndex++">"Other Cards"</b-button>section.
            </p>
          </div>
        </div>
      </b-tab>

      <!-- The Other cards section is shown if the showOtherCards prop is set to true.
      If the other cards section is not shown, the tab is removed and the title is changed to nil-->
      <b-tab
        id="others"
        v-bind:title="showOtherCards ? 'Other Cards' : ''"
        v-if="showOtherCards"
      >
        <div class="recCards">
          <CardsList
            :cards="OtherCards"
            :showCompare="showCompare"
            :comparisonSelectionCardList.sync="comparisonSelection"
          />

          <!-- If all the cards are recommended to the user, a message is shown, and a button to take the user to the recommended section -->
          <div v-if="OtherCards.length === 0" class="no-results">
            <img class="noDataImg" src="../../assets/success.png" alt="" />
            <h1>All cards recommended</h1>
            <br />
            <p>
              Hurray! All the cards that we offer, match your search filter
              <br />
              Please check out the

              <!-- On button click, tabIndex-- is used to bring down the index of the tab shown (i.e, to show the recommended cards tab, index = 0) -->
              <b-button @click="tabIndex--"
                ><b>"Recommended Cards"</b></b-button
              >
              section to get all the cards recommended for you
            </p>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import CardsList from "./CardsList.vue";
export default {
  name: "CardTabs",
  components: {
    CardsList,
  },
  props: ["recommendedCards", "OtherCards", "showOtherCards", "showCompare"],
  //   {
  //     recommendedCards: Object,
  //     OtherCards: Object,
  //     showOtherCards: Boolean,
  //   },
  watch: {
    comparisonSelection: {
      deep: true,
      handler: function (newValue) {
        this.updateComparison(newValue);
      },
    },
  },
  methods: {
    // function to send the event to the parent that the user wants to reset all the filters and data
    resetAll() {
      this.$emit("resetAll", true);
      this.showCompare = false;
      this.resetComparison();
    },

    // function to toggle the comparison feature
    toggleCompare() {
      this.showCompare = !this.showCompare;
      this.$emit("update:showCompare", this.showCompare);
      this.resetComparison();
    },

    resetComparison() {
      if (!this.showCompare) {
        // Get the checkboxes from the card lists and unselect all of them
        let checkboxes = document.querySelectorAll(
          '.recCards input[type="checkbox"]'
        );
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            checkboxes[i].checked = false;
          }
        }
        // Set the selected cards array to nil
        this.comparisonSelection = [];
      }
    },

    // function to update the parent that the comparison array has changed
    updateComparison(newValue) {
      this.$emit("comparisonSelectionFromCardTabs", newValue);
      console.log("Comparison Selection From Card Tabs", newValue);
    },
  },
  data: function () {
    return {
      comparisonSelection: [],
      tabIndex: 0,
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(189, 11, 11, 0.5);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.noDataImg {
  width: 10%;
  opacity: 20%;
  padding: 1%;
}
</style>