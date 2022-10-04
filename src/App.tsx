import './App.css'
import Signup from "./form/Signup";
import Navigation from "./Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import FormContext from "./form/FormContext";
import Counter from "./counter/Counter";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="signup" element={
                    <FormContext.Provider value={{id: 1}}>
                        <Signup />
                    </FormContext.Provider>
                } />

            </Routes>
            <Counter />
        </div>
    )
}

export default App
