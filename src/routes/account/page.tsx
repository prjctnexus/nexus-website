import { useEffect, useState } from "react";
import CustomHeader from "./helpers/CustomHeader";
import { User } from "../../types/User";
import { supabaseClient } from "../../functions/SupabaseSetup";
import { ChevronLeftIcon, ChevronRightIcon, CreditCardIcon, HomeIcon, IdentificationIcon, LockClosedIcon, ServerStackIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function AccountPage() {
    const [userData, setUserData] = useState<User>();
    const [activeSection, setActiveSection] = useState<string>("Home")
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
            <div className="border-y-2 border-y-zinc-200 lg:hidden flex items-center justify-between">
                <section className="flex items-center px-1">
                    <ChevronLeftIcon className="size-5"/>
                </section>
                <h1 className="text-lg text-nowrap overflow-scroll py-3">{activeSection}</h1>
                <section className="flex items-center px-1">
                    <ChevronRightIcon className="size-5"/>
                </section>
            </div>
            <ul className="lg:flex flex-col gap-4 w-[277px] h-[calc(100vh-96px)] hidden">
                <li className="flex items-center gap-4 ml-7">
                    <UserCircleIcon className="size-7" />
                    <h2 className="font-tracking-wide">Home</h2>
                </li>
                <li className="flex items-center gap-4 ml-7">
                    <IdentificationIcon className="size-7" />
                    <h2 className="font-tracking-wide">Personal Information</h2>
                </li>
                <li className="flex items-center gap-4 ml-7">
                    <ServerStackIcon className="size-7" />
                    <h2 className="font-tracking-wide">Data & Privacy</h2>
                </li>
                <li className="flex items-center gap-4 ml-7">
                    <LockClosedIcon className="size-7" />
                    <h2 className="font-tracking-wide">Security</h2>
                </li>
                <li className="flex items-center gap-4 ml-7">
                    <UserGroupIcon className="size-7" />
                    <h2 className="font-tracking-wide">People & Sharing</h2>
                </li>
                <li className="flex items-center gap-4 ml-7">
                    <CreditCardIcon className="size-7" />
                    <h2 className="font-tracking-wide">Payments & Subscriptions</h2>
                </li>
                <div className="w-full border border-zinc-300 my-2"></div>
                <li className="flex items-center gap-4 ml-7 cursor-pointer" title="Go Back To Home Page" onClick={() => {
                    window.location.href = "/";
                }}>
                    <HomeIcon className="size-7" />
                    <h2 className="font-tracking-wide">Go Back Home</h2>
                </li>
            </ul>
            <div className="absolute w-screen h-[calc(100vh-151.2px)] lg:right-0 lg:top-[96px] lg:h-[calc(100vh-96px)] lg:w-[calc(100vw-277px)]"></div>
        </>
    )
}