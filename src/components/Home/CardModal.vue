<template>
  <b-modal
    size="xl"
    :id="'modal' + card.id"
    v-bind:title="card.name"
    body-class="modal-bg"
  >
    <h2>Features</h2>
    <ul class="double-column">
      <li v-for="feature in card.features" :key="feature">
        {{ feature }}
      </li>
    </ul>
    <h2>Benefits</h2>
    <b-row>
      <b-col
        v-for="comparable in card.comparables"
        :key="comparable.name"
        md="4"
        class="benefitCol"
      >
        <h5 class="benefitHeading">{{ comparable.name }}</h5>
        <ul class="noBullet">
          <li v-for="benefit in comparable.values" :key="benefit">
            {{ benefit }}
          </li>
        </ul>
      </b-col>
    </b-row>
    <template #modal-footer="{ cancel }">
      <b-button size="sm" variant="primary" class="float-left" @click="cancel()"
        >Cancel</b-button
      >
      <b-button
        size="sm"
        variant="danger"
        class="float-right ml-auto"
        to="apply"
        target="_blank"
        >Apply!</b-button
      >
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "CardModal",
  props: ["card"],
};
</script>