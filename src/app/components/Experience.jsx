import { experience } from "../../data/data";

export default function Experience() {
    if (!experience || experience.length === 0) return null;
    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Work Experience</h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => (
                            <li
                                key={index}
                                className="relative -ms-1.5 flex items-start gap-4"
                            >
                                <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

                                <div className="-mt-2">
                                    <time className="text-xs font-medium text-base-content/80">
                                        {item.date}
                                    </time>

                                    <h3 className="text-lg font-semibold text-base-content">
                                        {item.title}
                                    </h3>

                                    <p className="mt-0.5 text-sm text-base-content/80">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
