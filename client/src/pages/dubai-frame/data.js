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
export const dubaiFrameWhyVistData = [
    {
        id: nanoid(),
        title:"Dubai Frame",
        descList:[
            {
                id: nanoid(),
                title:"Stunning views of the city skyline",
                desc:"The Dubai Frame offers 360-degree views of the city skyline, including the Burj Khalifa, the Dubai Mall, and the Arabian Gulf.",
            },
            {
                id: nanoid(),
                title:"Unique architectural structure",
                desc:"The Dubai Frame is a unique and iconic architectural structure that is shaped like a picture frame. It is one of the most popular tourist attractions in Dubai.",
            },
            {
                id: nanoid(),
                title:"Showcases Dubai's past, present, and future",
                desc:"The Dubai Frame is located in Zabeel Park, which is one of the oldest parks in Dubai. This location is symbolic of Dubai's past and present. The Dubai Frame itself is a symbol of Dubai's future, as it represents the city's ambitious plans for the future.",
            },
            {
                id: nanoid(),
                title:"Thrilling walk on the glass bridge",
                desc:"The 93-meter-long glass bridge that connects the two towers of the Dubai Frame offers visitors a truly unique and thrilling experience. Walking on the glass bridge gives you the feeling of walking on air, and it offers stunning views of the city below.",
            },
        ],
        imgUrl:"/assets/images/dubai-frame-dubaiFramWhyVisit.avif"
    },
]

//Highlights
export const dubaiFrameHighlighhtsData = [
    {
        id: nanoid(),
        desc:"The Old Dubai Gallery is situated on the mezzanine floor of the Dubai Frame. The gallery is an interactive exhibit that highlights Dubai's humble beginnings as a Bedouin fishing village.",
        image: "/assets/images/dubaiFrameHighlightsOne.avif"
    },
    {
        id: nanoid(),
        desc:"Present Dubai is the stunning skyline of the city that you see from the Sky deck level. Glass walls on all sides offer uninterrupted views of Dubai, “Old Dubai” to the north, and “New Dubai” to the south. ",
        image: "/assets/images/dubaiFrameHighlightsTwo.avif"
    },
    {
        id: nanoid(),
        desc:"Once you make your way back down the other arm of Dubai Frame, the Future Dubai Gallery exhibit awaits you on the mezzanine level. The gallery takes you on a futuristic journey with stunning visuals projected on the insides of a vortex tunnel.",
        image: "/assets/images/dubaiFrameHighlightsThree.avif"
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


export const dubaiFrameTopThingsToDo = [
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-burjkhalifaTicketTopThingsToDo.avif",
        title:"Burj Khalifa Ticket",
        linkUrl:"#"
    },
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-aquaventureticketTopThingsToDo.avif",
        title:"Aquaventure Tickets",
        linkUrl:"#"
    },
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-dubai-img-worlds-of-adventureTopThingsToDo.avif",
        title:"IMG Worlds of Adventure Tickets",
        linkUrl:"#"
    },
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-ski-dubaiTopThingsToDo.avif",
        title:"Ski Dubai Tickets",
        linkUrl:"#"
    },
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-dubai-desert-safariTopThingsToDo.avif",
        title:"Dubai Desert Safari Tour Tickets",
        linkUrl:"#"
    },
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-Museum-of-the-Future-Dubai-Tickets-TopThingsToDo.avif",
        title:"Museum of the Future Dubai Tickets",
        linkUrl:"#"
    },
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-dubai-attractions_aquariumsTopThingsToDo.avif",
        title:"Dubai Aquarium Tickets",
        linkUrl:"#"
    },
    {
        id:nanoid(),
        imageUrl:"/assets/images/dubai-frame-View-at-the-Palm-TopThingsToDo.avif",
        title:"View at the Palm Tickets",
        linkUrl:"#"
    },
]