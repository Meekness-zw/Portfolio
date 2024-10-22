"use client"; // Ensure this component is treated as a client component

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "I create dynamic and responsive web applications using modern technologies. Proficient in HTML, CSS, and JavaScript, I leverage frameworks like React and Next.js for user-friendly interfaces. With experience in Node.js and Express for backend development, I ensure seamless user experiences across devices.  I invite you to explore my projects below!",
    href: "https://github.com/Meekness-zw"
  },
  {
    num: '02',
    title: 'UX/UI Design',
    description: "I am dedicated to crafting intuitive and engaging user experiences through thoughtful design. My approach involves extensive user research and usability testing to understand user needs and pain points. I create wireframes and prototypes using tools like Figma, ensuring a user-centered design process. By focusing on visual aesthetics and interaction design, making digital experiences both enjoyable and effective.",
    href: ""
  },
  {
    num: '03',
    title: 'Mobile App Development',
    description: "Coming Soon!",
    href: ""
  },
  {
    num: '04',
    title: 'SEO',
    description: "Coming Soon!",
    href: ""
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 font-primary">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn"},}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>);
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
