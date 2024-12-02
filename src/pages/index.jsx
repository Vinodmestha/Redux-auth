import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Reasons from "./Reasons";
import Pricing from "./Pricing";
import Footer from "./Footer";
import LoginContainer from "./login";
import { Container } from "../components/Layout";

const LandingComponent = () => {
    return (
        <div>
            {/* <Navbar />
            <Hero />
            <Container> */}
            <LoginContainer />
            {/* </Container>

            <Categories />
            <Reasons />
            <Pricing />
            <Footer /> */}
        </div>
    );
};
export default LandingComponent;
