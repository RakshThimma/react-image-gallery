import ReactDOM from "react-dom/client";
import "./index.css";
import dog1 from "./assets/images/dog1.jpg";
import dog2 from "./assets/images/dog2.jpg";
import dog3 from "./assets/images/dog3.jpg";
import dog4 from "./assets/images/dog4.jpg";
import dog5 from "./assets/images/dog5.jpg";
import DogsDiv from "./components/DogsDiv";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

var dogsList = [
  {
    image: dog1,
    name : "Kaira"
  },
  {
    image:dog2,
    name : "Snoopy"
  },
  {
    image:dog3,
    name : "Bairav"
  },
  {
    image:dog4,
    name : "Caesar"
  },
  {
    image:dog5,
    name : "Richard"
  },
  {
    image:dog3,
    name : "Jiju"
  },
  {
    image:dog2,
    name : "Benny"
  },
  {
    image:dog1,
    name : "Mochi"
  }
]


root.render(
  <div>
      {
        dogsList.map(function(item){
          return <DogsDiv image={item.image} name={item.name}></DogsDiv>
        })
      }
  </div>
);