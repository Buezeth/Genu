import React from "react";
import Topic from "./Topic";

const About = () => {
  return (
    <div className=" pt-[50vh] lg:pt-[45vh] mt-[75px]">
      <Topic title={"Who We Are"} />

      <div className='w-11/12 h-[500px] bg-secondary-50 m-auto my-5 rounded-2xl grid gap-5 lg:grid-cols-2 p-10 md:p-20'>
          <div>
            <h1 className="text-primary-500 text-2xl pb-2 ">What Do We Do?</h1>
            <p className="lg:text-[1.07rem]">Get your personalized color palette in 4 steps.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 md:gap-10 lg:text-[1.07rem]">
              <p>Start with two neutral colors for the text and the background.</p>
              <p>Choose your primary and secondary colors. Primary is for main CTAs and sections, and Secondary is for less important buttons and info cards.</p>
              <p>Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, cards, etc.</p>
              <p>Happy with the results? Press on “Export” and choose among different options to export in various formats, like .zip, .png, CSS, SCSS, QR Code, and more.</p>
          </div>
        </div>
    </div>
  );
};

export default About;
