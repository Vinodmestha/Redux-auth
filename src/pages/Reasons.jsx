import { Container } from "../components/Layout";
import Book from '../Assets/Book.svg'
import Expert from '../Assets/Expert.svg'
import Clock from '../Assets/Clock.svg'
// ArrowButtonRight ArrowButtonLeft
// import YellowRing from "../Assets/YellowRing.svg";

const tileTitle = "text-2xl text-navLink pt-6 font-semibold";
const tileSubTitle =
  "text-gray-400 font-normal text-base text-center mt-3 px-3";

const Card = ({ title, description, icon, className = '', style = {} }) => {
  return (
    <div className={`py-8 px-5 flex justify-center flex-col place-items-center rounded-md shadow bg-white ${className}`} style={style}>
      <img src={icon} alt={title + "icon"} className="mx-auto" />
      <div className={tileTitle}>{title}</div>
      <div className={tileSubTitle}>{description}</div>
    </div>
  );
};

const Reasons = () => {
  return (
    <div className="bg-reasonBackground relative text-center py-24">
      <Container className="">
        <div className="text-4xl font-bold">
          Office-like experience while learning
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <Card
            title="8 hours a day"
            description="Our expert trainers teach for 2 hours a day. The rest is for implementing the knowledge on real projects."
            icon={Book}
          />
          <Card
            title="Teams & Managers"
            description="Our team of professional managers ensure that your learning is on track and guide you to write better code."
            icon={Expert}
            style={{
              boxShadow: '0px 25px 80px rgba(10, 9, 86, 0.12)'
            }}
          />
          <Card
            title="Daily standup & Reviews"
            description="Meetings, performance reviews & project deployments. We provide you the experience of a software company."
            icon={Clock}
          />
        </div>
        {/* <YellowRing className="absolute right-10 top-24" /> */}
      </Container>
    </div>
  );
};

export default Reasons;
