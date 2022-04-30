import React, { useState } from 'react'
import './Card.css'

const Card = () => {
    const randomNoGenerator = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const freeSeatsLeft1 = randomNoGenerator(0, 10)
    const freeSeatsLeft2 = randomNoGenerator(0, 15)
    const freeSeatsLeft3 = randomNoGenerator(0, 5)
    const freeSeatsLeft4 = randomNoGenerator(0, 3)
    const freeSeatsLeft5 = randomNoGenerator(0, 1)
    const freeSeatsLeft6 = randomNoGenerator(0, 7)


    const [seats1, setSeats1] = useState(freeSeatsLeft1)
    const [seats2, setSeats2] = useState(freeSeatsLeft2)
    const [seats3, setSeats3] = useState(freeSeatsLeft3)
    const [seats4, setSeats4] = useState(freeSeatsLeft4)
    const [seats5, setSeats5] = useState(freeSeatsLeft5)
    const [seats6, setSeats6] = useState(freeSeatsLeft6)

    const [booked, setBooked] = useState('Book Now')

    const changeState = (state, setState) => {
        if (state !== 0) {
            setState(state - 1)

        }
    }

    const bookOnClick1 = () => {
        changeState(seats1, setSeats1)
        setBooked("Booked")
    }
    const bookOnClick2 = () => {
        changeState(seats2, setSeats2)
    }
    const bookOnClick3 = () => {
        changeState(seats3, setSeats3)
    }
    const bookOnClick4 = () => {
        changeState(seats4, setSeats4)
    }
    const bookOnClick5 = () => {
        changeState(seats5, setSeats5)
    }
    const bookOnClick6 = () => {
        changeState(seats6, setSeats6)
    }


    return (
        <div>
            <table>
                <tr>
                    <td>Subject</td>
                    <td>Date</td>
                    <td>Time</td>
                    <td>Availability</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Monday May 03 2021</td>
                    <td>4:00pm-5:00pm</td>
                    <td>{seats1} seats Availabile</td>
                    <td><button style={{ backgroundColor: (seats1 === 0) ? 'red' : 'orange' }} className='btn' onClick={bookOnClick1}>{(seats1 === 0) ? 'Seats Full' : booked}</button></td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Monday May 03 2021</td>
                    <td>4:00pm-5:00pm</td>
                    <td>{seats2} seats Availabile</td>
                    <td><button style={{ backgroundColor: (seats2 === 0) ? 'red' : 'orange' }} className='btn' onClick={bookOnClick2}>{(seats2 === 0) ? 'Seats Full' : booked}</button></td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Monday May 03 2021</td>
                    <td>4:00pm-5:00pm</td>
                    <td>{seats3} seats Availabile</td>
                    <td><button  style={{ backgroundColor: (seats3 === 0) ? 'red' : 'orange' }} className='btn' onClick={bookOnClick3}>{(seats3 === 0) ? 'Seats Full' : 'Book Now'}</button></td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Monday May 03 2021</td>
                    <td>4:00pm-5:00pm</td>
                    <td>{seats4} seats Availabile</td>
                    <td><button  style={{ backgroundColor: (seats4=== 0) ? 'red' : 'orange' }} className='btn' onClick={bookOnClick4}>{(seats4 === 0) ? 'Seats Full' : 'Book Now'}</button></td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Monday May 03 2021</td>
                    <td>4:00pm-5:00pm</td>
                    <td>{seats5} seats Availabile</td>
                    <td><button  style={{ backgroundColor: (seats5 === 0) ? 'red' : 'orange' }} className='btn' onClick={bookOnClick5}>{(seats5 === 0) ? 'Seats Full' : 'Book Now'}</button></td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Monday May 03 2021</td>
                    <td>4:00pm-5:00pm</td>
                    <td>{seats6} seats Availabile</td>
                    <td><button  style={{ backgroundColor: (seats6 === 0) ? 'red' : 'orange' }} className='btn' onClick={bookOnClick6}>{(seats6 === 0) ? 'Seats Full' : 'Book Now'}</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Card