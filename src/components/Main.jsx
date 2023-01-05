import React, {useState} from 'react'
import Card from "./card";

function Main() {
    const [stays, setStays] = useState();
    return (
        <React.Fragment>
        
        <div className='main-wrapper'>
            <div className="heading">
              <div className="heading-wrapper">
              <div className='title-text'>Stays in Finland</div>
              <div className="stays-counts">
                12+stays
              </div>
              </div>
                <Card />
            </div>
        </div>

        </React.Fragment>
    )
}

export default Main
