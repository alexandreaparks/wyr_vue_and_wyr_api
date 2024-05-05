<script setup>
// CHILD

import { ref } from 'vue'


// Child stores data passed from Parent in props
defineProps({
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([
    'choice-selected'
])

const choice = ref('')

function choiceMade() {
  // console.log(choice.value)

  // emit event to tell the Parent component that user made a choice
  emit('choice-selected', choice.value)

}


</script>

<template>
  <div id="wyr">

    <h2>Make your choice!</h2>

    <p>{{ question }}</p>

    <div>
      <!--v-model links both radio buttons together so only one can be clicked
      and connects them to the reactive state ref choice - when a radio button
      is selected, the reactive value of choice changes to the selected choice-->

      <!--v-bind links the radio button to it's related prop-->

      <!--v-on:change calls choiceMade function when user clicks on either radio button-->

      <input v-model="choice" v-bind:value="answer1" v-on:change="choiceMade" type="radio" id="answer-1">
      <label for="answer-1">{{ answer1 }}</label>

      <input v-model="choice" v-bind:value="answer2" v-on:change="choiceMade" type="radio" id="answer-2">
      <label for="answer-2">{{ answer2 }}</label>
    </div>

  </div>

</template>

<style scoped>

#wyr {
  background-color: yellowgreen;
}

p {
  font-family: fantasy;
}

</style>
