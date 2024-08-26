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
export const lostChambersWhyVistData = [
    {
        id: nanoid(),
        title:"Lost Chambers Aquarium",
        descList:[
            {
                id: nanoid(),
                title:"Themed Exhibits",
                desc:"The aquarium's design is based on the story of Atlantis, a legendary underwater city. The architecture and theming create the illusion of exploring the ruins of this ancient, submerged civilization. ",
            },
            {
                id: nanoid(),
                title:"Marine Life",
                desc:"The Lost Chambers is home to a diverse range of marine species, including rays,sharks, and various types of fish. The exhibits are designed to mimic natural habitats and provide educational information about the marine life on display.",
            },
            {
                id: nanoid(),
                title:"Interactive Experiences",
                desc:"Visitors can enjoy a range of interactive activities, such as touch tanks where they can get up close with certain species, and educational talks that provide insights into marine biology and conservation. ",
            },
            {
                id: nanoid(),
                title:"Aquatic Adventures",
                desc:"For those looking for a more hands-on experience, the aquarium offers unique activities like snorkeling and diving experiences, allowing guests to explore the underwater environments more closely.",
            },
            {
                id: nanoid(),
                title:"Design and Atmosphere",
                desc:" The aquarium's design features intricate details that reflect the grandeur and mystery of the legendary Atlantis. Visitors can wander through tunnels and view large tanks that create the impression of being within the ancient city's ruins.",
            },
        ],
        imgUrl:"/assets/images/lost-chambers-lostChambersWhyVisit.jpg"
    },
]

export const dubaiFramePlanVisitData = [
    {
        id: nanoid(),
        title:"Timing",
        descList:[
            {
                id: nanoid(),
                title:"Opening hours",
                desc:"Typically open from 10:00 AM to 10:00 PM. However, hours can vary, especially during peak seasons or special events, so it's a good idea to check the official website or contact the attraction for the most up-to-date information before your visit.",
            },
            {
                id: nanoid(),
                title:"Best Time to Visit on Weekdays",
                desc:"Visiting on weekdays, especially Tuesday through Thursday, can be less crowded compared to weekends, providing a more relaxed experience. ",
            },
            {
                id: nanoid(),
                title:"Morning",
                desc:"Arriving early, right when the aquarium opens, often means fewer crowds and a more leisurely exploration.",
            },
            {
                id: nanoid(),
                title:"Avoiding Peak Times",
                desc:"Weekends, public holidays, and school vacation periods can be busier. If you prefer a quieter visit, try to avoid these peak times.",
            },
        ],
        imgUrl:"/assets/images/lostChambersVisitPlanTimingImg.jpg"
    },
    {
        id: nanoid(),
        title:"Getting There",
        descList:[
            {
                id: nanoid(),
                title:"Location",
                desc:" Atlantis The Palm Crescent Road, Palm Jumeirah, Dubai, United Arab Emirates.",
            },
            {
                id: nanoid(),
                title:"By Car",
                desc:"You can drive to Atlantis The Palm, there is ample parking available at the resort.",
            },
            {
                id: nanoid(),
                title:"By Taxi",
                desc:"Taxis are a convenient option and are readily available throughout Dubai. Simply provide the driver with the resort's address.",
            },
            {
                id: nanoid(),
                title:"By Metro and Shuttle",
                desc:"While there's no direct metro line to Atlantis, you can take the Dubai Metro to the nearest station and then use a taxi or shuttle service to reach the resort.",
            },
            {
                id: nanoid(),
                title:"By Tram and Monorail",
                desc:"The Dubai Tram connects to the Dubai Metro, and you can transfer to the Palm Jumeirah Monorail, which connects to Atlantis The Palm.",
            },
        ],
        imgUrl:"/assets/images/lostChambersVisitPlanGettingThereImg.jpg"
    },
    {
        id: nanoid(),
        title:"Visiting Rules",
        descList:[
            {
                id: nanoid(),
                title:"Purchase Tickets",
                desc:"Tickets should be purchased in advance where possible, either online or at the entrance. Keep your ticket handy for inspection.",
            },
            {
                id: nanoid(),
                title:"Valid Identification",
                desc:"Bring valid ID if required, especially for discounted tickets or special promotions.",
            },
            {
                id: nanoid(),
                title:"Dress Code",
                desc:"While casual attire is generally acceptable, swimming attire is not allowed unless you're participating in specific aquatic activities. Comfortable, weather-appropriate clothing and footwear are recommended.",
            },
            {
                id: nanoid(),
                title:"Health Precautions",
                desc:"Follow any health and safety guidelines in place, such as wearing masks or using hand sanitizers if required.",
            },
            {
                id: nanoid(),
                title:"Respect the Environment",
                desc:"Do not touch or tap on the aquarium glass or disturb the marine life. Follow instructions from staff regarding interaction with exhibits.",
            },
        ],
        imgUrl:"/assets/images/ayaUniverseVisitPlanVisitingRulesImg.jpg"
    },
    {
        id: nanoid(),
        title:"Attractions Nearby",
        descList:[
            {
                id: nanoid(),
                title:"Aquaventure Waterpark",
                desc:"One of Dubai's largest and most popular waterparks, featuring thrilling slides, a lazy river, and a private beach. Location Within Atlantis The Palm.",
            },
            {
                id: nanoid(),
                title:"Dolphin Bay",
                desc:" Offers interactive experiences with dolphins, including swimming and playing with these marine mammals in a controlled environment. Location Within Atlantis The Palm.",
            },
            {
                id: nanoid(),
                title:"Atlantis The Palm Resort",
                desc:"The resort itself has numerous amenities, including fine dining restaurants, luxury shopping, and an impressive lobby area with aquatic-themed decor. Location Within Atlantis The Palm complex.",
            },
            {
                id: nanoid(),
                title:"The Pointe",
                desc:" A waterfront dining and entertainment destination with a variety of restaurants, shops, and views of the Atlantis The Palm. Location On Palm Jumeirah, a short drive from the resort",
            },
        ],
        imgUrl:"/assets/images/lostChambersVisitPlanAttractionNearbyImg.jpg"
    },
    {
        id: nanoid(),
        title:"Visitors Tips",
        descList:[
            {
                id: nanoid(),
                title:"Book",
                desc:"your tickets in advance",
            },
            {
                id: nanoid(),
                title:"Arrive",
                desc:"early.",
            },
            {
                id: nanoid(),
                title:"Wear",
                desc:"comfortable clothing and shoes.",
            },
            {
                id: nanoid(),
                title:"Bring",
                desc:"a water bottle.",
            },
            {
                id: nanoid(),
                title:"Be respectful",
                desc:"of the local culture and environment.",
            },
            {
                id: nanoid(),
                title:"Visit the",
                desc:"Future Zone",
            },
        ],
        imgUrl:"/assets/images/dubaiFrameVisitPlanAttractionVisitorTipsImg.avif"
    },
]

//Highlights
export const lostChambersHighlightsData = [
    {
        id: nanoid(),
        desc:"One of the world's largest suspended aquariums, featuring a diverse range of marine life including sharks and rays. Immersive design inspired by the mythical lost city of Atlantis, with elaborate ruins and atmospheric elements. ",
        image: "/assets/images/lostChambersHighlightsOne.webp"
    },
    {
        id: nanoid(),
        desc:"Touch pools for hands-on learning and interactive displays to engage visitors with marine life. Options for snorkeling and diving in the Ambassador Lagoon, plus behind-the-scenes tours.",
        image: "/assets/images/lostChambersHighlightsTwo.jpg"
    },
    {
        id: nanoid(),
        desc:"Engaging activities and educational programs suitable for visitors of all ages. Focus on marine conservation and environmental education.",
        image: "/assets/images/lostChambersHighlightsThree.jpg"
    },
]


//Additional Information

export const dubaiFrameAdditionInfoData = [
    {
        id: nanoid(),
        ques:"How do I get to the Dubai Frame?",
        ans:[
            "Dubai Frame is located within Zabeel Park, along the jogging track.",
            "You can get to the Dubai Frame by metro, bus, or car.",
            "Take the F09 bus, it'll take you right outside Zabeel Park.",
            "The Al Jafiliya Metro Station on the Red Line is right outside Zabeel Park and just a few minutes on foot from the Dubai Frame."
        ]
    },
    {
        id: nanoid(),
        ques:"When should I visit the Dubai Frame ?",
        ans:[
            "Dubai Frame timings are 9:00 AM to 9:00 PM every day of the week, with final entry at 8:30 PM. If you want to avoid crowds, the best time to visit is early morning or late evening on weekdays. However, if you don't wish to groups, the best time is definitely during sunset to enjoy the view of the city bathed in sunlight."
        ]
    },
    {
        id: nanoid(),
        ques:"How long does it take to visit the Dubai Frame ?",
        ans:[
            "It takes about 1-2 hours to visit the Dubai Frame, depending on how much time you spend at each exhibit."
        ]
    },
    {
        id: nanoid(),
        ques:"Is the Dubai Frame accessible for people with disabilities ?",
        ans:[
            "Yes, the Dubai Frame is accessible for people with disabilities. There are ramps and elevators throughout the attraction."
        ]
    },
    {
        id: nanoid(),
        ques:"Can I bring food and drinks into the Dubai Frame ?",
        ans:[
            "No, food and drinks are not allowed inside the Dubai Frame."
        ]
    },
    {
        id: nanoid(),
        ques:"Can I take pictures at the Dubai Frame ?",
        ans:[
            "Yes, you are allowed to take pictures at the Dubai Frame."
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter."]
    },
]

//FAQ
export const dubaiFrameTourHomeFAQ = [
    {
        id: nanoid(),
        ques:"What are the opening hours of the Dubai Frame ?",
        ans:["The Dubai Frame is open daily from 9:00 AM to 9:00 PM."]
    },
    {
        id: nanoid(),
        ques:"Where can I buy Dubai Frame Tickets ?",
        ans:["Tickets can be purchased online at the Dubai Frame website or the ticket office at the Dubai Frame. You can book Online through Headout, where tickets for anyone above 12 cost AED 50, whereas children between 3 and 12 have to pay only AED 25. If you are visiting the Dubai Frame in a big group, you can opt for the Super Save Packs, which offer even more discounts on your tickets."]
    },
    {
        id: nanoid(),
        ques:"How much do tickets to the Dubai Frame cost ?",
        ans:["We have General Admission Tickets starting from AED 50 for anyone above 12. Tickets for children between the ages of 3 and 12 are also discounted and are available for AED 25. If you are booking two or more adult tickets, you can opt for the Super Save Pack, where the Tickets are for AED 48."]
    },
    {
        id: nanoid(),
        ques:"What is the cancelation policy for Dubai Frame tickets ?",
        ans:["These tickets can't be canceled or rescheduled."]
    },
]


export const lostChambersTopThingsToDo = [
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