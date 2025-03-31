import HeaderElement from "@/components/HeaderElement";
import {
    GlobeAmericasIcon,
    LockClosedIcon,
    WrenchScrewdriverIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";

export default function HomePage() {
    return (
        <>
        <HeaderElement />
        <main className="w-screen h-[calc(100vh-192px)] flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl tracking-wide text-center">
                Tech for Tomorrow
                <span className="text-emerald-600">.</span>
            </h1>
            <div className="flex items-center justify-center gap-2">
                <GlobeAmericasIcon className="size-6 hover:text-indigo-800" title="Universality"/>
                <LockClosedIcon className="size-6 hover:text-red-800" title="Security And Privacy" />
                <WrenchScrewdriverIcon className="size-6 hover:text-blue-800" title="Customizability"/>
                <UserGroupIcon className="size-6 hover:text-yellow-500" title="Inclusion And Diversity"/>
            </div>
        </main>
        </>
    );
}