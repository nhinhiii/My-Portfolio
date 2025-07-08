import React from "react";

const icons = [
  {
    image: "/svgIcon/facebook.svg",
    link: "https://www.facebook.com/nhi.nguyenyen.3572846",
  },
  {
    image: "/svgIcon/linkedIn.svg",
    link: "https://www.linkedin.com/in/nhi-audrey-y-nguyen/",
  },
  { image: "/svgIcon/gitHub.svg", link: "https://github.com/nhinhiii" },
  { image: "/svgIcon/gmail.svg", link: "mailto:nhiynguyenn@gmail.com" },
  {
    image: "/svgIcon/instagram.svg",
    link: "https://www.instagram.com/nhiiyennguyen/",
  },
];
export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-18 px-10 relative bg-[#f35467] dark:bg-[#471396]"
    >
      <h2 className="text-[24px] text-white mb-8 text-center">Contact Me</h2>

      <div className="flex space-x-8 justify-center">
        {icons.map((icon) => (
          <a className="bg-white px-2 py-2 rounded-full" href={icon.link}>
            <img className="h-8 w-8" src={icon.image} />
          </a>
        ))}
      </div>
    </section>
  );
};
