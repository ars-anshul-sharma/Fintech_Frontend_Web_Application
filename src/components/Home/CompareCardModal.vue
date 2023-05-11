<template>
  <b-modal size="xl" id="cardComparisonModal" title="Card Comparison">
    <table id="comparisonTable">
      <thead>
        <tr>
          <th class="w-20"></th>
          <th class="w-35" v-for="card in compareCards" :key="card.id">
            {{ card.name }}
          </th>
          <!-- <th class="w-35">Card 2</th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Card</th>
          <td v-for="card in compareCards" :key="card.id">
            <div class="card-img-holder">
              <img
                v-bind:src="require('../../assets/cards/' + card.image)"
                alt=""
                class="w-35 wd-50"
              />
            </div>
          </td>
        </tr>
        <tr v-for="(comparable, index) in flattenedComparedCards" :key="index">
          <th>{{ comparable.name }}</th>
          <!-- unpacking both the card values for the specific comparable -->
          <td v-for="value in comparable.values" :key="value">
            <!-- unpacking the values associated for each card -->
            <ul>
              <li v-for="item in value" :key="item">{{ item }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <template #modal-footer="{ cancel }">
      <b-button size="sm" variant="danger" class="float-left" @click="cancel()"
        >Close</b-button
      >
      <!-- <b-button size="sm" variant="danger" class="float-right ml-auto" href="https://www.google.com" target="_blank">Apply!</b-button> -->
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "CompareCardModal",
  props: ["compareCards"],
  methods: {
    flattenComparedCards(newValue) {
      let flatMap = [];
      let x = newValue[0];
      let y = newValue[1];
      //   Iterating through the comparables of the card, to flatten the values
      for (let i = 0; i < newValue[0].comparables.length; i++) {
        let tmp = {}; // tmp object to store the combined data for the comparables of the 2 cards
        tmp.name = x.comparables[i].name; // Setting the name to the comparable name
        tmp.values = [x.comparables[i].values, y.comparables[i].values]; // Adding the value of both cards to an array to be shown in the modal
        flatMap.push(tmp);
      }
      this.flattenedComparedCards = flatMap;
      console.log("Flattened cards", this.flattenedComparedCards);
      return this.flattenedComparedCards;
    },
  },
  data: function () {
    return {
      flattenedComparedCards: this.compareCards,
    };
  },
  watch: {
    compareCards: {
      deep: true,
      handler: function (newValue) {
        if (newValue.length === 2) {
          this.flattenComparedCards(newValue);
        }
      },
    },
  },
};
</script>