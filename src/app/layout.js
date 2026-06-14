import "./globals.css";
import { seo } from "@/data/data";
import Footer from "./components/Footer";

export const metadata = {
    title: `${seo.title}`,
    description: `${seo.description}`,
    keywords: `${seo.keywords}`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" data-scroll-behavior="smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className={`antialiased overflow-auto`}>
                <div className="w-[100%] md:w-[700px] m-auto">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
