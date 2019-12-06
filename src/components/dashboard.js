import React, {useState, useEffect} from 'react'


function Dashboard({checkTodisplay}) {

    const[bat, setBat] = useState('🥎')
    const batting = () => {
        const action = Math.floor(Math.random()*4)
        switch (action) {
            case 0: return 'strike 🥎';
            case 1: return 'ball ⚾️';
            case 2: return 'foul 😲';
            case 3: return 'hit 💥';
            default: return '';
        }
       
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        setBat(batting());
        
    }

    useEffect( () => {
    checkTodisplay(bat);
    }, [bat, checkTodisplay]);

    return (
        <div>

            <div className = 'atContainer atContainer-right'>
                <div className = 'atBatDiv top'>
                   <h3>
                       Batting
                   </h3>
                   <h3 className='batting'>
                        {bat}
                   </h3>
                    
                </div>
                <div className = 'atBatDiv bottom'>
                    <button onClick = {handleClick}>Click at bat</button>
                </div>
                 
            </div>
           
        </div>
    )
}

export default Dashboard
