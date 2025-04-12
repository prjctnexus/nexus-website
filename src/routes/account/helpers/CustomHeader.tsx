import { useState, useEffect } from "react";
import { supabaseClient } from "../../../functions/SupabaseSetup";
import LoadingElement from "../../../components/LoadingElement";

interface CustomHeaderProps {
    user_name?: string;
}

export default function CustomHeader({ user_name } : CustomHeaderProps) {
    const [isDarkMode, setTheme] = useState<boolean>(true);
    useEffect(() => {
        const getUserState: () => Promise<void> = async () => {
            const { data: { user } } = await supabaseClient.auth.getUser()
            if (user == null) { window.location.href = "/account/login" }
        }
        const getColorState = (fn: { (state: boolean): void; (arg0: boolean): void }) => {
            if (!window.matchMedia) { return; }
            const query = window.matchMedia('(prefers-color-scheme: dark)');
            fn(query.matches)
            query.addEventListener('change', (event) => fn(event.matches));
        }
        getColorState((state) => setTheme(state)); getUserState()
    }, [])
    return (
        <header className="flex items-center justify-between p-6 lg:px-8 bg-transparent">
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3.5" title="Go Back Home">
                    <span className="sr-only">Project Nexus</span>
                    <img
                        alt="Project Nexus Logo"
                        src={isDarkMode ? "https://raw.githubusercontent.com/prjctnexus/nexus-website/a731ca53b7651d32406e77649a732abc06dbdf1f/public/FaviconWhite.svg" : "https://raw.githubusercontent.com/prjctnexus/nexus-website/a731ca53b7651d32406e77649a732abc06dbdf1f/public/Favicon.svg"}
                        height={48} width={48}
                    />
                    <div className="items-center gap-[inherit] hidden md:flex">
                        <h1 onClick={() => {
                            window.location.href = "/account/"
                        }} className="text-teal-600 dark:text-teal-500 text-lg hover:underline decoration-zinc-400" title="Go To Account Center Home">Account Center</h1>
                    </div>
                </a>
            </div>
            <div className="h-[48px] flex items-center">
                {user_name == undefined ? 
                    <LoadingElement size={10}/>
                :
                    <img src={`https://api.dicebear.com/9.x/initials/svg?seed=${user_name}`} alt="Profile Avatar" className="size-10 rounded-full" />
                }
            </div>
        </header>
    )
}