import React from 'react'

const EditInput = (
    { onChange, value, mainProposal }
) => {
    // Styles
    const inputStyle = `w-[80%]  text-black ${mainProposal ? "p-1 my-2 md:w-[25em]" : "md:w-[21em]"} focus:outline-none rounded-[10px] `
    return (
        <div className="">
            <input className={inputStyle} value={value} type="text" onChange={onChange} />
        </div>
    )
}

export default EditInput
