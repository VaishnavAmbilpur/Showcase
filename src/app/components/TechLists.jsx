import Marquee from "./Marquee";
import { skills } from "@/data/data";

export default function TechLists() {
    return (
        <div className="mt-10">
             <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Tech Stack</h2>
            <Marquee duration="15s">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 w-[80px] p-2 shrink-0 animate-none"
                    >
                        <div className="border-2 p-2 border-base-content/20 shadow-md rounded-sm dark:bg-base-content">
                            <img
                                src={`${skill.icon}`}
                                className="w-10 h-10"
                                alt={`${skill.alt}`}
                            />
                        </div>
                        <span className="text-sm">{skill.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
