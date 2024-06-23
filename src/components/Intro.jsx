import { RxArrowTopRight } from "react-icons/rx";
import CreateButton from "./CreateButton";
import CreateStringBand from "./CreateStringBand";

function Intro() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="main bg-[#CDEA68] text-black px-14 rounded-lg min-h-screen relative z-50"
    >
      <div className="min-h-screen py-10 text-2xl">
        <h1 className="text-5xl pr-[10vw] py-24 text-[#212121] tracking-tight leading-none font-semibold">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className="pt-10 pb-20 text-[#40452D] flex justify-between">
          <h6 className="w-[30vw] font-normal">What you can expect:</h6>
          <div className="w-[30vw] mr-12 font-medium">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <br />
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col self-center justify-self-end font-normal">
            <h6>SM:</h6>
            <br />
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Linkedin</a>
            <a href="">dribble</a>
          </div>
        </div>
      </div>

      <CreateStringBand color="black"/>

      <div className="mt-[7vw] text-6xl flex justify-between pb-12 ">
        <div>
          <h3 className="pb-7 text-[#3a3f27] font-medium">Our approach:</h3>
          <CreateButton
            px="px-[2rem]"
            py="py-[1rem]"
            bgColor="bg-[#212121]"
            className="border-none"
            textColor="text-white"
            icon={<RxArrowTopRight className="text-[#3a3f27]" />}
            children={"Read More"}
          ></CreateButton>
        </div>
        <div>
          <img
            className="mt-5 rounded-lg"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
