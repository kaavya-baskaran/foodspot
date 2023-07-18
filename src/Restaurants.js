import course from "./styles.css";
import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import Sidemenu from "./Sidemenu";
import Recp from "./Recp";
import Login from "./Login";

export default function Restaurants() {
  const data = require("./db.json");
  const [filterData, setFilterData] = useState(require("./db.json"));
  // const [arr, setarr] = useState([]);

  // useEffect(() => {
  //   setAuthenticated(false);
  // }, []);
  // const [authenticated, setAuthenticated] = useState(props.authenticated);

  function search(word) {
    if (word == "") {
      setFilterData(data);
    } else {
      setFilterData(
        filterData.filter((i) => {
          if (i.desc.toLowerCase().includes(word.toLowerCase())) {
            return true;
          }
        })
      );
    }
  }

  function debounce(e, timer) {
    setTimeout(() => {
      search(e.target.value);
    }, timer);
  }

  // function debounce(e, str_len) {
  //   if (e.target.value.length > str_len) {
  //     search(e.target.value);
  //   }
  //   // setTimeout(() => {
  //   //   search(e.target.value);
  // }

  function check(course) {
    let nd = data;
    if (course.meal.length > 0) {
      nd = nd.filter((single) => {
        if (course.meal.includes(single.meal)) {
          return true;
        }
      });
    }

    if (course.cuisine.length > 0) {
      nd = nd.filter((single) => {
        if (course.cuisine.includes(single.cuisine)) return true;
      });
    }
    if (course.diet.length > 0) {
      nd = nd.filter((single) => {
        if (course.diet.includes(single.diet)) return true;
      });
    }
    if (course.protein.length > 0) {
      nd = nd.filter((single) => {
        if (course.protein.includes(single.protein)) return true;
      });
    }
    if (course.price.length > 0) {
      nd = nd.filter((single) => {
        if (course.price.includes(single.price)) return true;
      });
    }
    console.log(nd);
    setFilterData(nd);
  }
  function uncheck(course) {
    if (
      course.meal.length == 0 &&
      course.cuisine.length == 0 &&
      course.diet.length == 0 &&
      course.protein.length == 0 &&
      course.price.length == 0
    ) {
      setFilterData(data);
    } else {
      let nd = data.filter((single) => {
        if (course.meal.includes(single.meal)) return true;
      });
      nd = nd.filter((single) => {
        if (course.cuisine.includes(single.cuisine)) return true;
      });
      nd = nd.filter((single) => {
        if (course.diet.includes(single.diet)) return true;
      });
      nd = nd.filter((single) => {
        if (course.protein.includes(single.protein)) return true;
      });
      nd = nd.filter((single) => {
        if (course.price.includes(single.price)) return true;
      });
      setFilterData(nd);
    }
  }

  return (
    <div className="full-page">
      <Navbar
        data={data}
        search={search}
        debounce={debounce}
        // {...authenticated}
      />
      <div className="body-content">
        <div className="sidemenu col-sm-4 col-md-3">
          <Sidemenu check={check} uncheck={uncheck} />
        </div>
        <Recp data={filterData} />
      </div>
    </div>
  );
}
