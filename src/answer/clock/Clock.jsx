import React, {useEffect, useState} from "react";

function Clock() {
    const [nowTime, setNowTime] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => setNowTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = String(nowTime.getHours()).padStart(2, "0");
    const minutes = String(nowTime.getMinutes()).padStart(2, "0");
    const seconds = String(nowTime.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    return (
        <div>
            <time>
                {timeString}
            </time>
        </div>
    );
}

export default Clock;