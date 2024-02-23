import Image from "next/image";
import profilePic from "../images/pfp.jpg";

export default function Home() {
  return (
    <div className="bg-white z-0 h-full flex items-center max-w-[70vw]">
      <div className="flex justify-center items-center relative overflow-hidden px-6 gap-x-32">
        <div>
          <Image
            className="rounded-full bg-white/5 ring-1 ring-white/10"
            src={profilePic}
            alt="Profile Photo"
            width={400}
          />
          {/* <div className="opacity-50 inset-0 absolute top-[100px] left-[50px] w-[420px] h-[420px] rounded-full bg-black z-0" /> */}
        </div>
        <div className="max-w-lg mx-0 flex-auto py-32 text-left">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Hello World &#x1F44B;
            <br />
            I&apos;m Lê Minh{" "}
            <span className="text-lg">(pronounced as leh-min)</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            And you are watching Disney Channel
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="duration-300 rounded-lg bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white bg-gray-800 hover:bg-white hover:outline duration-300 hover:text-gray-800 px-3.5 py-2 rounded-lg"
            >
              See what's cooking <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
