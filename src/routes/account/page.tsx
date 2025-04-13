import { useEffect, useState } from "react";
import CustomHeader from "./helpers/CustomHeader";
import { User } from "../../types/User";
import { supabaseClient } from "../../functions/SupabaseSetup";
import {
    ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon,
    ChevronUpIcon, CreditCardIcon, HomeIcon, IdentificationIcon,
    LockClosedIcon, ServerStackIcon, UserCircleIcon, UserGroupIcon
} from "@heroicons/react/24/outline";
import Swipe from "react-easy-swipe";
import RenderBox from "./helpers/RenderBox";

const links = [
    { id: 1, name: "Home", icon: UserCircleIcon },
    { id: 2, name: "Personal Information", icon: IdentificationIcon },
    { id: 3, name: "Data & Privacy", icon: ServerStackIcon },
    { id: 4, name: "Security", icon: LockClosedIcon },
    { id: 5, name: "People & Sharing", icon: UserGroupIcon },
    { id: 6, name: "Payments & Subscription", icon: CreditCardIcon }
]

export default function AccountPage() {
    const [userData, setUserData] = useState<User>();
    const [isNavOpen, setNavOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("Home")
    const getSection: (current: string, op: number) => string = (current: string, op: number) => {
        const arr: string[] = [];
        links.map((e) => { arr.push(e.name) })
        let idx = arr.indexOf(current) + op
        if (idx < 0) { idx = 5 }
        else if (idx > 5) { idx = 0 }
        return arr[idx];
    }

    useEffect(() => {
        const getUser: () => Promise<User | undefined> = async () => {
            const { data: { user } } = await supabaseClient.auth.getUser();
            if (user == null) { window.location.href = "/account/login/" }
            else {
                const { data, error } = await supabaseClient.from("profiles")
                    .select().eq("id", user!.id);

                if (error) { console.error(error); }
                else { return (data[0] as unknown as User) }
            }
        }
        getUser().then((user) => setUserData(user))
    }, [])
    return (
        <>
            <CustomHeader user_name={userData?.full_name} />
            <Swipe
                onSwipeLeft={() => setActiveSection(getSection(activeSection, 1))}
                onSwipeRight={() => setActiveSection(getSection(activeSection, -1))}
                tolerance={50}
                className="border-y-2 border-y-zinc-100 dark:border-y-zinc-600 lg:hidden flex items-center justify-between px-6"
            >
                <section className="flex items-center dark:text-gray-200 px-1 pointer-coarse:hidden" onClick={() => setActiveSection(getSection(activeSection, -1))}>
                    <ChevronLeftIcon className="size-5" />
                </section>
                <h1 className="text-lg whitespace-nowrap dark:text-white overflow-x-auto py-3 pointer-events-none select-none">
                    {activeSection}
                </h1>
                <section className="flex items-center dark:text-gray-200 px-1 pointer-coarse:hidden" onClick={() => setActiveSection(getSection(activeSection, 1))}>
                    <ChevronRightIcon className="size-5" />
                </section>
                <section className="hidden dark:text-gray-200 pointer-coarse:flex items-center w-[40px] justify-center" onClick={() => setNavOpen(!isNavOpen)}>
                    {isNavOpen ? <ChevronUpIcon className="size-5" /> : <ChevronDownIcon className="size-5" />}
                </section>
            </Swipe>
            <nav className={(isNavOpen ? "pointer-coarse:block py-6 border-b-2 border-b-zinc-100 dark:border-b-zinc-600" : "hidden") + " lg:hidden hidden"}>
                <ul className="flex flex-col gap-2">
                    {links.map((item) => (
                        <li className={
                            `flex items-center gap-4 pl-5 ${item.name === activeSection ? "bg-slate-50 dark:text-white dark:bg-zinc-800 py-1 rounded-r-full mr-0.5" : "text-gray-500"}`
                        } key={item.id} onClick={() => { setActiveSection(item.name); setNavOpen(false) }}>
                            <item.icon className="size-7" />
                            <h2 className="tracking-wide">{item.name}</h2>
                        </li>
                    ))}
                </ul>
            </nav>
            <ul className="lg:flex flex-col gap-4 w-[277px] h-[calc(100vh-96px)] hidden">
                {links.map((item) => (
                    <li
                        className={`flex items-center cursor-pointer gap-4 pl-7 ${item.name === activeSection ? "bg-slate-50 dark:text-white dark:bg-zinc-800 py-1 rounded-r-full" : "text-gray-500"}`}
                        key={item.id} onClick={() => {
                            setActiveSection(item.name)
                        }}>
                        <item.icon className="size-7" />
                        <h2 className="tracking-wide">{item.name}</h2>
                    </li>
                ))}
                <div className="w-full border border-zinc-300 dark:border-zinc-600 my-2"></div>
                <li className="flex items-center gap-4 ml-7 dark:text-white cursor-pointer" title="Go Back To Home Page" onClick={() => {
                    window.location.href = "/";
                }}>
                    <HomeIcon className="size-7" />
                    <h2 className="font-tracking-wide">Go Back Home</h2>
                </li>
            </ul>
            <RenderBox visible={isNavOpen}><></></RenderBox>
        </>
    )
}