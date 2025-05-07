import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

// const Pizza = ({ name, description }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("p", {}, description),
//   ]);
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Chester's pizza shop"),
//     React.createElement(Pizza, {
//       name: "Chester one",
//       description: "Cheese & tomato",
//     }),
//     React.createElement(Pizza, {
//       name: "Chester two",
//       description: "Cheese & tomato",
//     }),
//     React.createElement(Pizza, {
//       name: "Chester three",
//       description: "Cheese & tomato",
//     }),
//     React.createElement(Pizza, {
//       name: "Chester four",
//       description: "Cheese & tomato",
//     }),
//   ]);
// };

const App = () => {
  return (
    <>
    <h1>x Chester's pizza restaurant x</h1>
    <Pizza name='Chester one' description='Cheese & tomato'/>
    <Pizza name='Chester two' description='Cheese & tomato'/>
    <Pizza name='Chester three' description='Cheese & tomato'/>
    <Pizza name='Chester four' description='Cheese & tomato'/>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
