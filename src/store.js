import create from 'zustand'
import produce from 'immer'
import Space from "./Space";

const useSpaceProgress = create((set) => ({
  canvas: Space,
  setVisibility: (quesNum, val) => set(
    produce(
      (state) => {
        state.canvas.forEach((ele, idx) => {
          if (ele.qNo === quesNum)
          {
            console.log('changeddd')
            state.canvas[idx].visible = val
          }
        })
        return state
      }
    )
  ),
  checkVisibility: (quesNum) => set(
    produce(
      (state) => {
        state.canvas.forEach((ele, idx) => {
          let vis = false
          ele.neighbours.forEach((n) => {
            vis = vis || n.visible
          })
          state.canvas[idx].visible = vis
        })
        return state
      }
    )
  ),
}))

export default useSpaceProgress
