// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Assign from "./assign";

// // only render the subtitle with a p tag  if the subtitle exists

// //   let namelet = "andrew";
// //   namelet = "Mike"; /// can be re assigned not redefine
// //   console.log(namelet);

// //   const getFirstName = function (name) {
// //     return name.split(" ")[0];
// //   };
// //   const getFirstName2 = (name) => name.split(" ")[0];

// //   let soln1 = getFirstName("humble enoma");
// //   let soln2 = getFirstName("comfort enoma");
// //   console.log(soln1, soln2);

// //     const multiply = {
// //       numbers: [2, 4, 65, 52, 9],
// //       multiplyBy: 5,
// //       multiplyFunc() {
// //        return this.numbers.map(number => number * this.multiplyBy)
// //       }
// //     }

// //    console.log( multiply.multiplyFunc());

// function App() {
//   let [increase, setIncrement] = useState([]);
//   const randomNumber = Math.floor(Math.random() * increase.length);
//   const app = {
//     title: " Indecision app",
//     subtitle: "put your life in the hands of a computer",
//     options: [],
//   };

//   const onFormSubmit = (e) => {
//     e.preventDefault();

//     let input = e.target.elements.input.value;
//     if (input) {
//       // using a wrapper function

//       setIncrement((increase) => increase.concat(input));

//       e.target.elements.input.value = "";
//     }
//   };

//   const removeAll = () => {
//     setIncrement([]);
//   };

//   const deleteItem = (e) => {
//     let indexOf = e.target.id;

//     console.log(indexOf);
//   };
//   const [count, addOne] = useState(0);

//   const add = () => {
//     addOne(count + 1);
//   };
//   const subtract = () => {
//     addOne(count - 1);
//   };
//   const reset = () => {
//     addOne(0);
//   };

//   ////////visibility toggle
//   const [show, setShow] = useState(false);
//   const showText = () => {
//     if (show === false) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   };

//   ////////// classes ////////
//   class Person {
//     constructor(name = "anonymous", age = 0) {
//       this.name = name;
//       this.age = age;
//     }
//     getGreeeting() {
//       return `Hi i'm ${this.name}`
//     }

//     getDescription() {
//       return `${this.name} is ${this.age} years old `;
//     }
//   }

//   class Traveller extends Person {
//     constructor(name, age, location) {
//       super(name, age);
//       this.location = location;
//     }

//     getGreeeting() {
//       let greeting = super.getGreeeting();
//       if(this.location) {
//         return greeting += " i'm visiting from " + this.location;
//         // return `${greeting } i'm visiting from ${this.location}`
//       }
//     }
//   }

//   const lammy = new Traveller("victor", 29, "brnim" );
//   console.log(lammy.getGreeeting());

//   // const myself = new Person("Enoma victor", 18);
//   // const sister = new Person("Enoma comfort", 25);
//   // const Friend = new Person("humble edondon", 27);
//   // console.log(myself.getDescription());
//   // console.log(sister.getDescription());
//   // console.log(Friend.getDescription());

//   // const [data, setData] = useState("");
//   // useEffect(() => {
//   //   async function getData() {
//   //     try {
//   //        axios
//   //         .get(
//   //           "https://api.themoviedb.org/3/discover/tv?sort_by=release_date.asc&with_networks=213&first_air_date.gte=2017-05-01&include_null_first_air_dates=true&api_key=1b81284bfa27956a22b58d586f47fa6f"
//   //         )
//   //         .then((movies) => setData(movies));
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   }
//   //   getData()
//   // }, []);
//   // let image = data.data.results[3].backdrop_path;
//   // console.log(data.data.results[3]);

//   return (
//     <div className="App">
//       <div className="menu-1">
//         <h1>{app.title}</h1>
//         <p>{app.subtitle}</p>
//         <h3>
//           You have{" "}
//           {increase.length > 1 ? (
//             <span>{increase.length} items</span>
//           ) : (
//             <span>{increase.length} item</span>
//           )}{" "}
//         </h3>
//         <form onSubmit={onFormSubmit}>
//           <input type="text" name="input" />
//           <button>Add option</button>
//         </form>
//         <button disabled={increase.length === 0} onClick={removeAll}>
//           Remove all
//         </button>
//         <ol>
//           {increase.length > 0 &&
//             increase.map((list) => (
//               <li key={Math.random()} id={randomNumber} onClick={deleteItem}>
//                 {list}
//               </li>
//             ))}
//         </ol>
//       </div>

//       <div className="toggle">
//         <h1>Visibility toggle</h1>
//         <button onClick={showText}>show detail</button>
//         {show && <p>This is your text when you clicked</p>}
//       </div>

//       <h1>Count: {count}</h1>
//       <button className="add" onClick={add}>
//         Add 1
//       </button>
//       <button className="subtract" onClick={subtract}>
//         Subtract 1
//       </button>
//       <button className="reset" onClick={reset}>
//         Reset
//       </button>
//       <Assign />

//       {/* <img src={`https://api.themoviedb.org/tdLJTZJ184PsO9QkK9aPeeAXLlo.jpg`} alt="poster" /> */}
//     </div>
//   );
// }

// // export default App;
