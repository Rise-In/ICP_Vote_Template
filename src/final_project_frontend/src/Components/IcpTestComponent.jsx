import React, { useState } from "react";
import { final_project_backend } from "../../../declarations/final_project_backend";
// import { AuthClient } from "@dfinity/agent";

// const authClient = await AuthClient.create();

const IcpTestComponent = () => {
    // States
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    async function login() {
        // authClient = await authClient.login({
        //     onSuccess: () => {
        //         console.log("We are in")
        //         // The user has been authenticated, and you can now make calls to the Internet Computer
        //         // on their behalf.
        //     },
        // });
    }

    // async function logout() {
    //     await authClient.logout();
    //     // The user is now logged out.
    // }

    //Styles
    const inputStyle = "border-2 rounded-xl mt-4 p-2";
    const buttonStyle = "border-2 rounded-xl  ml-4 p-2";

    async function doGreet() {
        // const createProp = await final_project_backend.get_current_proposal();
    }

    return (
        <div>
            <h1 className="text-xl font-bold">Greeting Function</h1>
            <div>
                <input
                    className={inputStyle}
                    id="name"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                ></input>
                <button className={buttonStyle} onClick={doGreet}>
                    Get Greeting!
                </button>
            </div>
            <div className="mt-4">
                <span style={{ color: "blue" }}>{message}</span>
            </div>
        </div>
    );
};

export default IcpTestComponent;
