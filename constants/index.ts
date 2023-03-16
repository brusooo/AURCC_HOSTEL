const appName : String = "Hostlr"

const sidebar : Object = {
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

const logoHeader : Object = {
    imgUrl : "/images/sidebar/logo.png",
    textContent : "Hostlr"
}

const adminTopCards : Array<Object> = [
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

const checkBoxValues : Array<String> = [
    "ALL", 
    "CSE",
    "ECE",
    "MECH",
    "EEE",
    "MBA",
    "AI & DS"
]

const studentDetails : Array<Object> = [
    {
        name : "Jenifar",
        department : "CSE",
        email : "jeni@gmail.com",
        mobile : "7979797979",
        feeStatus : "Paid"

    },
    {
        name : "Jenifar",
        department : "ECE",
        email : "jeni@gmail.com",
        mobile : "7979797979",
        feeStatus : "Pending"

    },
    {
        name : "Jenifar",
        department : "EEE",
        email : "jeni@gmail.com",
        mobile : "7979797979",
        feeStatus : "Pending"

    },
    {
        name : "Jenifar",
        department : "MECH",
        email : "jeni@gmail.com",
        mobile : "7979797979",
        feeStatus : "Paid"

    },
    {
        name : "Jenifar",
        department : "AI & DS",
        email : "jeni@gmail.com",
        mobile : "7979797979",
        feeStatus : "Pending"

    }
]


export { sidebar , logoHeader, appName ,adminTopCards, checkBoxValues, studentDetails };