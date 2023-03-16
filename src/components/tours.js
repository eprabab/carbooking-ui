import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Tourlist = () => {
  const [toors, setToors] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      await axios
        .get("https://api.ootyrentaltaxis.com/tour")
        .then(function (response) {
          setToors(response.data);
        });
      // console.log(jsonResult[0].imagesUrl);
    };

    fetchData();
  }, []);

  toors.map((tour) => {
    console.log(typeof tour);
  });
  return (
    <>
      {...toors.map((tour) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {tour}
          </div>
        );
      })}
    </>
  );
};
export default Tourlist;
