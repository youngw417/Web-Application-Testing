import React from 'react'


function Display({displayItem}) {
    const { balls, strikes, atBat} = displayItem;
    return (
        <div>
             <div className = 'atContainer atContainer-left'>
                 <div className = 'score balls'>
                    <p>Balls</p>
                    <p>{balls}</p>
                 </div>
                 <div className = 'score strikes'>
                    <p>Strikes</p>
                    <p>{strikes}</p>
                 </div>

                 <div className = 'score at-bat'>
                    <p>At Bat</p>
                    <p>{atBat}</p>
                 </div>




             </div>
        </div>
    )
}

export default Display
