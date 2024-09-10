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
export const burjKhalifaWhyVistData = [
    {
        id: nanoid(),
        title:"Burj Khalifa",
        descList:[
            {
                id: nanoid(),
                title:"Stunning Views",
                desc:"The observation decks on the 148th and 125th floors provide breathtaking panoramic views of Dubai and beyond. On a clear day, you can see the vast desert, the Persian Gulf, and even neighboring countries.",
            },
            {
                id: nanoid(),
                title:"Architectural Marvel",
                desc:"As the tallest building in the world, the Burj Khalifa is a feat of modern engineering and design. Its sleek, futuristic design and advanced technology are fascinating to see up close.",
            },
            {
                id: nanoid(),
                title:"Sky High Experience",
                desc:" Standing at such a height offers a unique perspective of the city's layout and the sprawling urban landscape. It's an unforgettable experience to be so high above the ground.",
            },
            {
                id: nanoid(),
                title:"Dining and Luxury",
                desc:"The At.mosphere restaurant, located on the 122nd floor, offers fine dining with spectacular views. It's a great spot for a special meal or a memorable drink.",
            },
            {
                id: nanoid(),
                title:"Dubai Fountain",
                desc:"From the observation decks, you can watch the Dubai Fountain show, which is set in the artificial lake below the Burj Khalifa. The fountain performs daily with choreographed water displays set to music.",
            },
        ],
        imgUrl:"/assets/images/burjKhalifaWhyVisit.jpg"
    },
]

export const burjKhalifaPlanVisitData = [
    {
        id: nanoid(),
        title:"Timing",
        descList:[
            {
                id: nanoid(),
                title:"The Burj Khalifa's opening hours for its observation decks and other attractions are typically as follows",
                desc:"",
            },
            {
                id: nanoid(),
                title:"At the Top (125th Floor)",
                desc:"Daily: 8:30 AM to 11:00 PM.",
            },
            {
                id: nanoid(),
                title:"At the Top SKY (148th Floor)",
                desc:"Daily: 9:00 AM to 9:00 PM.",
            },
            {
                id: nanoid(),
                title:"Special Events",
                desc:"Hours may extend or vary during special events, holidays, or maintenance periods, so it's always a good idea to check in advance or consult the Burj Khalifa's official website for the most current information. Additionally, ticket availability and prices can also fluctuate based on the time of year and demand, so booking tickets in advance is recommended to secure your visit and avoid long wait times.",
            },
        ],
        imgUrl:"/assets/images/ayaUniverseVisitPlanTimingImg.avif"
    },
    {
        id: nanoid(),
        title:"Getting There",
        descList:[
            {
                id: nanoid(),
                title:"Location",
                desc:" Burj Khalifa, 1 Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai, UAE",
            },
            {
                id: nanoid(),
                title:"Nearest Metro",
                desc:"Burj Khalifa/Dubai Mall Metro Station",
            },
            {
                id: nanoid(),
                title:"Metro Line",
                desc:"Red Line",
            },
            {
                id: nanoid(),
                title:"Walking Distance",
                desc:"From the station, it's about a 10-15 minute walk to the Burj Khalifa. Follow the signs to The Dubai Mall and then proceed to the Burj Khalifa.",
            },
            {
                id: nanoid(),
                title:"By Taxi",
                desc:"Taxis are widely available throughout Dubai and can drop you off directly at the Burj Khalifa. It's a well-known landmark, so most drivers will be familiar with it.",
            },
            {
                id: nanoid(),
                title:"By Car",
                desc:"Parking: The Burj Khalifa has dedicated parking available in The Dubai Mall parking area. There are also several valet services offered at The Dubai Mall and at the Burj Khalifa itself.",
            },
        ],
        imgUrl:"/assets/images/ayaUniverseVisitPlanGettingThereImg.jpg"
    },
    {
        id: nanoid(),
        title:"Visiting Rules",
        descList:[
            {
                id: nanoid(),
                title:"Ticketing",
                desc:"Advance Booking It's recommended to book tickets in advance, especially for peak times and busy seasons, to avoid long queues and ensure availability.",
            },
            {
                id: nanoid(),
                title:"Timings",
                desc:"Follow the opening hours of the observation decks and other facilities. Check the Burj Khalifa's official website for any changes or special timings.",
            },
            {
                id: nanoid(),
                title:"Security Checks",
                desc:"Be prepared for security checks upon entry. Large bags and certain items might not be allowed, so it's best to travel light.",
            },
            {
                id: nanoid(),
                title:"Dress Code",
                desc:"While there is no strict dress code, smart casual attire is recommended. Avoid wearing inappropriate clothing, especially if you plan to visit the Atmosphere restaurant.",
            },
            {
                id: nanoid(),
                title:"Behavior",
                desc:"Maintain respectful behavior towards other visitors and staff. Loud noise and disruptive behavior are discouraged.",
            },
            {
                id: nanoid(),
                title:"Photography",
                desc:"Photography is generally allowed, but check for any restrictions, especially in sensitive areas or during specific events.",
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
                title:"The Dubai Mall",
                desc:" One of the largest shopping malls in the world, featuring over 1,200 retail stores, a wide range of dining options, an ice rink, a giant indoor aquarium, and an extensive range of entertainment options. ",
            },
            {
                id: nanoid(),
                title:"Dubai Fountain",
                desc:"The world's largest choreographed fountain system, offering stunning water shows set to music and lights. Shows typically run in the evenings and are a must-see",
            },
            {
                id: nanoid(),
                title:"Dubai Opera",
                desc:" A cultural and architectural landmark hosting a variety of performances including opera, ballet, concerts, and theater. The building's design is inspired by a traditional dhow boat.",
            },
            {
                id: nanoid(),
                title:"Dubai Aquarium and Underwater Zoo",
                desc:"One of the largest suspended aquariums in the world, featuring a diverse range of marine life and an underwater zoo. Visitors can walk through a 48-meter-long tunnel for 360-degree views.",
            },
        ],
        imgUrl:"/assets/images/burjKhalifaVisitPlanAttractionNearbyImg.jpg"
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
export const burjKhalifaHighlighhtsData = [
    {
        id: nanoid(),
        desc:"View Dubai from the tallest structure in the world.",
        image: "/assets/images/burjKhalifaHighlightsOne.jpg"
    },
    {
        id: nanoid(),
        desc:"Watch the sun set over the city from the observation deck.",
        image: "/assets/images/burjKhalifaHighlightsTwo.jpg"
    },
    {
        id: nanoid(),
        desc:"Find out more about the engineering and architecture that went into making this Middle Eastern icon.",
        image: "/assets/images/burjKhalifaHighlightsThree.jpg"
    },
]


//Additional Information

export const burjKhalifaAdditionInfoData = [
    {
        id: nanoid(),
        ques:"What is the best time to visit Burj Khalifa ?",
        ans:[
            "The best time to visit Burj Khalifa is definitely during sunset! Watching the sun set over Dubai's glittering skyline from high in the sky is an unmatched experience when in the city. However, this is also the busiest time of the day. If you want to avoid the crowds, it's best to plan your visit during early morning or late evenings on weekdays."
        ]
    },
    {
        id: nanoid(),
        ques:"How do I get to Level 148 of the Burj Khalifa ?",
        ans:[
            "Tickets for At The Top Burj Khalifa SKY will have to be purchased separately since a standard ticket does not grant entry to Level 148. Once you purchase this ticket, you will be taken up to At The Top, which is Levels 124 and 125, from where you would have to take a separate elevator to Level 148 (At The Top SKY)."
        ]
    },
    {
        id: nanoid(),
        ques:"Is storage facility available at Burj Khalifa ?",
        ans:[
            "Yes. Guests can store their bags and luggage in the storage area outside the entry to At The Top."
        ]
    },
    {
        id: nanoid(),
        ques:"Is Burj Khalifa wheelchair accessible ?",
        ans:[
            "Yes, the Burj Khalifa is completely wheelchair accessible. Elevators and ramps are in place for the ease of differently abled visitors."
        ]
    },
    {
        id: nanoid(),
        ques:"What can I do around Burj Khalifa?",
        ans:["The main attractions around the Burj Khalifa are the Dubai Mall, Dubai Aquarium, and Dubai Fountain."]
    },
]

//FAQ
export const burjKhalifaTourHomeFAQ = [
    {
        id: nanoid(),
        ques:"What is Burj Khalifa ?",
        ans:["Burj Khalifa is a towering skyscraper located in Dubai, United Arab Emirates. It holds the title of the tallest building in the world, standing at a height of 828 meters (2,717 feet). Completed in 2010, the Burj Khalifa is a marvel of modern engineering and design, featuring 163 floors above ground and 2 below.Its sleek, tapering design and impressive height make it an iconic symbol of Dubai's rapid growth and ambition."]
    },
    {
        id: nanoid(),
        ques:"Where can i buy Burj Khalifa tickets ?",
        ans:["You can buy Burj Khalifa tickets online and make bookings in advance to avoid waiting in long queues as well as a hassle-free-booking experience."]
    },
    {
        id: nanoid(),
        ques:"Where is Burj Khalifa located",
        ans:["Burj Khalifa, 1 Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai, UAE"]
    },
    {
        id: nanoid(),
        ques:"What are the Burj Khalifa timing ?",
        ans:[
            "At the Top (125th Floor) Daily: 8:30 AM to 11:00 PM",
            "At the Top SKY (148th Floor) Daily: 9:00 AM to 9:00 PM"
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your tickets/e-voucher at the counter."]
    },
]


export const burjKhalifaTopThingsToDo = [
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