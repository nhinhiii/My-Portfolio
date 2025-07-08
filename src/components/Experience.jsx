// import React from "react";
// import { motion } from "motion/react";

// const timelineData = [
//   {
//     company: "AI HereWeGot",
//     title: "Project Leader | Software Engineering Intern",
//     date: "05/15/2025 – Present",
//     description: [
//       "Lead a team of six engineers to architect and deploy a scalable, multilingual AI chatbot and voice-call agent using Python, PyTorch, FastAPI, Docker, OpenAI API, and Twilio—reducing average response time by 40% and boosting negotiation success rates by 30%.",
//       "Trained and customized neural voice cloning to serve customers in their own voice, increasing user engagement by 25%.",
//       "Managed end-to-end CI/CD workflows and containerized microservices.",
//       "Generated context-aware images based on users’ descriptions.",
//     ],
//   },
//   {
//     company: "SocWeLab - Georgia Institute of Techonology",
//     title: "Research Assistant",
//     date: "03/01/2025 - Present",
//     description: [
//       "Developed and implemented quantitative bias metrics such as odds ratio, demographic parity, or equal opportunity, to analyze bias and fairness in large language models (LLMs) applied to mental health counseling.",
//       "Conducted a comparative analysis of advanced LLMs such as LLaMa 3.3, GPT 4.0, Claude, Gemini, Mistral, OpenBioLLM, and LLaMA 3 Instruct, with the CounselingQA dataset to assess disparities.",
//       "Combining statistical bias measures with qualitative expert assessments to mitigate model bias in mental health applications.",
//     ],
//   },
//   {
//     company: "VIP - Georgia Institute of Techonology ",
//     title: "Software Engineer",
//     date: "01/06/2025",
//     description: [
//       "Developing a Google sponsored Mobile App, and collaborated with AI, toolkits, design, and researcher teams under the supervision of Dr. Starner that empowers over 10,000 hearing parents to learn American Sign Language (ASL) and enhance communication with their deaf children.",
//       "Utilizing mainly C#, Figma and Unity to improve sign detection accuracy by 30% through iterative algorithm performance and targeted user testing.",
//       "Designing an engaging and interactive platform featuring 250+ ASL vocabulary items",
//     ],
//   },
//   {
//     company: "FPT Software Ho Chi Minh",
//     title: "Web Developer Intern",
//     date: "05/12/2024 - 08/01/2024",
//     description: [
//       "Collaborated with a cross-functional team over 20+ professionals to modernize legacy systems by converting RPG AS400 to Java-based web applications using Spring Boot and Spring MVC.",
//       "Developed dynamic and responsive user interfaces with React, JS, and SQL, significantly improving user experience.",
//       "Enhanced app performance and maintainability by 65% through efficient coding practices and strictly testing code before implementing to customers every week",
//     ],
//   },
// ];

// export const Experience = () => {
//   return (
//     <section id="experience" className="px-5 py-28 relative">
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <h2 className="text-[36px] md:text-5xl text-main font-semibold mb-20 text-center">
//           Work Experience
//         </h2>
//       </div>

//       <div className="relative max-w-4xl mx-auto">
//         {/* Vertical center line */}
//         <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-white dark:bg-gray-600" />

//         <div className="space-y-12 mt-8">
//           {timelineData.map((item, idx) => {
//             const isLeft = idx % 2 === 0;
//             return (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 className="grid grid-cols-9 items-center"
//               >
//                 {/* Left‐side card */}
//                 {isLeft && (
//                   <div className="col-start-1 col-end-5 text-right pr-8">
//                     <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
//                       <time className="block font-mono text-sm text-gray-500 dark:text-gray-400">
//                         {item.date}
//                       </time>
//                       <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
//                         {item.title}
//                       </h3>
//                       <h4 className="text-sm text-gray-600 dark:text-gray-300">
//                         {item.company}
//                       </h4>
//                       <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
//                         {item.description.map((d, i) => (
//                           <li key={i}>{d}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 )}

//                 {/* Milestone dot */}
//                 <div className="col-start-5 col-end-6 flex justify-center">
//                   <div className="h-5 w-5 rounded-full bg-[#BA487F] ring-4 ring-white dark:ring-gray-900" />
//                 </div>

//                 {/* Right‐side card */}
//                 {!isLeft && (
//                   <div className="col-start-6 col-end-10 text-left pl-8">
//                     <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
//                       <time className="block font-mono text-sm text-gray-500 dark:text-gray-400">
//                         {item.date}
//                       </time>
//                       <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
//                         {item.title}
//                       </h3>
//                       <h4 className="text-sm text-gray-600 dark:text-gray-300">
//                         {item.company}
//                       </h4>
//                       <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
//                         {item.description.map((d, i) => (
//                           <li key={i}>{d}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { Timeline } from "./ui/Timeline";

// 1) Your raw data
const rawTimeline = [
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
    company: "SocWeLab – Georgia Institute of Technology",
    title: "Research Assistant",
    date: "03/01/2025 – Present",
    description: [
      "Developed and implemented quantitative bias metrics such as odds ratio, demographic parity, or equal opportunity, to analyze bias and fairness in large language models (LLMs) applied to mental health counseling.",
      "Conducted a comparative analysis of advanced LLMs such as LLaMa 3.3, GPT 4.0, Claude, Gemini, Mistral, OpenBioLLM, and LLaMA 3 Instruct, with the CounselingQA dataset to assess disparities.",
      "Combined statistical bias measures with qualitative expert assessments to mitigate model bias in mental health applications.",
    ],
  },
  {
    company: "VIP – Georgia Institute of Technology",
    title: "Software Engineer | Research Assistant",
    date: "01/06/2025",
    description: [
      "Developing a Google-sponsored mobile app, collaborating with AI, design, and researcher teams under Dr. Starner to empower 10,000+ hearing parents to learn ASL and enhance communication.",
      "Utilized C#, Figma, and Unity to improve sign detection accuracy by 30% through iterative algorithm tuning and user testing.",
      "Designed an interactive platform featuring 250+ ASL vocabulary items.",
    ],
  },
  {
    company: "FPT Software Ho Chi Minh",
    title: "Web Developer Intern",
    date: "05/12/2024 – 08/01/2024",
    description: [
      "Collaborated with 20+ professionals to modernize legacy RPG AS400 systems into Java-based web apps using Spring Boot/MVC.",
      "Built dynamic, responsive UIs with React, JavaScript, and SQL, significantly improving user experience.",
      "Boosted app performance and maintainability by 65% through clean code practices and rigorous weekly testing.",
    ],
  },
];

// 2) Map to the shape Timeline wants
const timelineData = rawTimeline.map((item) => ({
  title: item.date,
  content: (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-[var(--primary)]">
        {item.title}
      </h3>
      <h4 className="text-sm italic text-gray-600 dark:text-gray-300">
        {item.company}
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
        {item.description.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  ),
}));

// 3) Use Timeline in your section
export const Experience = () => {
  return (
    <section id="experience" className="px-5 py-28 mb-18 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[36px] md:text-5xl text-main text-center font-semibold">
          Work Experience
        </h2>

        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
