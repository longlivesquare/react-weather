const DayOfWeek = ({ utcTime }) => {
    const day = new Date(utcTime*1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return (
        <>
            {days[day.getDay()]}
        </>
    )
}

export default DayOfWeek;