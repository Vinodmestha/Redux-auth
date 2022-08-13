import React from 'react';
import { PrimaryBtn, TransparentBtn } from "../components/Button";
import { Container } from "../components/Layout";
import { H3, H4 } from "../components/Typography";
import {default as Clock} from "../Assets/Clock1.svg"
// Ellipse 15

const Pricing = () => {
  const Feature = ({ icon, label }) => {
    return (
      <div className="flex py-3">
        <img src={icon} alt="clock" />
        <div className="pl-4 tracking-wide">{label}</div>
      </div>
    );
  };
  return (
    <div className="relative py-24 bg-black-1 overflow-hidden">
      <Container className="">
        <H3 className="text-center">Cheaper than college, <br />but better!</H3>
        <div className="w-full max-w-lg bg-white my-12 mx-auto rounded-lg shadow-2xl relative z-10">
          <img src="/dots.svg" alt="" className="absolute -left-44 top-12 z-0" />
          <img src="/3lines-horizontal.svg" alt="" className="hidden md:block absolute -right-28 -top-6 z-0 transform rotate-180" />
          <div className="border-b px-7 py-4">
            {/* <h2 className="uppercase text-2xl font-bold my-5 mb-7 text-center">Practiskills</h2> */}
            <img src="/logo.svg" alt="" className="w-44 mx-auto mt-4 mb-8" />
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-bold text-black-5">₹ 7999/mo</h3>
              <p className="hidden sm:block font-light md:font-semibold text-navGray text-sm md:text-lg px-2 py-1">
                <span className="line-through mr-2">₹ 10,000/mo</span>
              </p>
            </div>
            <p className="my-4 text-black-3">Learn from the experts and work with the best. Experience a revolutionary education system.</p>
          </div>
          <div className="px-7 py-4">
            <Feature icon={Clock} label="Full-time monthly training" />
            <Feature
              icon={Clock}
              label="Daily standup and career guidance"
            />
            <Feature icon={Clock} label="Work on 5+ business projects" />
            <Feature icon={Clock} label="Pay as you go, cancel anytime" />
            <Feature icon={Clock} label="Innovative grading system" />

            <PrimaryBtn className="w-full mt-6 mb-4">Join now</PrimaryBtn>
            <p className="text-xs text-black-2 text-center">*t&c apply</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
