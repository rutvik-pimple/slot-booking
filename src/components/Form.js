import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Slots from './Slots'
import './Form.css'
import fireDb from '../firebase.js'

function Form() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const [selectedTime, setSelectedTime] = useState(null)

    function handleChange(e){
        const tempDate = e
        const date = new Date()
        console.log(tempDate,date.toLocaleDateString(),Date.parse(tempDate) >= Date.parse(date.toLocaleDateString()))
        if (Date.parse(tempDate) > Date.parse(date.toLocaleDateString())){
            setSelectedDate(tempDate)
            setErrorMessage("")
        }else{
            setSelectedDate(null)
            setErrorMessage("Date not available")
        }
    }

    function addToDb(){
        const dateTime = `${selectedDate.toLocaleDateString().replace("/","-").replace("/","-")}T${selectedTime}`
        let obj;

        fireDb.child('bookings').on('value',snapshot=>{
            if (snapshot.val()!=null){
                obj = snapshot.val()
            }
            
        })
        let flag = true
        if (obj){
            const arr = Object.keys(obj)
            for (let i=0; i<arr.length;i++ ){
                if (obj[arr[i]] === dateTime){
                    flag = false
                    setErrorMessage("Slot is already booked, try another slot")
                    break
                }
            }
        }
        
        // console.log(arr)
        
        if (flag){
            fireDb.child('bookings').push(dateTime,err=>{
                console.log(err)
            })
            setErrorMessage("Slot is succefully booked")
        }

    }


    return (
        <div className="Form">
        <div>
            {"Appointment Date:"}
            <DatePicker
            className="date" 
            selected={selectedDate} 
            onChange={handleChange}
            minDate={new Date()} 
            filterDate={date => date.getDay()!== 6 && date.getDay()!==0}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            /><br/>
            {selectedDate ? (
                <button className="btn" onClick={addToDb} >Select Slot</button>
            ):(null)}
        </div>
            <div className="error" >{errorMessage}</div>
            {selectedDate ? (
                <Slots setSelectedTime={setSelectedTime}/>
            ):(null)}
            
        </div>
    )
}

export default Form
