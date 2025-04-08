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
                <h1 className="text-2xl md:text-3xl lg:text-5xl tracking-wide text-center dark:text-white">
                    Tech for Tomorrow
                    <span className="text-emerald-600 dark:text-teal-500">.</span>
                </h1>
                <div className="flex items-center justify-center gap-2 dark:text-white">
                    <GlobeAmericasIcon className="size-6 hover:text-indigo-800 dark:hover:text-indigo-500" title="Universality" />
                    <LockClosedIcon className="size-6 hover:text-red-800 dark:hover:text-red-500" title="Security And Privacy" />
                    <WrenchScrewdriverIcon className="size-6 hover:text-blue-800 dark:hover:text-blue-500" title="Customizability" />
                    <UserGroupIcon className="size-6 hover:text-fuchsia-600 dark:hover:text-fuchsia-500" title="Inclusion And Diversity" />
                </div>
            </main>
        </>
    );
}