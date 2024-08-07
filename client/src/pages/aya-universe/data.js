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

export const ayaUniverseAdditionInfoData = [
    {
        id: nanoid(),
        ques:"What is AYA Universe ?",
        ans:[
            "AYA Universe Dubai is a one-of-a-kind entertainment park offering its guest an immersive experience filled with a unique combination of art and technology. The park offers twelve themed zones, each designed uniquely for an extraordinary experience."
        ]
    },
    {
        id: nanoid(),
        ques:"Where can I buy AYA Universe tickets ?",
        ans:[
            "You can buy AYA Universe tickets online and make bookings in advance to avoid waiting in long queues as well as a hassle-free booking experience. Make the most of the online booking experience by opting for skip-the-line tickets and combo tickets with great discounts and offers!"
        ]
    },
    {
        id: nanoid(),
        ques:"Where is AYA Universe located ?",
        ans:[
            "AYA Universe is located on level one of Wafi City Mall's Main Atrium in Dubai. The official address is - WAFI City - Oud Metha - Dubai - United Arab Emirates."
        ]
    },
    {
        id: nanoid(),
        ques:"What are the AYA Universe timings ?",
        ans:[
            "AYA Universe is open from 10 AM to 10 PM from Sunday to Thursday, and 10 AM to 12 AM on Friday and Saturday."
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter."]
    },
]

//FAQ
export const ayaUniverseTourHomeFAQ = [
    {
        id: nanoid(),
        ques:"What's the best time to visit AYA Universe ?",
        ans:["It is best to visit AYA Universe on weekdays and early mornings to avoid peak crowds. You can visit AYA Universe during the off-season summer months as well since it is located indoors!"]
    },
    {
        id: nanoid(),
        ques:"Can I leave my children alone inside AYA Universe ?",
        ans:["No, children must be supervised at all times at AYA Universe by an adult who is responsible for their safety and care."]
    },
    {
        id: nanoid(),
        ques:"Is there parking space inside AYA Universe ?",
        ans:["Yes, there is valet parking service available inside Wafi City."]
    },
    {
        id: nanoid(),
        ques:"Are food and beverages allowed inside AYA Universe ?",
        ans:["Outside food and beverages are not allowed, but AYA Universe offers a variety of dining options."]
    },
    {
        id: nanoid(),
        ques:"What type of restaurants does AYA Universe offer ?",
        ans:["AYA Universe features diverse restaurants, including international cuisines and themed dining experiences."]
    },
    {
        id: nanoid(),
        ques:"Are strollers and wheelchairs available inside AYA Universe ?",
        ans:["Yes, strollers and wheelchairs are available inside AYA Universe."]
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