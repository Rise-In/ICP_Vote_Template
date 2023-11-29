import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
const NavBar = ({ getShowProposal }) => {
    const [showProposal, setShowProposal] = useState(false);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // setShowProposal(true);
    //     }, 4000); // 5000 milliseconds = 5 seconds

    //     // cleanup function
    //     return () => clearTimeout(timer);
    // }, [showProposal]);
    // Styles
    const container =
        "z-40 backdrop-blur-2xl p-4 grid place-items-center grid-flow-col shadow-2xl sticky top-0";
    const navBarText = `text-white cursor-pointer font-bold font-roboto text-[18px] md:text-[32px] flex items-center gap-4 `;
    const logoSection = "grid grid-flow-col auto-cols-max gap-4";
    const underlineStyle = `${!showProposal && "underline"}`;
    return (
        <div className={container}>
            <div className={logoSection}>
                <div className={navBarText}>
                    <img
                        className="w-10 h-10 bg-blend-screen"
                        src={logo}
                        alt="logo Img"
                    />
                    <div
                        onClick={() => setShowProposal(false)}
                        className={navBarText + underlineStyle}
                    >
                        ChainCortex
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <div
                    onClick={() => setShowProposal(true)}
                    className={navBarText + underlineStyle}
                >
                    Proposals
                </div>
            </div>
        </div>
    );
};

export default NavBar;
