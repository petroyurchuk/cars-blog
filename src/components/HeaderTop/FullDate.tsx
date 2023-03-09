type Props = {}
const FullDate = (props: Props) => {
    function formatDate(date: Date): string {
        const weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]
        const day = date.getDate()
        const year = date.getFullYear()
        const weekday = weekdays[date.getDay()]
        const month = months[date.getMonth()]
        return `${weekday}, ${month} ${day}, ${year}`
    }
    const today = new Date()
    const formattedDate = formatDate(today)

    return (
        <div className="full-date-wrapper">
            <span className="full-date-output">{formattedDate}</span>
        </div>
    )
}
export default FullDate
