import React from 'react';
import { useState } from 'react'
import './Age-cal.css'


const Agecal = () => {
    const [birthday, setbirthday] = useState('')
    const [result ,setresult] = useState({ years: 0, months: 0, days: 0 })
    const handlechange = (e) => {
        setbirthday(e.target.value)
        console.log(birthday)
    }
   
    const now = new Date();
    const yearNow = now.getYear();
    const monthNow = now.getMonth();
    const dateNow = now.getDate();
    const dob = new Date(birthday);
    const yearDob = dob.getYear();
    const monthDob = dob.getMonth();
    const dateDob = dob.getDate();
    let yearAge = yearNow - yearDob;
    var monthAge = '';
    var dateAge = '';



    let handleage = () => {





        // let ageString = "";
        // let yearString = "";
        // let monthString = "";
        // let dayString = "";


        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            monthAge = 12 + monthNow - monthDob;
        }

        if (dateNow >= dateDob) {
            var dateAge = dateNow - dateDob;
        } else {
            monthAge--;
            dateAge = 31 + dateNow - dateDob;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }

        setresult({
            years: yearAge,
            months: monthAge,
            days: dateAge,

        });

        

        
    }

    return (
        <div>
            <main>
                <header>
                    <h1>JavaScript</h1>
                    <h1>Age Calculator</h1>
                </header>
                <section>
                    <input type="date"
                        value={birthday}
                        onChange={handlechange}
                        id="dob" />
                    <button id="calculate-age" onClick={(e) => handleage()}>Calculate</button>
                </section>
                <footer>
                <p id="age">{`Your age is: ${result.years} years, ${result.months} months, and ${result.days} days`}</p>
                    </footer>
            </main>
        </div>

    )
}
export default Agecal