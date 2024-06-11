/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Loader from "./Loader";
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd-LPewzqlRVMt3t_zJL31HCCij1UP2YM",
    authDomain: "siddhartha-dev.firebaseapp.com",
    projectId: "siddhartha-dev",
    storageBucket: "siddhartha-dev.appspot.com",
    messagingSenderId: "582920351932",
    appId: "1:582920351932:web:38ae05c963ab7fc586a0b9",
    measurementId: "G-K0DKDJHWNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const Authentication = () => {
    const navigate = useNavigate();
    const [load, showLoad] = useState(false);
    const signInWithGoogle = async () => {
        showLoad(true);
        try {
            const auth = getAuth();
            await signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    alert("Authentication Successful");
                    showLoad(false);
                    navigate("/blogs");
                }).catch((error) => {
                    showLoad(false);
                    console.log(error);
                    alert("Authentication Failed");
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
        } catch (error) {
            console.log(error);
        }
    };


    return (

        load ? (<>
            <Loader />
        </>) : (<div className="min-h-screen bg-gray-950 text-gray-900 flex justify-center items-center">
            <div className="h-3/4 max-w-screen-xl m-0 sm:m-10 bg-black shadow sm:rounded-lg flex justify-center flex-1 ">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 bg-gray-900 rounded-lg text-white">
                    <div></div>
                    <div className="mt-12 flex flex-col items-center ">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Explore | Inspire | Engage
                        </h1>
                        <p className='text-gray-400 mt-4 text-center ml-5 mr-5'>
                            Welcome to my place of thoughts where I share my thoughts, my perspective and personal experiences, each post offers a glimpse into how I view the world of tech and the ideas that shape my thoughts.
                        </p>
                        <div className="w-full flex-1 mt-40">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                    onClick={signInWithGoogle}
                                >
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4"
                                            />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853"
                                            />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04"
                                            />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-4">Get Started with Google</span>
                                </button>

                                {/* <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                                >
                                    <div className="bg-white p-1 rounded-full">
                                        <svg className="w-6" viewBox="0 0 32 32">
                                            <path
                                                fillRule="evenodd"
                                                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-4">Get Started with Github</span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-black text-center hidden lg:flex rounded-lg">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://i.pinimg.com/originals/88/4d/e8/884de81d29f37619ff17935475764213.jpg')" }}
                    ></div>
                </div>
            </div>
        </div>)

    );
};

export default Authentication;
