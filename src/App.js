import "./App.css";
import { ThankYouPage } from "./components/ThankYouPage/ThankYouPage.tsx";
import { Form } from "./components/Form/Form.tsx";
import { Header } from "./components/Header/Header.tsx";
import { useState } from "react";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  return (
    <div className="App">
      <div className="MainContainer">
        <Header />
        <Form isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
        <ThankYouPage isOpen={isFormSubmitted} setActive={setIsFormSubmitted}/>
      </div>
    
    </div>
  );
}

export default App;
