import { nanoid } from 'nanoid';

//Booking Card Data
export const arasResturantCardData = [
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/5yggcB7y/IMG-20240129-WA0076.jpg",
            "https://i.postimg.cc/VkGh08Fv/9.jpg",
            "https://i.postimg.cc/bvZBQB6T/8.jpg",
            "https://i.postimg.cc/MHq5rPYg/IMG-20240129-WA0075.jpg",
        ],
        title:"ARAS Restaurant KL Tower - Dinner Buffet",
        desc:"Make your special occasions more memorable by booking a window seat view and opting for the celebration setup, whole cake, and a flower bouquet.",
        type:"bookTypeOne",
        service:"aras-resturant",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:240,
                        child:142,
                        senior:142,
                    },
                    weekEnds:{
                        adult:240,
                        child:142,
                        senior:142,
                    },
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    weekDays:{
                        adult:240,
                        child:142,
                        senior:142,
                    },
                    weekEnds:{
                        adult:240,
                        child:142,
                        senior:142,
                    },
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["Entrance Tickets for Dinner Buffet"],
            exclusion:[
                "Parking",
            ]
        }
    },
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/TYwdzRhY/10.jpg",
            "https://i.postimg.cc/BQQbJT73/2.jpg",
            "https://i.postimg.cc/bvZBQB6T/8.jpg",
            "https://i.postimg.cc/R0c47hpG/13.jpg",
            "https://i.postimg.cc/ncPFZ6QK/15.jpg",
            "https://i.postimg.cc/MpfWGdyC/12.jpg"
        ],
        title:"ARAS Restaurant KL Tower - Tea Buffet",
        desc:"Make your special occasions more memorable by booking a window seat view and opting for the celebration setup, whole cake, and a flower bouquet.",
        type:"bookTypeTwo",
        service:"aras-resturant",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:105,
                        child:66,
                        senior:66,
                    },
                    weekEnds:{
                        adult:105,
                        child:66,
                        senior:66,
                    },
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    weekDays:{
                        adult:105,
                        child:66,
                        senior:66,
                    },
                    weekEnds:{
                        adult:105,
                        child:66,
                        senior:66,
                    },
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["Entrance Tickets for Tea Buffet"],
            exclusion:[
                "Parking",
            ]
        }
    },
]

//Why Visit
export const arasResturantWhyVistData = [
    {
        id: nanoid(),
        title: "Exceptional Dining Experience",
        desc:"Delight in a one-of-a-kind culinary journey as the restaurant gracefully revolves, presenting a captivating 360-degree panorama of Kuala Lumpur's city scape.",
        imgUrl:"https://i.postimg.cc/5yggcB7y/IMG-20240129-WA0076.jpg"
    },
    {
        id: nanoid(),
        title: "Enchanting Atmosphere",
        desc:"Immerse yourself in an interior design reminiscent of a futuristic spaceship, crafting a mesmerizing and unforgettable ambiance akin to dining amidst the celestial stars.",
        imgUrl:"https://i.postimg.cc/BQQbJT73/2.jpg"
    },
    {
        id: nanoid(),
        title: "Gastronomic Delights",
        desc:"Indulge in a sumptuous Hi-Tea Buffet prepared by culinary experts, showcasing the best of Malay cuisine with premium ingredients.",
        imgUrl:"https://i.postimg.cc/2yHz1t9D/9.jpg"
    },
    {
        id: nanoid(),
        title: "Culinary Excellence",
        desc:"Savor a delectable Hi-Tea Buffet meticulously crafted by skilled culinary artisans, showcasing the finest elements of Malay cuisine with premium, handpicked ingredients.",
        imgUrl:"https://i.postimg.cc/TYwdzRhY/10.jpg"
    },
]

//Highlights
export const arasResturantHighlighhtsData = [
    {
        id: nanoid(),
        desc:"Delight in glorious Buffets while floating above Kuala Lumpur's skyline, savoring a symphony of flavors with breathtaking views.",
        image: "https://i.postimg.cc/5yggcB7y/IMG-20240129-WA0076.jpg"
    },
    {
        id: nanoid(),
        desc:"Be mesmerized by the spaceship-themed décor as the restaurant gently revolves, creating an otherworldly ambiance like dining among the stars.",
        image: "https://i.postimg.cc/bvZBQB6T/8.jpg"
    },
    {
        id: nanoid(),
        desc:"Indulge in a culinary masterpiece crafted by expert chefs, where Malay delicacies showcase a harmonious blend of tradition and innovation.",
        image: "https://i.postimg.cc/L8XCpWMp/IMG-20240129-WA0079.jpg"
    },
    {
        id: nanoid(),
        desc:"Upgrade to window seating and unlock a dazzling perspective of the city, elevating your dining experience to unparalleled heights.",
        image: "https://i.postimg.cc/QNSNYB8y/11.jpg"
    },
    {
        id: nanoid(),
        desc:"Admire the exquisite interior design that fuses modern sophistication with celestial charm, creating an atmosphere that is both enchanting and sophisticated.",
        image: "https://i.postimg.cc/SNG3q82W/18.jpg"
    },
    {
        id: nanoid(),
        desc:"Experience unique celestial events with themed dining nights, creating unforgettable memories under the stars.",
        image: "https://i.postimg.cc/8PG9qw5p/15.jpg"
    },
]


//Additional Information

export const arasResturantAdditionInfoData = [
    {
        id: nanoid(),
        ques:"Child Policy",
        ans:[
            "Adult: 13 to 59 years old",
            "Child: 5 to 12 years old",
            "Senior citizen: 60 years old and above",
            "Child below 5 years old FREE"
        ]
    },
    {
        id: nanoid(),
        ques:"Operating Hours ?",
        ans:[
            "Hi-Tea: 3pm to 5:30pm",
            "Dinner: 6:30pm to 10pm",
            "Lunch: 11:30am to 2:30pm"
        ]
    },
    {
        id: nanoid(),
        ques:"Important Information",
        ans:[
            "Shorts and Slippers are prohibited.",
            "Recommend to make advanced reservations to confirm your preferred dining slot.",
            "Consider upgrading to window seat for better sky view(Subject to availability).",
            "Observe decorum and follow staff instruction for a pleasant visit.",
            "Remark about any dietary restrictions or allergies during booking.",
            "This is a Halal certified restaurant. Kindly take note, it is not suitable for Vegetarians as they serve Chickens, Eggs, Seafood and Meats"
        ]
    },
    {
        id: nanoid(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased."
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter."]
    },
]

//FAQ
export const arasResturantTourHomeFAQ = [
    {
        id: nanoid(),
        ques:"Should I make an advance reservation for ARAS Restaurant KL Tower ?",
        ans:["Highly Recommended, advance reservations are welcome to confirm your preferred dining slot."]
    },
    {
        id: nanoid(),
        ques:"How Can I request a window table at ARAS Restaurant KL Tower ?",
        ans:["Yes, you can request window Table during reservation/booking with extra charges."]
    },
    {
        id: nanoid(),
        ques:"What is dress code for guest at ARAS Restaurant KL Tower ?",
        ans:["Recommended smart casual attire and no sandals allowed."]
    },
    {
        id: nanoid(),
        ques:"The best time to visit ARAS Restaurant KL Tower ?",
        ans:["The Dinner dining will be ideal to witness the City of Light."]
    },
]