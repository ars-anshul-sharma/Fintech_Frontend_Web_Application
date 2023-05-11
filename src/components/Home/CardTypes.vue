<template>
  <div class="">
        <div class="">
            <h2 class="heading">Narrow Down your search (Select below)</h2>
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
                    v-model="quesSelected"
                    class="inpCheck"
                    @click="question.selected = !question.selected"
                  />
                  <label class="quesInpLabel" v-bind:for="question.id">
                    <p class="quesInpDesc">{{question.value}}</p>
                  </label>
                </b-col>
              </b-row>
            </b-container>
          </div>
    <div class="CardTypes">
    <!-- Div for adding questions and selection -->
    <div class="recBody">
      <b-container id="card-selection">
      <b-row>
        <b-col md="2" v-bind:class="showPaymentFilters ? 'disbaled w-10 pad-0':'w-10 pad-0'">
          <div id="paymentTypeSection">
            <h4 class="heading">Card Types</h4>
            <b-container class="parent">
              <b-row id="paymentTypes">
                <b-col
                  md="12"
                  v-bind:class="disabledPayment ? 'questionInp btn-card disabled' : (payment.selected ? 'questionInp highlighted btn-card' : 'questionInp btn-card')"
                  v-for="payment in payment_p"
                  :key="payment.id"
                >
                  <!-- Adding checkbox which will act as the question selection -->
                  <input
                    type="checkbox"
                    v-bind:id="payment.id"
                    v-bind:value="payment.id"
                    v-model="selected"
                    class="inpCheck"
                    @click="payment.selected = !payment.selected"
                  />
                  <label class="quesLabel" v-bind:for="payment.id">
                    <img v-bind:src="payment.image" alt="" class="type-img" />
                  </label>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-col>

        <b-col md="10" class="w-90 pad-0">
          <b-card no-body>
            <b-tabs card>
              <div class="compare-btn">
                <button class="compare" @click="toggleCompare">Compare</button>
              </div>
              <b-tab
                id="recommended"
                v-bind:title="
                  showOtherCards ? 'Recommended Cards' : 'All Cards'
                "
              >
                <div class="recCards">
                  <b-container class="parent">
                    <b-row id="card-list" align-v="center">
                      <b-col md="3" v-for="card in filteredRecCards" :key="card.id" v-bind:class="card.selected ? 'card-bg w-20' : 'w-20'">
                        <div class="compare-bar" v-if="showCompare">
                          <input
                          type="checkbox"
                          v-bind:id="card.id"
                          v-bind:value="card.id"
                          v-model="comparison"
                          class="inpCompare"
                          v-on:click= "card.selected = !card.selected"
                        />
                        <label class="" v-bind:for="card.id">
                          Add to Compare
                        </label>
                        </div>
                        <div
                          v-bind:id="card.id"
                          v-bind:class="
                            card.flipped
                              ? 'flip-container flipped'
                              : 'flip-container'
                          "
                        >
                          <div class="flipper">
                            <div class="front">
                              <slot name="front"></slot>
                              <v-icon
                                class="frontFlipBtn"
                                v-on:click="card.flipped = true"
                              >
                                <img
                                  class="info"
                                  src="../assets/information-button.png"
                                />
                                <img
                                  class="card-image"
                                  v-bind:src="card.image"
                                />
                              </v-icon>
                            </div>

                            <div class="back">
                              <slot name="back"></slot>
                              <p class="card-desc">
                                Easy-to-hold gold card with an annual membership fee of only 2,200 yen (tax included)
                                <br>
                                <ul>
                                  <li>Domestic airport lounge is free twice a year</li>
                                  <li>No annual membership fee for ETC card</li>
                                </ul>
                              </p>
                              <div id="actions">
                                <b-button class="backFlipBtn close" v-on:click="card.flipped = false">Close</b-button>
                                <b-button class="details" v-b-modal="'modal' + card.id">View Details</b-button>

                                <b-modal :id="'modal' + card.id" scrollable v-bind:title="card.name">
                                  <p class="my-4" v-for="i in 1" :key="i">
                                    Easy-to-hold gold card with an annual membership fee of only 2,200 yen (tax included)
                                    <br>
                                    <ul>
                                      <li>Domestic airport lounge is free twice a year</li>
                                      <li>No annual membership fee for ETC card</li>
                                    </ul>
                                  </p>
                                  <template #modal-footer="{cancel}">
                                    <b-button size="sm" variant="primary" class="float-left" @click="cancel()">Cancel</b-button>
                                    <b-button size="sm" variant="danger" class="float-right ml-auto" href="https://www.google.com" target="_blank">Apply!</b-button>
                                  </template>
                                </b-modal>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </div>
              </b-tab>

              <!-- Showing other cards -->
              <b-tab
                id="others"
                v-bind:title="showOtherCards ? 'Other Cards' : ''"
                v-if="showOtherCards"
              >
              <div class="recCards">
                  <b-container class="parent">
                    <b-row id="card-list" align-v="center">
                      <b-col md="3" v-for="card in OtherCards" :key="card.id" v-bind:class="card.selected ? 'card-bg w-20' : 'w-20'">
                        <div class="compare-bar" v-if="showCompare">
                          <input
                          type="checkbox"
                          v-bind:id="card.id"
                          v-bind:value="card.id"
                          v-model="comparison"
                          class="inpCompare"
                          v-on:click= "card.selected = !card.selected"
                        />
                        <label class="" v-bind:for="card.id">
                          Add to Compare
                        </label>
                        </div>
                        <div
                          v-bind:id="card.id"
                          v-bind:class="card.flipped ? 'flip-container flipped': 'flip-container'">
                          <div class="flipper">
                            <div class="front">
                              <slot name="front"></slot>
                              <v-icon
                                class="frontFlipBtn"
                                v-on:click="card.flipped = true"
                              >
                                <img
                                  class="info"
                                  src="../assets/information-button.png"
                                />
                                <img
                                  class="card-image"
                                  v-bind:src="card.image"
                                />
                              </v-icon>
                            </div>

                            <div class="back">
                              <slot name="back"></slot>
                              <p class="card-desc">
                                Easy-to-hold gold card with an annual membership fee of only 2,200 yen (tax included)
                                <br>
                                <ul>
                                  <li>Domestic airport lounge is free twice a year</li>
                                  <li>No annual membership fee for ETC card</li>
                                </ul>
                              </p>
                              <div id="actions">
                                <b-button class="backFlipBtn close" v-on:click="card.flipped = false">Close</b-button>
                                <b-button class="details" v-b-modal="'modal' + card.id">View Details</b-button>

                                <b-modal :id="'modal' + card.id" scrollable v-bind:title="card.name">
                                  <p class="my-4" v-for="i in 1" :key="i">
                                    Easy-to-hold gold card with an annual membership fee of only 2,200 yen (tax included)
                                    <br>
                                    <ul>
                                      <li>Domestic airport lounge is free twice a year</li>
                                      <li>No annual membership fee for ETC card</li>
                                    </ul>
                                  </p>
                                  <template #modal-footer="{cancel}">
                                    <b-button size="sm" variant="primary" class="float-left" @click="cancel()">Cancel</b-button>
                                    <b-button size="sm" variant="danger" class="float-right ml-auto" href="https://www.google.com" target="_blank">Apply!</b-button>
                                  </template>
                                </b-modal>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    </div>

    <div class="compareList" v-if="showCompare">
      <b-container>
        <h3>Selected</h3>
        <b-row id="compare-list" class="flex-col" align-v="center">
          <b-col class="mb-10 compareCard" v-for="card in compareCards" :key="card.id">
            <img src="../assets/plus.png" alt="" class="plus">
            <img class="card-image" v-bind:src="card.image"/>
          </b-col>
        </b-row>
        <b-button class="compareBtn" v-if="showCompareBtn" v-b-modal.cardComparisonModal>Compare Selected</b-button>
        <!-- <b-button class="details" v-b-modal="cardComparisonModal">View Details</b-button> -->

        <b-modal size="xl" id="cardComparisonModal" title="Card Comparison">

          <table id="comparisonTable">
            <thead>
              <tr>
                <th class="w-20"></th> 
                <th class="w-35" v-for="card in compareCards" :key="card.id">{{card.name}}</th>
                <!-- <th class="w-35">Card 2</th> -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Card</th>
                <td v-for="card in compareCards" :key="card.id">
                  <div class="card-img-holder">
                    <img v-bind:src="card.image" alt="" class="w-35 wd-50">
                  </div>
                </td>
              </tr>
              <tr v-for="(comparable,index) in flattenedComparedCards" :key="index">
                <th>{{comparable.name}}</th>
                <td v-for="value in comparable.values" :key="value">
                  <ul>
                    <li v-for="item in value" :key="item">{{item}}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <template #modal-footer="{cancel}">
            <b-button size="sm" variant="danger" class="float-left" @click="cancel()">Close</b-button>
            <!-- <b-button size="sm" variant="danger" class="float-right ml-auto" href="https://www.google.com" target="_blank">Apply!</b-button> -->
          </template>
        </b-modal>
      </b-container>
    </div>
  </div>
  </div>
</template>

<script>
// import FlipCard from "./Cards";
export default {
  name: "CardTypes",
  components: {
    // FlipCard,
  },
  methods: {
    toggle() {
      this.showCards = !this.showCards;
    },
    populateAllCards() {
      this.filteredRecCards = this.allCards;
    },
    resetCards() {
      for (let i = 0; i < this.allCards.length; i++) {
        this.allCards[i].flipped = false;
      }
    },
    toggleCompare() {
      this.showCompare = !this.showCompare;
      if (!this.showCompare) {
        for (let i = 0; i < this.comparison.length; i++) {
          this.compareCards[i].selected = false;
        }
        let checkboxes = document.querySelectorAll(
          '.recCards input[type="checkbox"]'
        );
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            checkboxes[i].checked = false;
          }
        }
        this.comparison = [];
      }
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
    disablePaymentTypeBoxes(state) {
      let checkboxes = document.querySelectorAll(
        '#paymentTypes input[type="checkbox"]'
      );
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = state;
      }
      this.disabledPayment = state;
    },
    flattenComparedCards(newValue) {
      let flatMap = [];
      let x = newValue[0];
      let y = newValue[1];
      for (let i = 0; i < newValue[0].comparables.length; i++) {
        let tmp = {};
        tmp.name = x.comparables[i].name;
        tmp.values = [x.comparables[i].values, y.comparables[i].values];
        flatMap.push(tmp);
      }
      this.flattenedComparedCards = flatMap;
    },
    checkAllQuesSelected(card, features, selected) {
      for (let i = 0; i < selected.length; i++) {
        let selectedObj = this.questions.filter((x) => selected[i] === x.id);
        console.log("Selected Obj", selectedObj);
        let selectedStr = selectedObj[0].value;
        if (!features.includes(selectedStr)) {
          return false;
        }
      }
      return true;
    },
    resetPaymentTypes() {
      for (let i = 0; i < this.payment_p.length; i++) {
        this.payment_p[i].selected = false;
      }
      this.selected = [];
    },
    updateFilteredCards(quesFilters, paymentFilters) {
      if (quesFilters.length === 0) {
        this.filteredRecCards = this.allCards;
        return;
      }
      let recCards = [];
      for (let i = 0; i < this.allCards.length; i++) {
        if (
          this.checkAllQuesSelected(
            this.allCards[i],
            this.allCards[i].features,
            quesFilters
          )
        ) {
          recCards.push(this.allCards[i]);
        }
      }
      this.recCards = recCards;
      if (paymentFilters.length === 0) {
        this.filteredRecCards = recCards;
        return;
      }
      let filteredRecCards = recCards.filter((x) =>
        paymentFilters.includes(x.type)
      );
      this.filteredRecCards = filteredRecCards;
      console.log("Inside Update filter, Recommended Cards", this.recCards);
      console.log(
        "Inside Update filter, Filtered Recommended Cards",
        this.filteredRecCards
      );
    },
  },
  beforeMount() {
    this.populateAllCards();
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
    comparison: {
      deep: true,
      handler: function (newValue) {
        console.log("Selected for compare", newValue);
        if (Object.keys(newValue).length === 0) {
          this.resetCards();
          this.compareCards = [];
          this.showCompareBtn = false;
        } else {
          this.compareCards = this.allCards.filter((x) =>
            newValue.includes(x.id)
          );
          this.showCompareBtn = this.compareCards.length === 2;
        }
        this.updateCheckBoxes();
        console.log("Compared Cards", this.compareCards);
      },
    },
    selected: {
      deep: true,
      handler: function (newValue) {
        this.updateFilteredCards(this.quesSelected, newValue);
      },
    },
    quesSelected: {
      deep: true,
      handler: function (newValue) {
        this.disablePaymentTypeBoxes(newValue.length === 0);
        this.showOtherCards = newValue.length > 0;
        this.updateFilteredCards(newValue, this.selected);
        this.resetPaymentTypes();
      },
    },
    filteredRecCards: {
      deep: true,
      handler: function (newValue) {
        let recCardIds = [];
        for (let i = 0; i < newValue.length; i++) {
          recCardIds.push(newValue[i].id);
        }
        this.OtherCards = this.allCards.filter(
          (x) => !recCardIds.includes(x.id)
        );
      },
    },
  },
  data: function () {
    return {
      showCards: false,
      showOtherCards: false,
      showCompare: false,
      showPaymentFilters: false,
      disabledPayment: true,
      comparison: [],
      recCards: [],
      filteredRecCards: [],
      cardTypes: [
        {
          id: 1,
          image:
            "https://arizent.brightspotcdn.com/6b/21/879744cc4e87baa461c869febaaf/visa.png",
        },
        {
          id: 2,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png",
        },
        {
          id: 3,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1200px-JCB_logo.svg.png",
        },
        {
          id: 4,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
        },
      ],
      selected: [], // Must be an array reference!
      quesSelected: [],
      questions: [
        {
          value: "Annual membership fee is free for many years",
          id: 1,
          selected: false,
        },
        {
          value: "Recommended for women",
          id: 2,
          selected: false,
        },
        {
          value: "You can choose the design",
          id: 3,
          selected: false,
        },
        {
          value: "You can use the airport lounge",
          id: 4,
          selected: false,
        },
        {
          value: "Points + 5 times at Rakuten Ichiba",
          id: 5,
          selected: false,
        },
        {
          value: "Earn miles",
          id: 8,
          selected: false,
        },
        {
          value: "Student Limit",
          id: 6,
          selected: false,
        },
        {
          value: "Bank account is attached",
          id: 7,
          selected: false,
        },
        {
          value: "Earn points other than Rakuten",
          id: 9,
          selected: false,
        },
      ],
      payment_p: [
        {
          value: "Visa",
          id: "visa",
          selected: false,
          image:
            "https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png",
        },
        {
          value: "Mastercard",
          id: "mastercard",
          selected: false,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png",
        },
        {
          value: "JCB",
          id: "jcb",
          selected: false,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1200px-JCB_logo.svg.png",
        },
        {
          value: "American Express",
          id: "amex",
          selected: false,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
        },
      ],
      compareCards: [
        // {
        //   flipped: false,
        //   selected: false,
        //   type: "",
        //   id: 1,
        //   name: "",
        //   desc: "",
        //   image: "",
        //   comparables: [
        //     {
        //       name: "Card Type",
        //       values: ["Visa", "MasterCard", "JCB"],
        //     },
        //     {
        //       name: "Pricing",
        //       values: ["$400"],
        //     },
        //   ],
        // },
      ],
      allCards: [
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 1,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 2,
          name: "Pink",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 3,
          name: "Barcelona",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 4,
          name: "White",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "mastercard",
          id: 5,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/500x315/rakuten-rewards-mastercard-020116.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "mastercard",
          id: 6,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/500x315/rakuten-rewards-mastercard-020116.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "amex",
          id: 7,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/pink-pinkacard_visa.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "amex",
          id: 8,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/pink-pinkacard_visa.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "amex",
          id: 9,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/pink-pinkacard_visa.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "jcb",
          id: 10,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/pink-pinkacard_visa.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard", "JCB"],
            },
            {
              name: "Pricing",
              values: ["$400"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 11,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 12,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 13,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 14,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 15,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 16,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 17,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 18,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
        {
          flipped: false,
          selected: false,
          type: "visa",
          id: 19,
          name: "Gold",
          desc: "This is a card",
          image:
            "https://image.card.jp.rakuten-static.com/card_corp/common/cardface/cardface_p_visa_rp_e_front_touch_220_140.png",
          comparables: [
            {
              name: "Card Type",
              values: ["Visa", "MasterCard"],
            },
            {
              name: "Pricing",
              values: ["$500"],
            },
          ],
          features: [
            "Annual membership fee is free for many years",
            "Recommended for women",
            "You can choose the design",
            "You can use the airport lounge",
            "Points + 5 times at Rakuten Ichiba",
            "Student Limit",
            "Bank account is attached",
            "Earn miles",
            "Earn points other than Rakuten",
          ],
        },
      ],
    };
  },
};
</script>

<style type="text/css" scoped>
@import "~bootstrap/dist/css/bootstrap.css";
i.frontFlipBtn,
i.backFlipBtn {
  position: absolute;
  right: 20px;
  top: 20px;
}

i.backFlipBtn {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}

.card-image {
  width: 100%;
}

.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
  background-color: white;
}

.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

/* .front {
  z-index: 2;
} */

.card-image {
  /* position: absolute; */
  left: 0;
  top: 0;
  z-index: 0;
}

.info {
  opacity: 0;
  width: 22%;
  position: absolute;
  padding: 23% 0;
  margin-left: 38%;
  z-index: 4;
}

.frontFlipBtn:hover {
  cursor: pointer;
}

.frontFlipBtn:hover .card-image {
  opacity: 50%;
}
.frontFlipBtn:hover .info {
  opacity: 100%;
}

.card-desc {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  color: crimson;
  text-align: justify;
  padding: 0 4%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8vw;
  height: 75%;
  margin: 1%;
}
.card-desc ul {
  padding-inline-start: 20px;
}

.back {
  border: 1px solid black;
  border-radius: 10px;
}

.close,
.details,
.compareBtn {
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 0.8vw;
  padding: 2% 4%;
  border-radius: 6px;
  text-decoration: none;
  display: inline-block;
}
.close {
  float: left;
  margin-left: 2%;
}
.details {
  float: right;
  margin-right: 2%;
}

.compare {
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 2% 4%;
  border-radius: 6px;
  float: right;
}
.compare-img {
  width: 15%;
  -webkit-filter: invert(100%); /* Safari/Chrome */
  filter: invert(100%);
}

.flip-container {
  margin: 8% 2%;
  width: 100%;
}

.type-img {
  width: 100%;
}

#cards {
  margin: 3% 0;
}

.recCards {
  padding: 1% 0;
  background-color: #edeff2;
  height: 48vh;
  overflow-y: scroll;
  -moz-transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

.heading {
  width: 100%;
  background-color: black;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0.25%;
}

/* .parent {
  margin: 2% 0%;
} */

.inpCheck {
  display: none;
  width: 100%;
}

.quesLabel {
  width: 100%;
}

.questionInp {
  background-color: #edeff2;
  margin: 2% 2%;
  margin-bottom: 5%;
}

.quesInp {
  background-color: #edeff2;
  margin: 1% 0.5%;
  padding: 0;
}

.highlighted {
  text-decoration: none;
  border: 2px solid #3a6073;
  color: white !important;
}

.ques-card.highlighted {
  background-color: red !important;
}

.btn-card.highlighted {
  /* background-color: rgba(192, 180, 180, 0.596) !important; */
}

.btn-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  position: relative;
  z-index: 1;
  width: 80%;
  overflow: hidden;
}

.ques-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.btn-card,
.front,
.ques-card {
  border-radius: 10px;
  box-shadow: 0 0 13px 4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 13px 4px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 13px 4px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 0 13px 4px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0 0 13px 4px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.btn-card::before,
.ques-card::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  top: 0;
  left: 0;
  /* background: #9baab4;
  background: -webkit-linear-gradient(45deg, #a0abb3, #8da0aa);
  background: -o-linear-gradient(45deg, #a0abb3, #8da0aa);
  background: -moz-linear-gradient(45deg, #a0abb3, #8da0aa);
  background: linear-gradient(45deg, #a0abb3, #8da0aa); */
  opacity: 0;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.btn-card,
.ques-card {
  color: #000;
  background-color: #ffffff;
}

.btn-card:hover:before {
  opacity: 1;
}

.quesLabel:hover,
.btn-card:hover {
  color: #fff;
  cursor: pointer;
}

#card-selection {
  margin: 1% 2%;
  width: 100%;
}
#actions {
  float: left;
  width: 100%;
}

.CardTypes {
  display: flex;
  flex-grow: 1;
}
.recBody {
  /* overflow-y: scroll; */
  flex-grow: 1;
  /* height: 100vh; */
}
.compare-btn {
  display: flex;
  width: 10%;
  float: right;
  margin: 1%;
  position: absolute;
  right: 0;
  top: 0;
}
.inpCompare {
  zoom: 2;
  float: left;
  margin-left: 5%;
}
.card-bg {
  background-color: rgb(185, 184, 184);
  -moz-transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
.compareList {
  display: flex;
  width: 15vw;
}
.flex-col {
  flex-direction: column;
}
.compareBtn {
  width: 100%;
  font-size: 1rem;
  margin-top: 15%;
}
.plus {
  margin: 10% 0;
  width: 20%;
}
.compareCard:first-child .plus {
  display: none;
}
.w-20 {
  width: 20vw;
  text-align: center;
  background-color: white;
}
.w-35 {
  width: 35vw;
  text-align: center;
  background-color: white;
}
th {
  background-color: rgb(223, 221, 221);
}
#comparisonTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#comparisonTable td,
#comparisonTable th {
  border: 1px solid rgb(104, 102, 102);
  padding: 8px;
  vertical-align: middle;
}

#comparisonTable ul {
  margin-bottom: 0;
}
.wd-50 {
  width: 50%;
  margin-left: 25%;
}
.card-img-holder {
  align-items: center;
}
.quesInpDesc {
  margin: 0;
  padding: 0 5%;
  width: 100%;
}

/* #question-list {
  margin-left: 10%;
} */

.bringToFront {
  z-index: 2;
}
.disabled {
  opacity: 50%;
}
.quesInpLabel {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.w-10 {
  width: 10%;
  font-size: 0.8rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.w-90 {
  width: 88%;
}
.w-20 {
  width: 20%;
  background-color: transparent;
}
.pad-0 {
  padding: 0;
}
#paymentTypes {
  margin-top: 15%;
}
#paymentTypeSection {
  border-radius: 6px;
  overflow: hidden;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(189, 11, 11, 0.5);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
</style>
