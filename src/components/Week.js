import Day from "./Day";

const Week = ({days}) => {
    const day_entries = days.map((day) => <Day date={day}/>)
    return (
        <div>
            {day_entries}
        </div>
    )
}

export default Week;