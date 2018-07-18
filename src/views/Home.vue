<template>
  <div class="home">
    <input-number />
    <result-number />
  </div>
</template>

<script>
// @ is an alias to /src
import InputNumber from '@/components/InputNumber'
import ResultNumber from '@/components/ResultNumber'

export default {
  name: 'home',
  components: {
    InputNumber,
    ResultNumber
  }
}
</script>
