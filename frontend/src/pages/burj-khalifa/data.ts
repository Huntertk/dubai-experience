import {  TypeFAQAndAdditionQuestion, TypeTopThingsToDo, TypeTourHighlights, TypeTourWhyVisitAndTourVisitPlan } from "../../utils/type";
import { nanoid } from 'nanoid';


//Top Things to do
export const burjKhalifaTopThingsToDo:TypeTopThingsToDo[] = [
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




//Why Visit
export const burjKhalifaWhyVistData:TypeTourWhyVisitAndTourVisitPlan[] = [
    {
        id: nanoid(),
        title:"Burj Khalifa",
        descriptions:[
            {
                id: nanoid(),
                title:"Stunning Views",
                description:"The observation decks on the 148th and 125th floors provide breathtaking panoramic views of Dubai and beyond. On a clear day, you can see the vast desert, the Persian Gulf, and even neighboring countries.",
            },
            {
                id: nanoid(),
                title:"Architectural Marvel",
                description:"As the tallest building in the world, the Burj Khalifa is a feat of modern engineering and design. Its sleek, futuristic design and advanced technology are fascinating to see up close.",
            },
            {
                id: nanoid(),
                title:"Sky High Experience",
                description:" Standing at such a height offers a unique perspective of the city's layout and the sprawling urban landscape. It's an unforgettable experience to be so high above the ground.",
            },
            {
                id: nanoid(),
                title:"Dining and Luxury",
                description:"The At.mosphere restaurant, located on the 122nd floor, offers fine dining with spectacular views. It's a great spot for a special meal or a memorable drink.",
            },
            {
                id: nanoid(),
                title:"Dubai Fountain",
                description:"From the observation decks, you can watch the Dubai Fountain show, which is set in the artificial lake below the Burj Khalifa. The fountain performs daily with choreographed water displays set to music.",
            },
        ],
        imgUrl:"/assets/images/burjKhalifaWhyVisit.jpg"
    },
]



//Highlights
export const burjKhalifaHighlightsData:TypeTourHighlights[] = [
    {
        id: nanoid(),
        description:"View Dubai from the tallest structure in the world.",
        image: "/assets/images/burjKhalifaHighlightsOne.jpg"
    },
    {
        id: nanoid(),
        description:"Watch the sun set over the city from the observation deck.",
        image: "/assets/images/burjKhalifaHighlightsTwo.jpg"
    },
    {
        id: nanoid(),
        description:"Find out more about the engineering and architecture that went into making this Middle Eastern icon.",
        image: "/assets/images/burjKhalifaHighlightsThree.jpg"
    },
]

//Visit Plan

export const burjKhalifaPlanVisitData:TypeTourWhyVisitAndTourVisitPlan[] = [
    {
        id: nanoid(),
        title:"Timing",
        descriptions:[
            {
                id: nanoid(),
                title:"The Burj Khalifa's opening hours for its observation decks and other attractions are typically as follows",
                description:"",
            },
            {
                id: nanoid(),
                title:"At the Top (125th Floor)",
                description:"Daily: 8:30 AM to 11:00 PM.",
            },
            {
                id: nanoid(),
                title:"At the Top SKY (148th Floor)",
                description:"Daily: 9:00 AM to 9:00 PM.",
            },
            {
                id: nanoid(),
                title:"Special Events",
                description:"Hours may extend or vary during special events, holidays, or maintenance periods, so it's always a good idea to check in advance or consult the Burj Khalifa's official website for the most current information. Additionally, ticket availability and prices can also fluctuate based on the time of year and demand, so booking tickets in advance is recommended to secure your visit and avoid long wait times.",
            },
        ],
        imgUrl:"/assets/images/ayaUniverseVisitPlanTimingImg.avif"
    },
    {
        id: nanoid(),
        title:"Getting There",
        descriptions:[
            {
                id: nanoid(),
                title:"Location",
                description:" Burj Khalifa, 1 Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai, UAE",
            },
            {
                id: nanoid(),
                title:"Nearest Metro",
                description:"Burj Khalifa/Dubai Mall Metro Station",
            },
            {
                id: nanoid(),
                title:"Metro Line",
                description:"Red Line",
            },
            {
                id: nanoid(),
                title:"Walking Distance",
                description:"From the station, it's about a 10-15 minute walk to the Burj Khalifa. Follow the signs to The Dubai Mall and then proceed to the Burj Khalifa.",
            },
            {
                id: nanoid(),
                title:"By Taxi",
                description:"Taxis are widely available throughout Dubai and can drop you off directly at the Burj Khalifa. It's a well-known landmark, so most drivers will be familiar with it.",
            },
            {
                id: nanoid(),
                title:"By Car",
                description:"Parking: The Burj Khalifa has dedicated parking available in The Dubai Mall parking area. There are also several valet services offered at The Dubai Mall and at the Burj Khalifa itself.",
            },
        ],
        imgUrl:"/assets/images/ayaUniverseVisitPlanGettingThereImg.jpg"
    },
    {
        id: nanoid(),
        title:"Visiting Rules",
        descriptions:[
            {
                id: nanoid(),
                title:"Ticketing",
                description:"Advance Booking It's recommended to book tickets in advance, especially for peak times and busy seasons, to avoid long queues and ensure availability.",
            },
            {
                id: nanoid(),
                title:"Timings",
                description:"Follow the opening hours of the observation decks and other facilities. Check the Burj Khalifa's official website for any changes or special timings.",
            },
            {
                id: nanoid(),
                title:"Security Checks",
                description:"Be prepared for security checks upon entry. Large bags and certain items might not be allowed, so it's best to travel light.",
            },
            {
                id: nanoid(),
                title:"Dress Code",
                description:"While there is no strict dress code, smart casual attire is recommended. Avoid wearing inappropriate clothing, especially if you plan to visit the Atmosphere restaurant.",
            },
            {
                id: nanoid(),
                title:"Behavior",
                description:"Maintain respectful behavior towards other visitors and staff. Loud noise and disruptive behavior are discouraged.",
            },
            {
                id: nanoid(),
                title:"Photography",
                description:"Photography is generally allowed, but check for any restrictions, especially in sensitive areas or during specific events.",
            },
        ],
        imgUrl:"/assets/images/ayaUniverseVisitPlanVisitingRulesImg.jpg"
    },
    {
        id: nanoid(),
        title:"Attractions Nearby",
        descriptions:[
            {
                id: nanoid(),
                title:"The Dubai Mall",
                description:" One of the largest shopping malls in the world, featuring over 1,200 retail stores, a wide range of dining options, an ice rink, a giant indoor aquarium, and an extensive range of entertainment options. ",
            },
            {
                id: nanoid(),
                title:"Dubai Fountain",
                description:"The world's largest choreographed fountain system, offering stunning water shows set to music and lights. Shows typically run in the evenings and are a must-see",
            },
            {
                id: nanoid(),
                title:"Dubai Opera",
                description:" A cultural and architectural landmark hosting a variety of performances including opera, ballet, concerts, and theater. The building's design is inspired by a traditional dhow boat.",
            },
            {
                id: nanoid(),
                title:"Dubai Aquarium and Underwater Zoo",
                description:"One of the largest suspended aquariums in the world, featuring a diverse range of marine life and an underwater zoo. Visitors can walk through a 48-meter-long tunnel for 360-degree views.",
            },
        ],
        imgUrl:"/assets/images/burjKhalifaVisitPlanAttractionNearbyImg.jpg"
    },
    {
        id: nanoid(),
        title:"Visitors Tips",
        descriptions:[
            {
                id: nanoid(),
                title:"Book",
                description:"your tickets in advance",
            },
            {
                id: nanoid(),
                title:"Arrive",
                description:"early.",
            },
            {
                id: nanoid(),
                title:"Wear",
                description:"comfortable clothing and shoes.",
            },
            {
                id: nanoid(),
                title:"Bring",
                description:"a water bottle.",
            },
            {
                id: nanoid(),
                title:"Be respectful",
                description:"of the local culture and environment.",
            },
            {
                id: nanoid(),
                title:"Visit the",
                description:"Future Zone",
            },
        ],
        imgUrl:"/assets/images/dubaiFrameVisitPlanAttractionVisitorTipsImg.avif"
    },
]

//Additional Information

export const burjKhalifaAdditionInfoData:TypeFAQAndAdditionQuestion[] = [
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
export const burjKhalifaTourHomeFAQ:TypeFAQAndAdditionQuestion[] = [
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