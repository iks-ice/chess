import {reactive} from "vue";
import {Cell} from "./types.js";
interface State {
  cells: Array<Cell>
}
const initCells = () => {
  const cells: Array<Cell> = [] ;
  const isNumberEven = (n: number): boolean => !Boolean(n % 2)
  for (let i = 0; i < 8; i++) {
    const startsWithWhite = isNumberEven(i);
    for (let j = 0; j < 8; j++) {
      const cell = {
        id: i * 8 + j,
        isWhite: startsWithWhite ? !isNumberEven(j) : isNumberEven(j),
      };
      cells.push(cell);
    }
  }
  return {cells};
}
const state: State = reactive({
  ...initCells(),
});
export default state;