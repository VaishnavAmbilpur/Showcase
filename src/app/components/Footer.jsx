import { about } from "@/data/data";

export default function Footer() {
    return (
        <>
            <div className="mt-20 p-4">
                <p className="text-sm">© {new Date().getFullYear()} {about.name}. All rights reserved.</p>
            </div>
        </>
    );
}
