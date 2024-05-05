<script setup>
// PARENT

import WouldYouRather from './components/WouldYouRather.vue'

import { ref } from 'vue'

// this data will be passed to the Child component
const wyrQuestion = ref('Dance or Sing?')
const wyrAnswer1 = ref('Dance')
const wyrAnswer2 = ref('Sing')

// store user's answer
const userSelection = ref('')

function updateUserSelection(userChoice) {  // argument is choice in the Child component
  userSelection.value = `Thanks! You chose ${userChoice}`
}

</script>

<template>

  <div id="app-component">

    <h1>Would You Rather...</h1>

    <!--v-bind links data in Parent component to Child props-->
    <!--the Child prop 'question' binds to the Parent 'wyrQuestion'-->

    <!--v-on receives event from Child and calls updateUserSelection-->
    <WouldYouRather
        v-bind:question="wyrQuestion"
        v-bind:answer1="wyrAnswer1"
        v-bind:answer2="wyrAnswer2"

        v-on:choice-selected="updateUserSelection"
    ></WouldYouRather>

    <p>{{ userSelection }}</p>

  </div>

</template>

<style scoped>

#app-component {
  background-color: darkblue;
  padding: 40px;
}

p {
  font-family: "Courier New", Courier, monospace;
}

</style>
