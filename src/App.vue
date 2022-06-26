<script setup lang="ts">
import { toRef } from "vue";
import ChessBoard from "./components/ChessBoard.vue";
import state from "./state.js";
const cells = toRef(state, "cells");
</script>

<template>
  <div class="board-container">
    <ChessBoard :cells="state.cells"/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.board-container {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
</style>
