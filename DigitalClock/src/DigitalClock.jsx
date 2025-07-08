import React,{useState, useEffect} from 'react'

export default function DigitalClock() {
    const [time,setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function formatTime(date) {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds =  time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

  return (
    <div className="clock-container">
        <div className="clock">
        <span>{formatTime()}</span>
        </div>
    </div>
  )
}
