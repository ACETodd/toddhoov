import { TypeAnimation } from "react-type-animation";

export default function Beginning() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#13031d]">
      <div className="text-white text-center font-['Geist_Mono'] text-[32px] lg:text-lg">
        <TypeAnimation
          sequence={["What are you doing here..?", 500]}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}