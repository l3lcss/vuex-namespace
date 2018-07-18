<template>
  <div>
    InputNumber component
    <b-field label="Input Number">
      <b-input v-model.number="number" type="number"></b-input>
    </b-field>
    <button class="button" @click="increment(number)">click me click click click click click</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'InputNumber',
    methods: {
    ...mapActions({
      increment: 'calculator/increment',
    })
  }
  }
</script>
