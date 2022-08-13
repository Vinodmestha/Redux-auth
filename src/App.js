import React from "react";
import "./App.css";
// import LandingComponent from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "./pages/login";
function App() {
    return (
        <div className="App text-red-600">
            {/* <LandingComponent /> */}
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
