<script setup>
// PARENT

import { ref, onMounted } from 'vue'  // onMounted called when component is first mounted (created and added to page)

import WouldYouRather from './components/WouldYouRather.vue'
import wyrService from './services/wyrService.js'  // import function that makes api call and fetches data


// this data will be passed to the Child component
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// store user's answer
const userSelection = ref('')

onMounted( () => {  // when the component is mounted, do the following:
  wyrService.getRandomWYR().then( wyrData => {  // api call to fetch data using imported function from wyrService.js
    // wyrData expected structure:
    // {"question":"Play any musical instrument or speak any language?",
    // "answer1":"Play any musical instrument",
    // "answer2":"Speak any language"}
    wyrQuestion.value = wyrData.question  // assign values using api wyrData
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

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
