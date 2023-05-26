const sidebar : Object = {
    elementOne : {
        imgUrl : "/images/sidebar/dashboard.svg",
        textContent : "Dashboard"
    },
    // elementTwo : {
    //     imgUrl : "/images/sidebar/fees.svg",
    //     textContent : "Fees"
    // },
    // elementThree : {
    //     imgUrl : "/images/sidebar/grocery.svg",
    //     textContent : "Grocery"
    // },
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



const studentTransactionDetails : Array<Object> = [
    {
        sem : 1,
        amount : 15000,
        status : "paid"
    },
    {
        sem : 2,
        amount : 15000,
        status : "paid"
    },
    {
        sem : 3,
        amount : 15000,
        status : "pending"
    },
    {
        sem : 4,
        amount : 15000,
        status : "paid"
    },

    {
        sem : 5,
        amount : 15000,
        status : "pending"
    },
    {
        sem : 6,
        amount : 15000,
        status : "paid"
    },
    {
        sem : 7,
        amount : 15000,
        status : "pending"
    },
    {
        sem : 8,
        amount : 15000,
        status : "pending"
    },
]

//Rathish

const roomGenderValues :Array<String> =[
    "Boys",
    "Girls"
]

const student : Array<object>=[
   
    {
        CardName :"xyz",
        cardEmail:"xyz@yahoo.com",
        cardIcon :"/images/general/profile1.png"
    },
    {
        CardName :"xyz",
        cardEmail:"xyz@gmail.com",
        cardIcon :"/images/general/profile1.png"
    },
    {
        CardName :"xyz",
        cardEmail:"xyz@protonmail",
        cardIcon :"/images/general/profile1.png"
    },
    {
        CardName :"xyz",
        cardEmail:"xyz@rediffmail",
        cardIcon :"/images/general/profile1.png"
    }, 


]

const roomsCards: Array<object>=[
    {
    cardValue:101,
    cardName:"room1"
    },
    {
    cardValue:102,
    cardName:"room2"
    },
    {
    cardValue:103,
    cardName:"room3"
    },
    {
    cardValue:104,
    cardName:"room4"
    },
    {
    cardValue:105,
    cardName:"room5"
    }



]
const studentRoomCards : Array<Object> = [
    {
    cardHeader:"Total:",
    cardValue: 1500,
    cardName: "roomsCard1"
    },
    {
    cardHeader:"Boys:",
    cardValue: 750,
    cardName: "roomsCard2",
    },
    {
    cardHeader:"Girls:",
    cardValue: 750,
    cardName: "roomsCard3"
    
    }
]

export { sidebar , logoHeader, adminTopCards, checkBoxValues,roomGenderValues, studentTransactionDetails,studentRoomCards,roomsCards,student};