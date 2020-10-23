<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.btn button{
    border: 1px solid #dcdfe6;
    background: #fff;
    width: 92px;
    height: 32px;
    padding: 9px 15px;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    font-family: Arial;
    margin: auto;
  }
  .btn button:hover{
    background: #ecf5ff;
    color: #0090ed;
  }
  .avue-echart-pie{
   position: relative;
  }
</style>
