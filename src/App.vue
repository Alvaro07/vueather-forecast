<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/index";

/**
  * base app styles
  */

.app {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  min-height: 100%;
  padding: 30px;

}
</style>
