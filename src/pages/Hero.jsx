import React from "react";
import { PrimaryBtn, TransparentBtn } from "../components/Button";
import { Container } from "../components/Layout";
import { Display2 } from "../components/Typography";
import Navbar from "./Navbar";
import StripedCircle from "../Assets/striped-circle.svg";
import Hero3lines from "../Assets/hero-3lines.svg";
// import LoginContainer from "./login";

const Hero = () => {
    const [state, setState] = React.useState("name");
    React.useEffect(() => {
        let t = document.getElementById("#title");
        // t.textContent = "hero section component";
    }, [state]);
    return (
        <div className="h-screen max-h-limit bg-blue-100 bg-right-bottom 2xl:bg-cover relative">
            <div className="bg-green-500 opacity-70  absolute right-0 top-0 h-full w-5/12 z-40">
                <p>AA</p>
            </div>
            <Navbar />

            <Container className="h-full flex items-center py-32">
                <div className="w-full md:max-w-screen-sm lg:w-2/3 bg-transparent z-40 relative">
                    <img
                        className="absolute -left-32 -top-32 z-negative1"
                        src={StripedCircle}
                    />
                    <img
                        className="absolute -left-56 -bottom-24 z-negative1"
                        src={Hero3lines}
                    />
                    <Display2>We teach you `IT` Skills.</Display2>
                    <div className="text-black-3 text-xl my-10 w-10/12">
                        E-learning is an education platform that provides you
                        work-like experience as you learn.
                    </div>
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-2">
                        <PrimaryBtn className="w-full sm:mr-1">
                            Sign up
                        </PrimaryBtn>
                        <TransparentBtn className="text-sm border border-gray-400 hover:border-primary">
                            Learn more
                        </TransparentBtn>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
