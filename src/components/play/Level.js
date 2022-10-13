import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

const Level = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = React.useState({});
  const populateQues = (qno) => {
    
  };
  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("jwt");
      if (token && !(state == null)) {
        const team = decodeToken(token);
        const { qno } = state;
        if (!team) {
          localStorage.removeItem("jwt");
          navigate("/login");
        } else {
          populateQues(qno);
          setData(qno);
        }
      } else {
        navigate("/login");
      }
    }

    getData();
  }, [navigate, state]);
  return <div>Level :{data.data}</div>;
};

export default Level;
