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
                title:"Stunning Panoramic Views",
                desc:"The Dubai Frame offers breathtaking 360-degree views of the city, allowing visitors to see both the modern skyline, including the Burj Khalifa, and the historic districts of Deira and Karama from a unique vantage point.",
            },
            {
                id: nanoid(),
                title:"Architectural Marvel",
                desc:"Standing at 150 meters tall and 93 meters wide, the Dubai Frame is an impressive feat of modern architecture. Its distinctive design, resembling a giant picture frame, is both visually striking and symbolically significant.",
            },
            {
                id: nanoid(),
                title:"Sky Deck Experience",
                desc:"The Sky Deck at the top of the frame provides an exhilarating experience with a glass-bottomed walkway, offering a thrilling view straight down to the ground 150 meters below. This feature adds an adventurous element to your visit.",
            },
            {
                id: nanoid(),
                title:"Interactive Museums",
                desc:"The ground floor of the Dubai Frame features an interactive museum that showcases Dubai's evolution from a small fishing village to a global metropolis. The multimedia exhibits provide an engaging and educational experience about the city's history and future.",
            },
        ],
        imgUrl:"/assets/images/dubai-frame-dubaiFramWhyVisit.avif"
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
                desc:"9:00 AM to 9:00 PM Last time of entry is 8:30 PM, 30 minutes before closing. Timings may vary during Ramadan.",
            },
            {
                id: nanoid(),
                title:"Best Time to Visit",
                desc:"If you're looking for the best view from the top, you should visit during sunset to experience the golden light settling over the city. However, this is also when the frame is most crowded. If you want to avoid crowds, visiting during early mornings or late evenings on weekdays is best.",
            },
        ],
        imgUrl:"/assets/images/dubaiFrameVisitPlanTimingImg.avif"
    },
    {
        id: nanoid(),
        title:"Getting There",
        descList:[
            {
                id: nanoid(),
                title:"Location",
                desc:"Dubai Frame is located in Zabeel Park gate 4 in Dubai.",
            },
            {
                id: nanoid(),
                title:"Closest Metro Station",
                desc:"Al Jafiliya stop on the Red line.",
            },
            {
                id: nanoid(),
                title:"Closest Bus Stop",
                desc:"Bus F09 stops at the Dubai Frame bus stop, right next to the building.",
            },
        ],
        imgUrl:"/assets/images/dubaiFrameVisitPlanGettingThereImg.avif"
    },
    {
        id: nanoid(),
        title:"Visiting Rules",
        descList:[
            {
                id: nanoid(),
                title:"Admission",
                desc:"Infants under the age of 3 get free access, while children aged 3-12 are charged AED 20 for a ticket rather than AED 50 for those over 12.",
            },
            {
                id: nanoid(),
                title:"Storage Facilities",
                desc:"A counter at Gate 4 allows storage for large bags and strollers.",
            },
            {
                id: nanoid(),
                title:"Rules of Visitation",
                desc:"bar tourists from carrying Food, beverages, pets, sharp tools, and smoking inside the Dubai Frame precincts.",
            },
        ],
        imgUrl:"/assets/images/dubaiFrameVisitPlanVisitingRulesImg.avif"
    },
    {
        id: nanoid(),
        title:"Attractions Nearby",
        descList:[
            {
                id: nanoid(),
                title:"Dubai Frame",
                desc:"is close to some of the most impressive attractions in Dubai — Burj Khalifa, IMG Worlds of Adventure, Dubai Garden Glow, and Dubai Aquarium & Underwater Zoo.",
            },
            {
                id: nanoid(),
                title:"Walking Distance",
                desc:"The closest attraction you can walk to is the Dubai Garden Glow, a 15-minute walk from Dubai Frame.",
            },
            {
                id: nanoid(),
                title:"Zabeel Park",
                desc:"has dedicated jogging paths, barbecue & picnic areas, and a children's play park.",
            },
        ],
        imgUrl:"/assets/images/dubaiFrameVisitPlanAttractionNearbyImg.avif"
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
export const dubaiFrameHighlighhtsData = [
    {
        id: nanoid(),
        desc:"The Dubai Frame serves as a symbol of Dubai's rapid development and visionary growth. It represents the city's ability to merge its traditional past with a modern and innovative future, making it a significant cultural landmark.",
        image: "/assets/images/dubaiFrameHighlightsOne.avif"
    },
    {
        id: nanoid(),
        desc:"Located in Zabeel Park, one of Dubai's largest and most popular parks, the Dubai Frame is easily accessible and offers visitors the opportunity to explore the park's other attractions, such as its gardens, playgrounds, and picnic areas.",
        image: "/assets/images/dubaiFrameHighlightsTwo.avif"
    },
    {
        id: nanoid(),
        desc:"The Dubai Frame is built with sustainability in mind, incorporating energy-efficient materials and technologies. This commitment to environmental responsibility aligns with Dubai's broader efforts to promote green building practices.",
        image: "/assets/images/dubaiFrameHighlightsThree.avif"
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