'use client';
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsApple, BsGlobe2, BsPhone } from "react-icons/bs";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper as SwiperType } from "swiper";

type ProjectType = "web" | "mobile";

interface Project {
  type: ProjectType;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  images: string[];
  icon?: string;
  href: string;
  /** Short, human-readable address shown in the browser bar / link button */
  display: string;
}

const projects: Project[] = [
  {
    type: "web",
    title: "Utano Skin",
    tagline: "E-commerce storefront",
    description:
      "Online store for a Harare-based maker of handmade shea and mango body butters, with an editorial, motion-led shopping experience and delivery across Zimbabwe, South Africa, the UK and the UAE.",
    highlights: ["Product catalogue & cart", "Smooth-scroll, motion-led UI", "Journal & stockist locations"],
    tags: ["Next.js", "React", "Vercel", "E-commerce"],
    images: ["/assets/work/utano-skin.jpg"],
    href: "https://www.utanoskin.com",
    display: "utanoskin.com",
  },
  {
    type: "web",
    title: "Wholeness Community Marketplace",
    tagline: "Multi-vendor wellness marketplace",
    description:
      "A whole-person wellness marketplace for people navigating acute and chronic medical conditions, bringing independent providers, products, learning resources and community together in one platform.",
    highlights: ["Provider booking & vendor onboarding", "Shop, learning hub & community", "Member accounts & checkout"],
    tags: ["Next.js", "React", "Supabase", "Stripe", "Vercel"],
    images: ["/assets/work/wholeness.jpg"],
    href: "https://www.wholenesscommunitymarketplace.com",
    display: "wholenesscommunitymarketplace.com",
  },
  {
    type: "web",
    title: "Prime Padel",
    tagline: "Club website & court booking",
    description:
      "Website for Zimbabwe's first premium padel club in Victoria Falls, where players reserve hourly or two-hour court sessions online, book coaching and find leagues and social play.",
    highlights: ["Online court reservations", "Coaching, leagues & sponsorship pages", "Bold, motion-led brand design"],
    tags: ["Next.js", "React", "Vercel", "Online booking"],
    images: ["/assets/work/prime-padel.jpg"],
    href: "https://primepadel.co.zw",
    display: "primepadel.co.zw",
  },
  {
    type: "mobile",
    title: "D.O.T (Delivery On Time)",
    tagline: "On-demand delivery app",
    description:
      "One app, three roles: customers order from local restaurants, grocers and pharmacies, merchants manage their stores, and couriers deliver, all with live tracking from pickup to the door.",
    highlights: ["Customer, merchant & courier roles", "Live courier tracking on the map", "In-app chat, wallet & payouts"],
    tags: ["iOS", "Real-time tracking", "In-app chat", "Payments"],
    images: ["/assets/work/dot-1.jpg", "/assets/work/dot-2.jpg", "/assets/work/dot-3.jpg"],
    icon: "/assets/work/dot-icon.jpg",
    href: "https://apps.apple.com/zw/app/delivery-on-time/id6788371963",
    display: "App Store",
  },
  {
    type: "mobile",
    title: "ZapCart: Mobile EV Charging",
    tagline: "On-demand EV charging app",
    description:
      "ZapCart brings the charger to the driver. Request a mobile charging van from your phone, pick a plan, pay securely and track the van in real time, or browse nearby stations with live availability.",
    highlights: ["Standard, monthly, scheduled & rapid plans", "Real-time van tracking", "Station finder & loyalty points"],
    tags: ["iOS", "Stripe", "Real-time tracking", "Maps"],
    images: ["/assets/work/zapcart-1.jpg", "/assets/work/zapcart-2.jpg"],
    icon: "/assets/work/zapcart-icon.jpg",
    href: "https://apps.apple.com/zw/app/zapcart-mobile-ev-charging/id6770963380",
    display: "App Store",
  },
];

const filters: { key: "all" | ProjectType; label: string }[] = [
  { key: "all", label: "all" },
  { key: "web", label: "web apps" },
  { key: "mobile", label: "mobile apps" },
];

const pad = (n: number) => String(n).padStart(2, "0");

const Work = () => {
  const [filter, setFilter] = useState<"all" | ProjectType>("all");
  const [index, setIndex] = useState(0);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.type === filter)),
    [filter]
  );
  const project = visible[index] ?? visible[0];

  const handleSlideChange = (swiper: SwiperType) => setIndex(swiper.activeIndex);

  const changeFilter = (key: "all" | ProjectType) => {
    setFilter(key);
    setIndex(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:pb-12"
    >
      <div className="container mx-auto">
        {/* heading + filters */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-accent text-sm mb-2">{"// selected work"}</p>
            <h1 className="h2">
              Shipped <span className="text-accent">&amp;</span> live
            </h1>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {filters.map((f) => {
              const count = f.key === "all" ? projects.length : projects.filter((p) => p.type === f.key).length;
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => changeFilter(f.key)}
                  className={`px-4 py-2 text-sm rounded-md border transition-all ${
                    active
                      ? "bg-accent text-primary border-accent font-semibold"
                      : "border-white/15 text-white/70 hover:border-accent hover:text-accent"
                  }`}
                >
                  {f.label} <span className={active ? "opacity-70" : "opacity-50"}>[{count}]</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* details */}
          <div className="w-full xl:w-[50%] flex flex-col order-2 xl:order-none">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
              className="flex flex-col gap-6"
            >
              <div className="text-7xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                {pad(index + 1)}
              </div>

              <div>
                <p className="flex items-center gap-2 text-sm text-white/60 mb-3">
                  {project.type === "web" ? <BsGlobe2 className="text-accent" /> : <BsPhone className="text-accent" />}
                  {project.tagline}
                </p>
                <h2 className="text-[30px] xl:text-[38px] font-bold leading-tight text-white">{project.title}</h2>
              </div>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex flex-col gap-1 text-sm text-white/80">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {project.tags.map((tag, i) => (
                  <li key={tag} className="text-lg text-accent">
                    {tag}
                    {i !== project.tags.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 w-max"
              >
                <span className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center transition-all group-hover:bg-accent group-hover:border-accent">
                  {project.type === "web" ? (
                    <BsArrowUpRight className="text-white text-2xl group-hover:text-primary transition-all" />
                  ) : (
                    <BsApple className="text-white text-2xl group-hover:text-primary transition-all" />
                  )}
                </span>
                <span className="flex flex-col leading-snug">
                  <span className="text-white group-hover:text-accent transition-all">
                    {project.type === "web" ? "Visit live site" : "View on the App Store"}
                  </span>
                  <span className="text-xs text-white/50 break-all">
                    {project.type === "web" ? project.display : "Available for iPhone"}
                  </span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* preview slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              key={filter}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[470px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {visible.map((item) => (
                <SwiperSlide key={item.title} className="w-full">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#232329] flex flex-col">
                    {/* window chrome */}
                    <div className="flex items-center gap-3 px-4 h-10 shrink-0 border-b border-white/10 bg-[#18181d]">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 min-w-0 flex items-center gap-2 h-6 px-3 rounded bg-white/5 text-[11px] text-white/50">
                        {item.type === "web" ? (
                          <>
                            <span className="text-accent">https://</span>
                            <span className="truncate -ml-2">{item.display}</span>
                          </>
                        ) : (
                          <>
                            <BsApple className="shrink-0" />
                            <span className="truncate">App Store · {item.title}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {item.type === "web" ? (
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={item.images[0]}
                          fill
                          sizes="(min-width: 1200px) 570px, 100vw"
                          className="object-cover object-top"
                          alt={`${item.title} home page`}
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                        <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-5 p-4 sm:p-6 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,153,0.12),transparent_60%)]">
                        {item.images.map((src, i) => (
                          <Image
                            key={src}
                            src={src}
                            width={600}
                            height={1300}
                            sizes="200px"
                            className={`h-full w-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/50 ${
                              i === 2 ? "hidden sm:block" : ""
                            }`}
                            alt={`${item.title} screenshot ${i + 1}`}
                          />
                        ))}
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex items-center justify-between mt-4 xl:mt-0 xl:absolute xl:bottom-0 xl:left-0 xl:right-0 z-20">
                <span className="text-sm text-white/50">
                  <span className="text-accent">{pad(index + 1)}</span> / {pad(visible.length)}
                </span>
                <WorkSliderBtns
                  containerStyles="flex gap-2"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded flex justify-center transition-all items-center"
                  iconsStyles={undefined}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
