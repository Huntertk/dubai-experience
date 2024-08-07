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
export const ayaUniverseWhyVistData = [
    {
        id: nanoid(),
        title:"Aya Universe",
        descList:[
            {
                id: nanoid(),
                title:"Cosmic Exploration",
                desc:"AYA Universe transcends the ordinary. It invites you to wander through wonder—a cosmic adventure where art, technology, and imagination collide.",
            },
            {
                id: nanoid(),
                title:"Art Meets Technology",
                desc:"AYA seamlessly blends art installations with cutting-edge technology. From light gardens to observatories, every room is a canvas of creativity.",
            },
            {
                id: nanoid(),
                title:"Starry Observatories",
                desc:"Command observatories filled with stars. Peer into the vastness of space, contemplate distant galaxies, and feel the awe of cosmic scale.",
            },
            {
                id: nanoid(),
                title:"Infinite Bridges and Light Gardens",
                desc:"Traverse bridges that bridge the infinite. Cross rivers where reality blurs into the surreal. Roam through gardens blooming with ethereal light—an enchanting fusion of nature and technology.",
            },
        ],
        imgUrl:"/assets/images/aya-universe-ayaUniverseWhyVisit.avif"
    },
]

export const ayaUniversePlanVisitData = [
    {
        id: nanoid(),
        title:"Timing",
        descList:[
            {
                id: nanoid(),
                title:"Opening hours",
                desc:"Sunday to Thursday: 10 AM to 10 PM (last entry 9 PM) & Friday & Saturday: 10 AM to 12 AM (last entry 11 PM)",
            },
            {
                id: nanoid(),
                title:"Best Time to Visit",
                desc:"Since AYA Universe is located indoors, you can visit this attraction any time of the year, even the off season. It is recommended to visit during the weekdays to avoid the crowds that flock to the attraction on weekends.",
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
                desc:"WAFI City - Oud Metha - Dubai - United Arab Emirates AYA Dubai First Floor, WAFI Mall, Oud Metha Road - Umm Hurair 2 Dubai, UAE",
            },
            {
                id: nanoid(),
                title:"By Metro",
                desc:"The Green Line goes straight to Dubai Healthcare Station, which is the closest station to WAFI City, just a 6-minute walk away from AYA Universe!",
            },
            {
                id: nanoid(),
                title:"By Car",
                desc:"You can reach Wafi City by taking a taxi or cab service from Sheikh Zayed Road. It takes 10 minutes to reach the location.",
            },
            {
                id: nanoid(),
                title:"Car parking",
                desc:"Use the WAFI valet parking service or Carrefour Parking to park on location.",
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
                title:"Dress code",
                desc:"Although there is no dress code for entry inside AYA Universe, visitors must dress in comfortable and modest clothing.",
            },
            {
                id: nanoid(),
                title:"Comfortable footwear",
                desc:"Wear comfortable shoes as the attraction requires you to walk throughout your visit.",
            },
            {
                id: nanoid(),
                title:"Outside food & beverages",
                desc:" Visitors are not permitted to bring outside food and beverages inside the park.",
            },
            {
                id: nanoid(),
                title:"Adult supervision",
                desc:"Children must be accompanied and supervised by an adult who will be responsible for their care and safety inside the park.",
            },
            {
                id: nanoid(),
                title:"Personal belongings",
                desc:"Carry your belongings and valuables with you at all times inside the park.",
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
                title:"Dubai Aquarium & Underwater Zoo",
                desc:"Dive into the glorious Dubai Aquarium, home to over 1000 marine species in 10 million liters of water.",
            },
            {
                id: nanoid(),
                title:"Dubai Frame",
                desc:" Get a stunning view of the Dubai Skyline from the top of the world’s largest picture frame!",
            },
            {
                id: nanoid(),
                title:"Burj Khalifa",
                desc:"Experience Dubai from above the tallest building in the world at the Burj Khalifa.",
            },
            {
                id: nanoid(),
                title:"Dubai Dolphinarium",
                desc:"Enjoy an unforgettable dolphin and seal show, as these amazing creatures perform incredible acts like juggling, singing, and dancing.",
            },
        ],
        imgUrl:"/assets/images/ayaUniverseVisitPlanAttractionNearbyImg.jpg"
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
export const ayaUniverseHighlighhtsData = [
    {
        id: nanoid(),
        desc:"With each step you take inside The River zone, your footsteps leave behind storms of colors, illuminating deep depths and distant dunes, unlocking a core memory for you!",
        image: "/assets/images/ayaUniverseHighlightsOne.avif"
    },
    {
        id: nanoid(),
        desc:"Inside The Pool, you are surrounded by immersive projections as you stand on top of an infinite vortex. With each, you will feel closer to the energies swirling around you.",
        image: "/assets/images/ayaUniverseHighlightsTwo.avif"
    },
    {
        id: nanoid(),
        desc:"Step into a mirrored chamber filled with pillars of infinite light and interact with a seven-minute show where you can wave your hands to create clouds of colors.",
        image: "/assets/images/ayaUniverseHighlightsThree.avif"
    },
]


//Additional Information

export const dubaiFrameAdditionInfoData = [
    {
        id: nanoid(),
        ques:"How do I get to the Dubai Frame?",
        ans:[
            "he Dubai Frame is located within Zabeel Park, along the jogging track.",
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


export const ayaUniverseTopThingsToDo = [
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