<template>
  <div
    :class="['cell', className]">
    <img :src="`src/assets/chess-figures/${figure}.png`" :alt="figure">
  </div>
</template>

<script lang="ts" setup>
import {toRefs} from "vue";
interface Props {
  className: string,
  figure: string,
}
const props = defineProps<Props>();
const {className, figure}  = toRefs(props);
</script>

<style lang="less">
.cell {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.white {
        background: #fff;
        color: #000;
      }
      &.black {
        background: #000;
        color: #fff;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
</style>