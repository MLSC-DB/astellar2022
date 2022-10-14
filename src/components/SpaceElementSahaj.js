import React from "react"
import useSpaceProgress from "../store"

const SpaceElement = ({ visibility, element, neighbours, quesNum = -1 }) => {
  
  const [isVisible, setVisibility] = React.useState(visibility)
  const [canvas, setVis] = useSpaceProgress((state) => [state.canvas, state.setVisibility])
  React.useEffect(() => {
    neighbours.forEach((n) => {
      // console.log(n);
      // console.log(n.name +" "+ n.solved)
      if (n.visibility && !isVisible) {
        setVisibility(true)
        // setVis(quesNum)
      }
    })
  }, [isVisible, neighbours, quesNum,setVis])
  // console.log(quesNum);
  if (isVisible) {
    if (quesNum !== -1) {
      return (
        <a href="#planets" onClick={() => {
          setVis(quesNum)
          console.log(quesNum)
          console.log(canvas)
        }}>
          {element}
        </a>
      )
    }
    return element
  }
  return null
}
export default SpaceElement