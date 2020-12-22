import React, { useEffect, useState } from 'react';



const Stopwatch = () => {

    // Time hér inniheldur tímann sem við viljum vista í postgres
    // hann er talinn í sekúndum enn við viljum svo sína hann í 
    // hours:minutes:seconds formatti

    const [time, setTime] = useState(0)
    const [timerOn, setTimeOn] = useState(false)

    useEffect(()=>{
        let interval = null
            
        if(timerOn){
            interval = setInterval(()=>{
                setTime(prevTime => prevTime +1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])

    const totalTimeSaved = time;
    
    return(
        <div>
            <header>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            </header>
            <h3 class="text-center">Stopwatch</h3>
            <h1 class="text-center">
                <span>
                    {("0" + Math.floor(time / 3600) % 24).slice(-2)}
                    :
                </span>
                <span>
                    {("0" + Math.floor(time / 60) % 60).slice(-2)}
                    :
                </span>
                <span>
                    {("0" + (time) % 60).slice(-2)}
                </span>
            </h1>
            <div class="text-center d-flex">
                {!timerOn && time == 0 && (
                    <button 
                        class="btn btn-primary flex-fill"
                        onClick={()=> setTimeOn(true)}
                    > Start</button>
                )}
                {timerOn && (
                    <button 
                        class="btn btn-danger flex-fill"
                        onClick={()=> setTimeOn(false)}
                    >Stop</button>
                )}
                {!timerOn && time > 0 && (
                    <button 
                        class="btn btn-primary flex-fill"
                        onClick={()=> setTimeOn(true)}
                    >Resume</button>
                )}
                {!timerOn && time > 0 && (
                    <button 
                        class="btn btn-outline-success flex-fill"
                        onClick={()=> setTime(0)}
                    >Reset</button>
                )}
            </div>
        </div>
    )
}
    

export default Stopwatch;