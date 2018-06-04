<template>
  <div class="hello">
    <h1>{{ msg }} Page 3</h1>
    <Listing msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Listing from './Listing.vue'
export default {
  name: 'Page3',
  props: {
    msg: String,
  }, components: {
    Listing
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
