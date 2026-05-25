'use client';

import CountUp from "react-countup"

const stats = [
    {
        num: 3,
        text: "Years of experience"
    },
    {
        num: 30,
        text: "Projects delivered",
        showPlus: true
    },
    {
        num: 15,
        text: "Technologies mastered"
    },
    {
        num: 100,
        text: "Code commits",
        showPlus: true
    },
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-auto">
                    {stats.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                                <span className="inline-flex items-baseline whitespace-nowrap">
                                    <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                                    {item.showPlus && (
                                        <span className="text-4xl xl:text-6xl font-extrabold">+</span>
                                    )}
                                </span>
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats
