import Card from "./Card.js";
import Details from "./Details.js";
import { useState } from "react";
export default function Recp(props) {
  const [showcard, setshowcard] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [id, setid] = useState(0);
  const data = props.data;
  const detail_data = require("./detail.json");

  function handleclick(ID) {
    console.log("id", ID);
    setid(ID);
    console.log("id", id);
    console.log("Clicked!");
    setshowcard(false);
    setShowDetail(true);
    window.scrollTo(0, 0);
  }
  const image1 = require("./assets/image1.jpg");
  const image2 = require("./assets/image2.jpg");
  const image3 = require("./assets/image3.jpg");
  const image4 = require("./assets/image4.jpg");
  const image5 = require("./assets/image5.jpg");
  const image6 = require("./assets/image6.jpg");
  const image7 = require("./assets/image7.jpg");
  const image8 = require("./assets/image8.jpg");
  const image9 = require("./assets/image9.jpg");
  const image10 = require("./assets/image10.jpg");
  const image11 = require("./assets/image11.jpg");
  const image12 = require("./assets/image12.jpg");
  return (
    <div className="container  main content mt-3 ">
      {showcard && (
        <div className="row my-4">
          {data.length == 0 ? (
            <h1 className="not-found">No Matches!</h1>
          ) : (
            data.map((single) => {
              return (
                <Card
                  image={single.image}
                  discount={single.discount}
                  time={single.time}
                  rating={single.rating}
                  desc={single.desc}
                  id={single.id}
                  handleclick={handleclick}
                />
              );
            })
          )}
        </div>
      )}
      {showDetail && (
        <div>
          <Details
            image1={detail_data[id].image1}
            image2={detail_data[id].image2}
            image3={detail_data[id].image3}
            name={detail_data[id].name}
          />
        </div>
      )}
    </div>
  );
}
