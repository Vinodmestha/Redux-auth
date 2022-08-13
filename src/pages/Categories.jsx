import React from "react";
import { Container } from "../components/Layout";
import { H3 } from "../components/Typography";
import { PrimaryBtn } from "../components/Button";
import {default as ReactIcon} from '../Assets/icons/react.svg';
import NodeJsIcon from '../Assets/icons/nodejs.svg';
import MongodbIcon from '../Assets/icons/mongodb.svg';
import ProjectIcon from '../Assets/icons/codesandbox.svg';
import ExpertIcon from '../Assets/icons/superuser.svg';
import Dots from '../Assets/dots.svg'
import Threelines from '../Assets/3lines-horizontal.svg'
import RoundedLines from '../Assets/Rounded3Lines.svg'
const Card = ({ title, description, Icon, iconClassName = '' }) => {
  return (
    <div className="w-full border-3 border-gray-200 rounded-md text-center py-7 ">
      <div className={`w-20 h-20 mx-auto rounded-full border p-4 ${iconClassName}`}>
        <img src={Icon} />
      </div>
      <div className="text-xl text-navLink pt-4 font-semibold">{title}</div>
      <div className="text-gray-400 font-normal text-sm">{description}</div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="py-24 relative">
      <img src={Threelines} alt="" className="hidden lg:block absolute right-0 bottom-16" />
      <img src={Dots} alt="" className="hidden xl:block absolute -left-16 -top-12" />
      <Container className="text-center">
        <H3>We help you to become full-stack engineers</H3>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 my-12 text">
          <Card
            title="Reactjs"
            description="UI Development"
            Icon={ReactIcon}
            iconClassName="border-blue-500 text-blue-500 "
          />
          <Card
            title="NodeJs"
            description="Backend Development"
            Icon={NodeJsIcon}
            iconClassName="bg-green-300 border-green-300 text-black-4"
          />
          <Card title="MongoDb" description="Database" Icon={MongodbIcon} iconClassName="border-green-600 text-green-600" />
          <Card title="Real project" description="With daily standup" Icon={ProjectIcon} iconClassName="" />
          <Card title="Expert guidance" description="Professional managers" Icon={ExpertIcon} iconClassName="border-tertiary text-tertiary" />
        </div>

        <PrimaryBtn className="">BROWSE ALL COURSE</PrimaryBtn>
        <div>
          <img src={RoundedLines} className="absolute right-0" />
        </div>
      </Container>
    </section>
  );
};

export default Categories;
