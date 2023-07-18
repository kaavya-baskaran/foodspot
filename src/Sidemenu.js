import { useState } from "react";
import truck from "./assets/truck.png";
import Card from "./Card";
import Recp from "./Recp";
// import * as data from "./db.json";

// filter = {
//   meal:["Lunch"]
//   cusisine:[]
//   diet:[]
//   ...
// }
export default function Sidemenu(props) {
  let [filter, setFilter] = useState({
    meal: [],
    cuisine: [],
    diet: [],
    protein: [],
    price: [],
  });
  let check = props.check;
  let uncheck = props.uncheck;
  return (
    <div>
      <h3 className="side-heading">Filter Receips:</h3>
      <p className="sidemenu-sub-heading">
        Customize ur page by checking out the options
      </p>
      <div className="meal-option">
        <h4 className="filter-heading">By Meal</h4>
        <label>
          <input
            type="checkbox"
            value="breakfast"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.meal.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.meal) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.meal = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Breakfast
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="brunch"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.meal.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.meal) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.meal = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Brunch
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="lunch"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                obj.meal.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.meal) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.meal = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Lunch
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="dessert"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                obj.meal.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                // console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.meal) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.meal = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Dessert
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="dinner"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                obj.meal.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.meal) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.meal = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Dinner
        </label>
        <br />
      </div>
      <br />

      <div className="Cuisine-option">
        <h4 className="filter-heading">By Cuisine</h4>
        <label>
          <input
            type="checkbox"
            value="indian"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.cuisine.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.cuisine) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.cuisine = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Indian
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="thai"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.cuisine.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.cuisine) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.cuisine = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Thai
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="chinese"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.cuisine.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.cuisine) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.cuisine = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Chinese
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="arabic"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.cuisine.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.cuisine) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.cuisine = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Arabic
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="korean"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.cuisine.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.cuisine) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.cuisine = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Korean
        </label>
        <br />
      </div>
      <br />
      <div className="Diet-option">
        <h4 className="filter-heading">By Diet</h4>
        <label>
          <input
            type="checkbox"
            value="dairy-free"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.diet.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.diet) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.diet = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Dairy-Free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="egg-free"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.diet.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.diet) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.diet = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Egg-Free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="quick n easy"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.diet.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.diet) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.diet = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Quick n Easy
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="healthy"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.diet.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.diet) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.diet = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Healthy
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="gluten-free"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.diet.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.diet) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.diet = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Gluten-Free
        </label>
        <br />
      </div>
      <br />
      <div className="meat-option">
        <h4 className="filter-heading">By Proteins</h4>
        <label>
          <input
            type="checkbox"
            value="steak"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.protein.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.protein) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.protein = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Steak
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="chicken"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.protein.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.protein) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.protein = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Chicken
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="lobster"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.protein.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.protein) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.protein = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Lobster
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="seafood-boil"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.protein.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.protein) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.protein = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Seafood-Boil
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="fish"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.protein.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.protein) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.protein = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          Fish
        </label>
        <br />
      </div>
      <br />
      <div className="cost-option">
        <h4 className="filter-heading">By Price</h4>
        <label>
          <input
            type="checkbox"
            value="low"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.price.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.price) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.price = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          low
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="medium"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.price.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.price) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.price = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          medium
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="high"
            onChange={(e) => {
              if (e.target.checked) {
                let obj = filter;
                console.log(obj);
                obj.price.push(e.target.value);
                setFilter(obj);
                check(filter);
              } else {
                console.log("Here");
                let obj = filter;
                let arr = [];
                for (let i of obj.price) {
                  if (i !== e.target.value) {
                    arr.push(i);
                  }
                }
                console.log(arr);
                obj.price = [...arr];
                setFilter(obj);
                uncheck(filter);
              }
            }}
          />
          high
        </label>
        <br />

        <br />
      </div>
      <br />
      <img className="truck" src={truck} alt="truck" />
      <br />
      <br />
      <br />
      <p className="help">Need help? 🕾987654321 </p>
      <p>
        contact us:<a href="/">foodspot@gmail.com</a>
      </p>
    </div>
  );
}
