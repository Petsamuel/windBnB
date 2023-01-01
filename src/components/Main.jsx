import React, {useState, useEffect} from 'react'
import Card from "./card";

function Main() {
    const [stays, setStays] = useState()
    return (
        <React.Fragment>
        
        <div className='main-wrapper'>
            <div className="heading">
              <div className="heading wrapper">
              <h1>Stays in Finland</h1>
              <div>
                12+stays
              </div>
              </div>
                <Card/>
            </div>
        </div>

        </React.Fragment>
    )
}

export default Main
