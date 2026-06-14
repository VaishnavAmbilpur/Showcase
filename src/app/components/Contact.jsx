import React from "react";
import { socials } from "@/data/data";

export default function Contact() {
    return (
        <div className="mt-10 scroll-mt-14" id="contact">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Contact Me</h2>
            <p className="mt-4 text-base text-base-content/70">
                If you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out to me through any of the channels below!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {socials.email && (
                    <a
                        href={socials.email.startsWith("mailto:") ? socials.email : `mailto:${socials.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200 flex flex-col gap-2"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-mail"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <span className="font-semibold">Email</span>
                            </div>
                            <svg
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45 text-base-content/60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-base-content/80 text-ellipsis overflow-hidden">vaishnavambilpur2006@gmail.com</span>
                        <span className="text-xs text-base-content/60">For business, projects, and formal inquiries.</span>
                    </a>
                )}

                {socials.linkedin && (
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200 flex flex-col gap-2"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-linkedin"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <span className="font-semibold">LinkedIn</span>
                            </div>
                            <svg
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45 text-base-content/60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-base-content/80 text-ellipsis overflow-hidden">Vaishnav Ambilpur</span>
                        <span className="text-xs text-base-content/60">Let's connect professionally and collaborate.</span>
                    </a>
                )}

                {socials.twitter && (
                    <a
                        href={socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200 flex flex-col gap-2"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-twitter"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                                <span className="font-semibold">Twitter / X</span>
                            </div>
                            <svg
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45 text-base-content/60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-base-content/80 text-ellipsis overflow-hidden">@Vaishnav1109</span>
                        <span className="text-xs text-base-content/60">Follow for tech updates, discussions, and DMs.</span>
                    </a>
                )}

                {socials.github && (
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200 flex flex-col gap-2"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-github"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                <span className="font-semibold">GitHub</span>
                            </div>
                            <svg
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45 text-base-content/60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-base-content/80 text-ellipsis overflow-hidden">VaishnavAmbilpur</span>
                        <span className="text-xs text-base-content/60">Check out my codebase and projects.</span>
                    </a>
                )}
            </div>
        </div>
    );
}
