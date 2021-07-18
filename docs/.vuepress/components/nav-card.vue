<template>
  <div class="nav-card">
    <slot></slot>
  </div>
</template>

<script>
  export default  {};
</script>

<style scoped>

  /* $theme-color: #42b983; */

.nav-card {
  overflow: auto;
  display: flex;
  margin: 16px 0px;
  padding: 12px 0px;
}
</style>