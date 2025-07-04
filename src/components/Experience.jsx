import React from "react";

const experiment = [
  {
    company: "AI HereWeGot",
    title: "Project Leader | Software Engineering Intern",
    date: "05/15/2025 – Present",
    description: [
      "Lead a team of six engineers to architect and deploy a scalable, multilingual AI chatbot and voice-call agent using Python, PyTorch, FastAPI, Docker, OpenAI API, and Twilio—reducing average response time by 40% and boosting negotiation success rates by 30%.",
      "Trained and customized neural voice cloning to serve customers in their own voice, increasing user engagement by 25%.",
      "Managed end-to-end CI/CD workflows and containerized microservices.",
      "Generated context-aware images based on users’ descriptions.",
    ],
  },
  {
    company: "SocWeLab - Georgia Institute of Techonology",
    title: "Research Assistant",
    date: "03/01/2025 - Present",
    description: [
      "Developed and implemented quantitative bias metrics such as odds ratio, demographic parity, or equal opportunity, to analyze bias and fairness in large language models (LLMs) applied to mental health counseling.",
      "Conducted a comparative analysis of advanced LLMs such as LLaMa 3.3, GPT 4.0, Claude, Gemini, Mistral, OpenBioLLM, and LLaMA 3 Instruct, with the CounselingQA dataset to assess disparities.",
      "Combining statistical bias measures with qualitative expert assessments to mitigate model bias in mental health applications.",
    ],
  },
  {
    company: "VIP - Georgia Institute of Techonology ",
    title: "Software Engineer",
    date: "01/06/2025",
    description: [
      "Developing a Google sponsored Mobile App, and collaborated with AI, toolkits, design, and researcher teams under the supervision of Dr. Starner that empowers over 10,000 hearing parents to learn American Sign Language (ASL) and enhance communication with their deaf children.",
      "Utilizing mainly C#, Figma and Unity to improve sign detection accuracy by 30% through iterative algorithm performance and targeted user testing.",
      "Designing an engaging and interactive platform featuring 250+ ASL vocabulary items",
    ],
  },
  {
    company: "FPT Software Ho Chi Minh",
    title: "Web Developer Intern",
    date: "05/12/2024 - 08/01/2024",
    description: [
      "Collaborated with a cross-functional team over 20+ professionals to modernize legacy systems by converting RPG AS400 to Java-based web applications using Spring Boot and Spring MVC.",
      "Developed dynamic and responsive user interfaces with React, JS, and SQL, significantly improving user experience.",
      "Enhanced app performance and maintainability by 65% through efficient coding practices and strictly testing code before implementing to customers every week",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="px-5 py-28 relative">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h2 className="text-[36px] md:text-5xl text-main font-semibold mb-20 text-center">
          Work Experience
        </h2>
      </div>
    </section>
  );
};
