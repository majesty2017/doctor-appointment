import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const getUserData = async () => {
    try {
      await axios
        .post(
          "/api/v1/user/get-user",
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Home;
