<template>
  <div id="app">
    <xst-button  disabled ref="try" size="small" type="success" circle >11</xst-button>
    <!-- <xst-button type="primary" icon="xst-icon-edit"></xst-button> -->
    <!-- <xst-header></xst-header> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    getSlot() {
      console.log(this.slots)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
