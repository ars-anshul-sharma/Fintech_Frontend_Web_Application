<template>
  <div>
    <!-- Compare bar to show the checkbox to select the card for comparison and the label for it
    1. showCompare is the prop used to enable the compare bar and allow user to compare
    2. comparisonSelection (Array) is the prop used to store the selected cards for comparison -->

    <div class="compare-bar" v-if="showCompare">
      <input
        type="checkbox"
        v-bind:id="'card_' + card.id"
        v-bind:value="card.id"
        v-model="comparisonSelection"
        class="inpCompare"
        v-on:click="card.selected = !card.selected"
      />
      <label class="compare-lbl" v-bind:for="'card_' + card.id">
        Add to Compare
      </label>
    </div>

    <!-- Designed the card to show an info button on hover and on click, the card flips to reveal the details -->
    <div
      v-bind:id="card.id"
      v-bind:title="card.name"
      v-bind:class="
        card.flipped ? 'flip-container card-1 flipped' : 'flip-container card-1'
      "
    >
      <div class="flipper">
        <!-- front portion of the card, incl. the info button, the card image and the flip button -->

        <div class="front">
          <slot name="front"></slot>
          <div
            class="frontFlipBtn"
            v-on:click="card.flipped = true"
            v-bind:title="card.name"
          >
            <img class="info" src="../../assets/information-button.png" />
            <!-- "require" is used to force vue to access the image dependency dynamically -->
            <img
              class="card-image"
              v-bind:src="require('../../assets/cards/' + card.image)"
            />
          </div>
        </div>

        <!-- back portion of the card which contains the description and two buttons - 1. one to close the flipped card, 2. View details of the card and apply -->
        <div class="back">
          <div class="card-desc">
            <div class="card_name">
              <img class="rakLogo" src="../../assets/rakuten_logo.png" alt="" />
              <h6 class="">{{ getName(card) }}</h6>
            </div>
            <p class="price-desc">Annual Membership Fee</p>
            <h2 class="price">{{ getPrice(card) }}</h2>
          </div>
          <div id="actions">
            <b-button
              class="backFlipBtn close"
              v-on:click="card.flipped = false"
              >Close</b-button
            >
            <!-- Bind the card to a specific modal to handle duplication -->
            <b-button class="details" v-b-modal="'modal' + card.id"
              >View Details</b-button
            >
            <!-- passing the card data to the cardModal to view the details -->
            <CardModal :card="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardModal from "./CardModal.vue";
export default {
  name: "Card",
  components: { CardModal },
  props: ["card", "showCompare", "comparisonSelection"],
  // {
  //   card: Object,
  //   showCompare: Boolean,
  //   comparisonSelection: Array,
  // },
  watch: {
    // On any change in the selections made for comparison, this gets triggered
    comparisonSelection: {
      deep: true,
      handler: function (newValue) {
        // Updating the parent data using this
        this.$emit("update:comparisonSelection", newValue);
        console.log("Comparison Selection Card", newValue);
      },
    },
  },
  data: function () {
    return {};
  },
  methods: {
    // Method to get the price value from the list of comparables of a card
    getName(card) {
      let name = card.name;
      name = name
        .replace("Rakuten", "")
        .replace("rakuten", "")
        .replace("RAKUTEN", "");
      return name;
    },
    getPrice(card) {
      for (let i = 0; i < card.comparables.length; i++) {
        const ele = card.comparables[i];
        if (ele.name === "Annual membership fee (tax included)") {
          // values[0] because there will only be 1 value for the annual membership pricing
          let val = ele.values[0];
          if (val.includes("Free")) {
            val = "Free/-*";
          } else {
            val += "/-";
          }
          return val;
        }
      }
      // If there is no key called "Pricing", it will show "N/A"
      return "N/A";
    },
  },
};
</script>

<style scoped>
.price,
.card_name {
  max-width: 100%;
}
.price {
  font-weight: bolder;
}
.card_name {
  margin-top: 5%;
  font-weight: bold;
  font-size: 0.6vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.price-desc {
  font-size: 0.8em;
  margin: 2% 0 5%;
}
.rakLogo {
  width: 10%;
  margin-right: 3%;
}
h6 {
  margin: 0;
  font-size: 1.75em;
  font-weight: 1000;
}
</style>