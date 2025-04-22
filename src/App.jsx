import { useState } from "react";
import "./App.css";
import Background from "./components/background";
import GetStarted from "./components/getStarted";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <GetStarted />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
