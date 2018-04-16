<template>
<div id="app">
    app
   <router-view></router-view>
   <router-link to="/Index">Index</router-link>
   <router-link to="/About">About</router-link>
</div>
</template>
<script>
export default {
  name: 'app'
}
</script>
