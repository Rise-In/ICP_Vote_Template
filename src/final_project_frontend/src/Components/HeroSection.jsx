import React from "react";
import Card from "./Utilities/Card";
import ProposalCard from "./Utilities/ProposalCard";
import BgTopSvg from "../Svgs/BgTopSvg";
import BgStringSvg from "../Svgs/BgStringSvg";

const HeroSection = ({ currentProposal, proposalCount }) => {
    // Styles
    const containterCard = "mx-4 mt-4 p-4 h-[10rem]  md:w-[30vw] md:h-[15vw] ";
    const textStyle =
        "text-white text-[18px] p-4 grid place-items-center gap-y-4 mt-4";
    const sectionContainer = "md:flex md:gap-x-[20vw] ";
    const customCard = "grid place-items-center mt-4";

    return (
        <div className="md:mt-16 mb-10 md:grid  md:place-items-center ">
            <div className={sectionContainer}>
                <div className={customCard}>
                    <ProposalCard
                        proposalCount={proposalCount}
                        proposal={currentProposal}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
