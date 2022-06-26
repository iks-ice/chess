<template>
  <div class="chess-board">
    <BoardCell v-for="cell in props.cells"
      :key="cell.id"
      figure="black-bishop"
      :className="cell.isWhite ? classNames.BLACK : classNames.WHITE"
    />
    <!-- <div v-for="cell in props.cells" 
      :key="cell.id"
      :class="['cell', cell.isWhite ? classNames.BLACK : classNames.WHITE]">
      <img src="../assets/chess-figures/black-bishop.png" alt="" srcset="">
    </div> -->
  </div>
</template>

<script setup lang="ts">
import {Cell} from "../types.js";
import BoardCell from "./BoardCell.vue";
const props = defineProps<{
  cells: Array<Cell>,
}>();
enum classNames {
  WHITE = "white",
  BLACK = "black"
}

</script>

<style scoped lang="less">
  .chess-board {
    width: 480px;
    height: 480px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    box-sizing: content-box;
  }
</style>