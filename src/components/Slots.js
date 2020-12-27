import React,{ useState } from 'react'
import './Slots.css'

const am_Slots = ["10:00:00","11:00:00"]
const pm_Slots = ["12:00:00","01:00:00","02:00:00","03:00:00","04:00:00"]

function Slots({ setSelectedTime }) {

    function handleClickAm(e){
        const copyTime = e.target.innerHTML+"AM"
        setSelectedTime(copyTime)

    }

    function handleClickPm(e){
        const copyTime = e.target.innerHTML+"PM"
        setSelectedTime(copyTime)
    }

    return (
        <div className="slotZone">
            <div className="AM">AM:<br/>
            {
                am_Slots.map(val=>(
                <div className="slots" onClick={handleClickAm} >{val}</div>
                ))
            }</div>
            <div className="PM">PM:<br/>
            {
                pm_Slots.map(val=>(
                <div className="slots" onClick={handleClickPm} >{val}</div>
                ))
            
            }</div>
            
        </div>
    )
}

export default Slots
