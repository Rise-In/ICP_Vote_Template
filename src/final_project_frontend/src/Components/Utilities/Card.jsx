import React from 'react'

const Card = ({ cardStyle, children, key }) => {
    // Styles
    const container = " p-1 rounded-xl shadow-lg bg-gradient-to-r from-purple via-indigo-500 to-cyan-500"

    return (
        <div key={key} className={`${container} ${cardStyle}`}>
            <div className="bg-black p-4 w-full h-full text-white rounded-lg ">
                {children}
            </div>
        </div>
    )
}

export default Card
