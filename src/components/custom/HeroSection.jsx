import React from 'react';

const HeroSection = () => {
    return (
        <section className="z-5">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a
                    href="https://github.com/zahidraimoon"
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                    role="alert"
                >
                    <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span>{' '}
                    <span className="text-sm font-medium">Zahid Rahimoon All new Apps</span>
                    <svg
                        className="ml-2 w-8 h-8 transition-transform duration-300 hover:rotate-180"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Build Your Resume <span className="text-primary">With AI</span>
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Effortlessly Craft a Standout Resume with Our AI-Powered Builder
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="/dashboard"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-transform duration-300 hover:scale-105"
                    >
                        Get Started
                        <svg
                            className="ml-2 -mr-1 w-8 h-8 transition-transform duration-300 hover:translate-x-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <a
                        href="/MERN_RESUME_ZAHID.pdf"
                        download
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-transform duration-300 hover:scale-105"
                    >
                        <svg
                            className="mr-2 -ml-1 w-8 h-8 transition-transform duration-300 hover:rotate-45"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 15.5l-4-4h3V3h2v8.5h3l-4 4z" />
                            <path d="M4 20h16v2H4v-2z" />
                        </svg>
                        My Resume
                    </a>
                </div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-400 uppercase">CONNECT WITH ME</span>
                    <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between gap-8">
                        {[
                            { href: "https://www.linkedin.com/in/zahidraimoon/", name: "LinkedIn" },
                            { href: "https://github.com/zahidraimoon", name: "GitHub" },
                            { href: "mailto:zahidraimoon@gmail.com", name: "Email" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="flex flex-col items-center transition-transform duration-300 hover:scale-110 text-center"
                            >
                                <svg
                                    className="w-12 h-12 text-gray-800 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {social.name === "LinkedIn" && (
                                        <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 20H7v-8h2v8zm-1-9.5c-.69 0-1.25-.56-1.25-1.25S7.31 8 8 8s1.25.56 1.25 1.25S8.69 10.5 8 10.5zm13 9.5h-2v-4.5c0-1.07-.22-2.5-1.5-2.5-1.5 0-1.75 1.25-1.75 2.5V20h-2v-8h2v1.25c.25-.5 1-1.25 2.25-1.25 2.5 0 3.25 1.75 3.25 4.25V20z" />
                                    )}
                                    {social.name === "GitHub" && (
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.25 3.44 9.69 8.2 11.24.6.11.82-.26.82-.58 0-.29-.01-1.26-.02-2.27-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.51 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 2-.4 3.02-.4 1.02 0 2.06.14 3.02.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.24 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.61-.01 2.91-.01 3.31 0 .32.22.69.82.58C20.56 21.69 24 17.25 24 12 24 5.37 18.63 0 12 0z" />
                                    )}
                                    {social.name === "Email" && (
                                        <path d="M2 4a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2H2zm20 2l-10 7L2 6h20zm0 2.222L12 15 2 8.222V18h20V8.222z" />
                                    )}
                                </svg>
                                <span className="mt-2 text-sm text-gray-700 dark:text-gray-400">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
