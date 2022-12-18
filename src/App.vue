<template>
  <div class="app">
    <component :is="$route.meta.layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

</style>