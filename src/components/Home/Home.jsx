import React from 'react'
import './Home.css'
import Card from '../Card/Card'
import Countdown from 'react-countdown';


const Home = () => {


    const randomNoGenerator = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const freeSeatsLeft = randomNoGenerator(5, 15)



    return (
        <div className='homeContainer'>

            <h2>Time left   <Countdown date={Date.now() + 60000}>
            </Countdown></h2>


            <h1 style={{ color: "orange" }}>Claim your free trial Classes</h1>
            <div className='headingContainer'>
                <h1 style={{ color: 'blue' }}>Class Schedule</h1>
                <h2 >Free sheet left  : <span style={{ color: "orange" }}>{freeSeatsLeft}</span> </h2>
            </div>
            <Card />

        </div>
    )
}

export default Home