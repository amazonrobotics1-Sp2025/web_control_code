export interface Grid {
  width: number;
  height: number;
  cells: Array<Cell>;
}
export interface Cell {
  cid: string;
  grid?: Grid;
}