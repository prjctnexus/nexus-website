"use client";

import { useState } from "react";
import HeaderElement from "@/components/HeaderElement";
import LoadingElement from "@/components/LoadingElement";
import { supabaseClient } from "@/functions/SupabaseSetup";
import { AuthApiError } from "@supabase/supabase-js";

export default function SignUpPage() {
    const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);
    const [isLoaderHidden, setLoaderVisibility] = useState<boolean>(true);
    const handleUserCreation = async (formData: {
        name: string, email: string, password: string, phone: string
    }) => {
        if (!/^\+[1-9]\d{1,14}$/.test(formData.phone)) {
            alert("Please Enter A Valid Phone Number")
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert("Please Enter A Valid Email Address")
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(formData.password)) {
            alert("Please Choose A Stronger Password")
        } else {
            (document.getElementById("submitBTN") as HTMLButtonElement).disabled = true;
            document.getElementById("CONTAINER")?.classList.add("hidden");
            setLoaderVisibility(false);
            const { data, error } = await supabaseClient.auth.signUp({
                email: formData.email, password: formData.password
            });
            if (error) {
                switch ((error as AuthApiError).message) {
                    case ("User already registered"):
                        alert("User Already Registered. Please Log In");
                        window.location.href = "/account/login";
                        break;
                    default:
                        alert("Something Went Wrong. Please Try Again")
                        window.location.href = "/account/signup";
                        break;
                }
            }
            if (data.user) {
                const { error } = await supabaseClient.from("profiles")
                    .insert([{
                        id: data.user.id,
                        full_name: formData.name,
                        phone_number: formData.phone,
                        email_address: formData.email
                    }])
                if (error) {
                    alert("User Profile Created Successfully, But Something Went Wrong While Additional Data Insertion. Please Contact Support.")
                    window.location.href = "/contact/"
                } else {
                    alert("User Created Successfully.")
                    window.location.href = "/under_construction/"
                }
            }
        }
    }

    return (
        <>
            <HeaderElement />
            <div className={(isLoaderHidden ? "hidden" : "flex") + " min-w-screen justify-center items-center min-h-[calc(100vh-192px)]"}>
                <LoadingElement hidden={isLoaderHidden} />
            </div>
            <div className="flex flex-1 flex-col justify-center px-6 py-10 lg:px-8" id="CONTAINER">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl/9 dark:text-white font-bold tracking-tight text-gray-900">
                        Create A Nexus Account <span className="text-teal-500">.</span>
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" id="formElement" onSubmit={(e) => {
                        e.preventDefault(); handleUserCreation({
                                name: (document.getElementById("name") as HTMLInputElement).value,
                                email: (document.getElementById("email") as HTMLInputElement).value,
                                password: (document.getElementById("password") as HTMLInputElement).value,
                                phone: (document.getElementById("phone") as HTMLInputElement).value
                            })
                    }}>
                        <div>
                            <label htmlFor="email" className="dark:text-white block text-sm/6 font-medium text-gray-900">
                                What Should We Call You ?
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name" minLength={5} maxLength={15}
                                    name="name"
                                    type="text"
                                    required placeholder="Enter Your Name (Max 15 Characters)"
                                    autoComplete="name"
                                    className="block w-full rounded-md bg-white dark:bg-zinc-800 dark:text-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-zinc-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="dark:text-white block text-sm/6 font-medium text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required placeholder="Enter Your Email Address"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white dark:bg-zinc-800 dark:text-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-zinc-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="dark:text-white block text-sm/6 font-medium text-gray-900">
                            Phone Number (E.164)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    required placeholder="Enter Your Phone Number"
                                    autoComplete="mobile tel"
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
                                    required placeholder="Choose A Password"
                                    autoComplete="new-password" minLength={8}
                                    className="block w-full dark:bg-zinc-800 dark:text-white rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-zinc-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit" id="submitBTN"
                                className="flex disabled:cursor-not-allowed w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                            >
                                Continue
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Have an Account Already ?{' '}
                        <a href="/account/login" className="font-semibold text-teal-600 hover:text-teal-500 dark:text-teal-500 dark:hover:text-teal-600">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}