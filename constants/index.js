const appName = "Hostlr"

const sidebar = {
    elementOne : {
        imgUrl : "/images/sidebar/dashboard.svg",
        textContent : "Dashboard"
    },
    elementTwo : {
        imgUrl : "/images/sidebar/fees.svg",
        textContent : "Fees"
    },
    elementThree : {
        imgUrl : "/images/sidebar/grocery.svg",
        textContent : "Grocery"
    },
    elementFour : {
        imgUrl : "/images/sidebar/rooms.svg",
        textContent : "Rooms"
    },
    elementFive : {
        imgUrl : "/images/sidebar/students.svg",
        textContent : "Students"
    },
}

const logoHeader = {
    imgUrl : "/images/sidebar/logo.png",
    textContent : "Hostlr"
}

const adminTopCards = [
    {
        cardHeader : "Fees Collected",
        cardValue : 10000,
        cardName : "TopCardOne",
        cardIcon : "/images/topCards/fees_collected.svg"
    },
    {
        cardHeader : "Fees Pending",
        cardValue : 10000,
        cardName : "TopCardTwo",
        cardIcon : "/images/topCards/fees_pending.svg"
    },
    {
        cardHeader : "Total Students",
        cardValue : 900,
        cardName : "TopCardThree",
        cardIcon : "/images/topCards/total_students.svg"
    },
    {
        cardHeader : "Total Students",
        cardValue : 900,
        cardName : "TopCardFour",
        cardIcon : "/images/topCards/total_students.svg"
    }
]


export { sidebar , logoHeader, appName ,adminTopCards };