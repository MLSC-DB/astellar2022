import create from "zustand";
import produce from "immer";
import Space from "./Space";

const useSpaceProgress = create((set) => ({
  canvas: Space,
  setVisibility: (name) =>
    set(
      produce((state) => {
        state.canvas.forEach((ele, idx) => {
          if (ele.name === name) {
            state.canvas[idx].visible = true;
          }
        });
      })
    ),

  setSolved: (num) =>
    set(
      produce((state) => {
        state.canvas.forEach((ele, idx) => {
          if (ele.qNo === num) {
            state.canvas[idx].solved = true;
          }
        });
      })
    ),
  checkVisibility: (path) =>
    set(
      produce((state) => {
        state.canvas.forEach((ele, idx) => {
          let vis = false;
          ele.neighbours.forEach((n) => {
            vis = vis || n.visible;
          });
          state.canvas[idx].visible = vis;
        });
      })
    ),
}));

export default useSpaceProgress;
