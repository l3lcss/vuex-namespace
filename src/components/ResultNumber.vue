
<template>
  <div>
    ResultNumber component
    <b-field label="Result Number">
      <b-input size="is-large" :placeholder="getnumberResult"></b-input>
    </b-field>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ResultNumber',
  computed: {
    ...mapGetters({
      getnumberResult: 'calculator/getnumberResult'
    })
  }
}
</script>
