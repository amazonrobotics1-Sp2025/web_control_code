export interface Grid {
  width: number;
  height: number;
  cells: Array<Cell>;
}
export interface Cell {
  cid: string;
  grid?: Grid;
}

export const gridLayout: Grid = {
  width: 3,
  height: 2,
  cells: [
    {
      cid: "0",
      grid: {
        width: 2,
        height: 2,
        cells: [{ cid: "0-0" }, { cid: "0-1" }, { cid: "0-2" }, { cid: "0-3" }],
      },
    },
    {
      cid: "1",
      grid: {
        width: 2,
        height: 2,
        cells: [{ cid: "1-0" }, { cid: "1-1" }, { cid: "1-2" }, { cid: "1-3" }],
      },
    },
    { cid: "2" },
    { cid: "3" },
    { cid: "4" },
    { cid: "5" },
  ],
};
