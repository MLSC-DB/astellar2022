import React from "react";
import useSpaceProgress from "../store";
import { useNavigate } from "react-router-dom";

const SpaceElement = ({
  visibility,
  name,
  element,
  neighbours,
  solved,
  quesNum = -1,
}) => {
  const toLevel = () => {
    localStorage.setItem("qno", quesNum);
    navigate("/play/level");
  };

  const [canvas, setVis] = useSpaceProgress((state) => [
    state.canvas,
    state.setVisibility,
  ]);

  const [sol, setSol] = useSpaceProgress((state) => [
    state.canvas,
    state.setSolved,
  ]);
  
  
  setSol(parseInt(localStorage.getItem("pl")))

  const navigate = useNavigate();
  React.useEffect(() => {
    if (solved) {
      neighbours.forEach((n) => {
        setVis(n.name);
      }, console.log("planets initialised"));
    }
  }, [name, solved, setVis, neighbours]);

  if (quesNum !== -1 && visibility !== false) {
    if (!solved) {
      return (
        <a
          href="#planets"
          onClick={() => {
            toLevel();
          }}
        >
          {element}
        </a>
      );
    } else {
      return (
        <>
          <a
            href="#planets"
            onClick={(e) => {
              e.preventDefault();
              alert("You have already solved this level!");
            }}
          >
            {element}
          </a>
        </>
      );
    }
  } else {
    return null;
  }
};
export default SpaceElement;
