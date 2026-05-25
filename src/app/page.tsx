import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl font-primary">Full-Stack AI Engineer</span>
            <h1 className="h1 mb-4 font-primary">
              Hello, I&apos;m <br /><span className="text-accent">Meekness Kaboti</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 font-primary">
              I build AI-powered web and mobile applications end-to-end — front-end, back-end, APIs, and data — and ship them to production. With three years of professional experience across full-stack engineering and applied AI/ML, I integrate models and AI agents into real products and take them from prototype to deployment.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 font-primary">
                <Link href="/resume.html" target="_blank">View CV</Link>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
