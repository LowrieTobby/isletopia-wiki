<template>
  <div class="nav-card">
    <a class="item"  v-for="item in items" :key="item" :href="item.link">
      <div class="item-icon">
        {{item.icon}}
      </div>
      <div class="item-text">
        {{item.text}}
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        'items':[
          {'icon':'😃','text':'简单介绍','link':'guide/introduction.html'},
          {'icon':'🐣','text':'新手教学','link':'guide/tutorial.html'},
          {'icon':'💎','text':'材料获取','link':'guide/material.html'},
          {'icon':'🤔','text':'常见问题','link':'guide/faq.html'},
          {'icon':'💊','text':'特殊机制','link':'guide/mechanism.html'},
          {'icon':'💫','text':'魔改内容','link':'guide/modification.html'},
        ]
      }
    }
  };
</script>

<style scoped>

  /* $theme-color: #42b983; */

.nav-card {
  overflow: auto;
  display: flex;
  margin: 16px 0px;
  padding: 12px 0px;
}
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