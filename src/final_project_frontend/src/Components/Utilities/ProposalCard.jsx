import React, { useState, useEffect } from "react";
import Card from "./Card";
import editIcon from "../../../assets/edit.png";
import EditInput from "./EditInput";
import confirmIcon from "../../../assets/confrim.png";
// import Loader from "./Loader";
const ProposalCard = ({ proposal, proposalCount }) => {
    const [loading, setLoading] = useState(true);
    const [voting, setVoting] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editInput, setEditInput] = useState("");
    const [endingProposal, setEndingProposal] = useState(false);

    useEffect(() => {
        if (proposal) {
            setLoading(false);
        }
    }, [proposal]);

    // Styles
    const customCard =
        "p-2 backdrop-blur md:w-[40em] w-[20rem] grid text-[#FFFCFF] flex-wrap items-center h-auto bg-transparent";
    const descStyle =
        "md:text-[36px] font-semibold italic text-[28px] font-roboto ";
    const cardContainer =
        "grid grid-flow-rows ml-4 text-[20px] flex-wrap gap-y-4 font-roboto text-white";
    const approveStyle = " text-[#8cb369] font-bold relative";
    const passStyle = "text-[#ffbd00] font-bold relative";
    const rejectStyle = "text-[#ff0054] font-bold relative";
    const endProposalStyle =
        "grid place-items-end cursor-pointer text-[16px] font-roboto mt-2  ";
    const editIconStyle = "md:w-10 md:h-10 w-6 h-6 cursor-pointer  ";
    const confirmIconStyle = "md:w-12 md:h-12 w-8 h-8 cursor-pointer  ";
    const approveVoteStyle =
        "text-white cursor-pointer hover:text-[#8cb369] absolute left-[3.5rem]";
    const passVoteStyle =
        "text-white cursor-pointer hover:text-[#ffbd00] absolute left-[6rem]";
    const rejectVoteStyle =
        "text-white cursor-pointer hover:text-[#ff0054] absolute left-[5rem]";
    // Calculate total votes and percentages
    const totalVotes = proposal
        ? proposal[0]?.approve + proposal[0]?.reject + proposal[0]?.pass
        : 0;
    const approvePercent = proposal
        ? (proposal[0]?.approve / totalVotes) * 100
        : 0;
    const rejectPercent = proposal
        ? (proposal[0]?.reject / totalVotes) * 100
        : 0;
    const passPercent = proposal ? (proposal[0]?.pass / totalVotes) * 100 : 0;

    // Vote bar styles
    const voteBarStyle = {
        display: "flex",
        height: "20px",
        backgroundColor: "white",
    };
    const getBarStyle = (color, percent) => {
        return {
            backgroundColor: color,
            width: `${percent}%`,
        };
    };

    // Functions to generate style objects
    const approveBarStyle = getBarStyle("#8cb369", Math.ceil(approvePercent));
    const rejectBarStyle = getBarStyle("#ff0054", Math.ceil(rejectPercent));
    const passBarStyle = getBarStyle("#ffbd00", Math.ceil(passPercent));

    // Backend Function Calls
    const handleVote = async (voteId) => {
        let userChoice;
        const handleChoice = () => {
            if (voteId === 1) {
                userChoice = { Approve: null };
            } else if (voteId === 2) {
                userChoice = { Reject: null };
            } else {
                userChoice = { Pass: null };
            }
        };
        handleChoice();
        setVoting(true);
        console.log(userChoice);
        //Actual voting request to backend
        window.location.reload();
        setVoting(false);
    };

    const handleEndProposal = async () => {
        setEndingProposal(true);
        //Actual end proposal request to backend
        setEndingProposal(false);
        window.location.reload();
    };

    const editProposal = async (count) => {
        editInput !== "" &&
            //Actual edit proposal request to backend
            setEditMode(false);
    };

    const handleEditMode = () => {
        setEditMode(true);
    };

    // Handle Input
    const handleEditInput = (e) => {
        setEditInput(e.target.value);
    };

    console.log(proposalCount);

    return (
        <Card cardStyle={customCard}>
            <div className={cardContainer}>
                <div className="flex justify-between">
                    {editMode ? (
                        <EditInput
                            mainProposal={true}
                            onChange={handleEditInput}
                        />
                    ) : (
                        <span className={descStyle}>
                            {proposal
                                ? proposal[0]?.description
                                : "Proposal Loading..."}
                        </span>
                    )}
                    {editMode ? (
                        <img
                            onClick={editProposal}
                            className={confirmIconStyle}
                            src={confirmIcon}
                            alt="confirm icon"
                        />
                    ) : (
                        <img
                            onClick={handleEditMode}
                            className={editIconStyle}
                            src={editIcon}
                            alt="edit icon"
                        />
                    )}
                </div>
                <span>
                    Approve:{" "}
                    <span className={approveStyle}>
                        {proposal && proposal[0]?.approve}{" "}
                        {proposal && proposal[0].is_active && (
                            <span
                                onClick={async () => await handleVote(1)}
                                className={approveVoteStyle}
                            >
                                {voting ? "Voting..." : "Vote"}
                            </span>
                        )}
                    </span>
                </span>
                <span>
                    Reject:{" "}
                    <span className={rejectStyle}>
                        {proposal && proposal[0]?.reject}{" "}
                        {proposal && proposal[0].is_active && (
                            <span
                                onClick={async () => await handleVote(2)}
                                className={rejectVoteStyle}
                            >
                                {voting ? "Voting..." : "Vote"}
                            </span>
                        )}
                    </span>
                </span>
                <span>
                    Pass:{" "}
                    <span className={passStyle}>
                        {proposal && proposal[0]?.pass}{" "}
                        {proposal && proposal[0].is_active && (
                            <span
                                onClick={async () => await handleVote(3)}
                                className={passVoteStyle}
                            >
                                {voting ? "Voting..." : "Vote"}
                            </span>
                        )}
                    </span>
                </span>

                <div style={voteBarStyle}>
                    <div style={approveBarStyle}></div>
                    <div style={passBarStyle}></div>
                    <div style={rejectBarStyle}></div>
                </div>
            </div>
            <div className={endProposalStyle}>
                {proposal[0].is_active ? (
                    <div
                        onClick={handleEndProposal}
                        className="hover:text-[#ff0054]"
                    >
                        {endingProposal ? "Ending Proposal..." : "End Proposal"}
                    </div>
                ) : (
                    <div className="text-[#ff0054]">Proposal is Incative</div>
                )}
            </div>
        </Card>
    );
};

export default ProposalCard;
