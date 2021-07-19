<template>
    <a class="item">
      <div class="item-icon">
        <slot name="icon"></slot>
      </div>
      <div class="item-text">
        <slot name="text"></slot>
      </div>
    </a>
</template>

<script>
export default {};
</script>

<style scoped>
/* $theme-color: #42b983; */

.item {
  text-align: center;
  min-width: 120px;
  color: #2c3e50;
  border-style: solid;
  border-color: #c3cad0;
  border-width: 2.5px;
  border-radius: 9px;
  padding: 50px 10px;
  margin: 0px 6px;
  transition: all 0.3s ease-in-out;
}

.item:hover {
  transition: all 0.1s ease-in-out;
  background-color: #42b983;
  border-color: #85e0b7;
  color: #fff;
}

.item-icon {
  font-size: 1.8rem;
}
.item-text {
  margin-top: 12px;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>