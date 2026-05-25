"use client"; // Ensure this component is treated as a client component

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Full-Stack Web Development',
    description: "I architect and ship modern web applications end-to-end. On the front-end I work with React, Next.js, and TypeScript to deliver fast, accessible, and maintainable interfaces. On the server side I build robust APIs, services, and data pipelines with Node.js, Express, and Python — backed by clean data models, secure authentication, cloud deployment, and production-ready CI/CD.",
    href: "https://github.com/Meekness-zw"
  },
  {
    num: '02',
    title: 'AI Engineering & AI Agents',
    description: "I design, build, and deploy AI-powered features into production — from model integration and LLM workflows to autonomous AI agents built across modern frameworks (LangChain, LangGraph, OpenAI tools, and the Vercel AI SDK). My toolkit spans Python, TensorFlow, PyTorch, and scikit-learn for classical ML, alongside RAG, prompt engineering, and agent orchestration for LLM systems. I focus on shipping intelligence that is useful, observable, and reliable at scale.",
    href: ""
  },
  {
    num: '03',
    title: 'Mobile App Development',
    description: "I build cross-platform mobile applications with React Native and Expo, focused on performance, intuitive UX, and reliability. Capabilities include offline-first architectures, REST and GraphQL integrations, push notifications, secure authentication, and full delivery to the App Store and Google Play with automated CI/CD.",
    href: ""
  },
  {
    num: '04',
    title: 'UX/UI Design',
    description: "I craft user-centred digital experiences grounded in research, accessibility, and clean visual systems. Working in Figma, I produce wireframes, prototypes, and design systems that translate seamlessly into engineered components — bridging design and code to deliver products that are both elegant and usable.",
    href: ""
  },
  {
    num: '05',
    title: 'Technical SEO & Performance',
    description: "I optimise sites for visibility and speed through technical SEO and Core Web Vitals: semantic HTML, structured data (Schema.org), metadata, sitemaps, clean URL architecture, image and bundle optimisation, and analytics-driven content strategy that compounds over time.",
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
