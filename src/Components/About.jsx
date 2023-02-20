import React, { useEffect } from "react";
import { Slider } from "./components";

const About = () => {
    useEffect(() => {
        const handleWheel = e => {
          e.preventDefault();
          window.scrollBy({
            top: e.deltaY > 0 ? window.innerHeight : -window.innerHeight,
            behavior: 'smooth'
          });
        };
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
          window.removeEventListener('wheel', handleWheel);
        };
      }, []);

  return (
    <div className="h-[100vh]">
      <div className="flex text-[#36392D] px-[230px] gap-[67px] w-full">
        <h2 className="text-[64px] w-full">Who are we?</h2>
        <p className="inline">
          Vulputate in elit tincidunt elit scelerisque massa fusce pharetra.
          Sagittis gravida lacus quisque dictum non pretium suspendisse
          porttitor. Risus adipiscing semper ornare velit. Sagittis consequat
          luctus leo arcu. Aenean nunc accumsan id maecenas. Tortor.
        </p>
      </div>
      <div className="w-full">
      <Slider />

      </div>
    </div>
  );
};

export default About;
