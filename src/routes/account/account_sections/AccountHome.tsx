import { AdjustmentsVerticalIcon, CheckCircleIcon, LockClosedIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import LoadingElement from "../../../components/LoadingElement";
import AccountSectionProps from "./AccountSectionsProp";

const pageData = [
    {
        name: "Privacy & Personalization", id: 1,
        description:"Manage What Data Of Yours Is Saved, and How It Will Be Used to Personalize Your Nexus Experience",
        icon: LockClosedIcon,
        buttonText: "Manage Your Data & Privacy", href: "Data & Privacy"
    }, {
        name: "More About You", id: 2,
        description: "View and Update Your Personal Information to Keep Your Nexus Account Accurate and Secure",
        icon: CheckCircleIcon,
        buttonText: "Update Personal Information", href: "Personal Information"
    }, {
        name: "Security Checkup", id: 3,
        description: "Adjust Your Security Settings and Control What Data Helps Personalize Your Nexus Experience",
        icon: AdjustmentsVerticalIcon,
        buttonText: "Take A Privacy Checkup", href: "Security"
    }, {
        name: "Connected Experiences", id: 4,
        description: "Explore Nexus Services and Manage the Apps and Accounts Connected to Your Nexus Experience",
        icon: WrenchScrewdriverIcon,
        buttonText: "Explore People & Sharing", href: "People & Sharing"
    }
]

export default function AccountHome({ ActiveUser, RenderedSectionHandler }: AccountSectionProps) {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center">
                {ActiveUser == null ? (
                    <LoadingElement />
                ) : (
                    <div className="my-12 md:my-24">
                        <div className="w-full flex items-center justify-center">
                            <img
                                src={`https://api.dicebear.com/9.x/initials/svg?seed=${ActiveUser.full_name}`} alt="User Avatar"
                                width={96} height={96} className="rounded-full"
                            />
                        </div>
                        <h1 className="text-[28px] dark:text-white open-sans-font text-center py-5">Welcome, {ActiveUser.full_name}</h1>
                        <ul className="grid gap-8 min-[668px]:grid-cols-2 max-w-4xl px-4 pt-5">
                            {pageData.map((element) => (
                                <li key={element.id} className="border-2 dark:border-zinc-600 py-4 rounded-xl border-zinc-300">
                                    <div className="flex items-center justify-between px-4 gap-4">
                                        <div>
                                            <h2 className="font-semibold text-lg dark:text-white open-sans-font tracking-wide">{element.name}</h2>
                                            <p className="text-gray-500">{element.description}</p>
                                        </div>
                                        <element.icon className="size-20 text-teal-600 dark:text-teal-500" />
                                    </div>
                                    <div className="flex items-center justify-center border-t-2 mt-4 dark:border-t-zinc-600 border-t-zinc-300">
                                        <button
                                            className="flex-none rounded-md bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-teal-600 dark:focus-visible:outline-teal-700 mt-4"
                                            onClick={() => RenderedSectionHandler!(element.href)}
                                        >
                                            {element.buttonText}
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}