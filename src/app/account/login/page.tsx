"use client";

import { useState } from "react";
import HeaderElement from "@/components/HeaderElement";
import LoadingElement from "@/components/LoadingElement";
import { supabaseClient } from "@/functions/SupabaseSetup";

export default function LoginPage() {
    const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);
    const [isLoaderHidden, setLoaderVisibility] = useState<boolean>(true);
    const handleUserSignin = async (formData: {
        password: string, email: string
    }) => {
        const { error } = await supabaseClient.auth.signInWithPassword(formData)
        if (error) {
            switch (error.message) {
                case "Invalid login credentials":
                    alert("Invalid Login Credentials. Please Try Again")
                    break;
                default:
                    alert("Something Went Wrong. Please Try Again.");
                    break;
            }
            window.location.href = "/account/login"
        } else {
            alert("User Signed In Successfully")
            window.location.href = "/under_construction/";
        }
    }

    return (
        <>
            <HeaderElement />
            <div className={(isLoaderHidden ? "hidden" : "flex") + " min-w-screen justify-center items-center min-h-[calc(100vh-192px)]"}>
                <LoadingElement hidden={isLoaderHidden}/>
            </div>
            <div className="flex flex-1 flex-col justify-center px-6 py-24 lg:px-8" id="CONTAINER">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl/9 dark:text-white font-bold tracking-tight text-gray-900">
                        Sign In To Your Account <span className="text-teal-500">.</span>
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" id="formElement" onSubmit={(e) => {
                        e.preventDefault(); handleUserSignin({
                            email: (document.getElementById("email") as HTMLInputElement).value,
                            password: (document.getElementById("password") as HTMLInputElement).value
                        }); (document.getElementById("submitBTN")as HTMLButtonElement)
                            .disabled = true;
                        document.getElementById("CONTAINER")?.classList.add("hidden")
                        setLoaderVisibility(false);
                    }}>
                        <div>
                            <label htmlFor="email" className="dark:text-white block text-sm/6 font-medium text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required placeholder="someone@example.com"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white dark:bg-zinc-800 dark:text-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-zinc-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 dark:text-white font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a onClick={() => {
                                        setPasswordVisibility(!isPasswordVisible)
                                    }} className="font-semibold text-teal-600 hover:text-teal-500 cursor-pointer dark:text-teal-500 dark:hover:text-teal-600">
                                        {isPasswordVisible ? "Hide" : "Show"} Password
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type={isPasswordVisible ? "text" : "password"}
                                    required placeholder="••••••••••••"
                                    autoComplete="current-password"
                                    className="block w-full dark:bg-zinc-800 dark:text-white rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-zinc-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit" id="submitBTN"
                                className="flex disabled:cursor-not-allowed w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Don{"'"}t Have an Account Yet ?{' '}
                        <a href="/account/signup/" className="font-semibold text-teal-600 hover:text-teal-500 dark:text-teal-500 dark:hover:text-teal-600">
                            Sign Up Now
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}