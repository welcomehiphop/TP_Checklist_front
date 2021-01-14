<template>
  <div>
      <h1>This is a great Message!</h1>
      <app-input :msg="message"></app-input>
  </div>
</template>

<script>

import Input from './Input.vue'

export default {
data() {
    return {
        message:'This is a great message'
    }
},
    components:{
        'app-input': Input
    }
}
</script>

<style>

</style>