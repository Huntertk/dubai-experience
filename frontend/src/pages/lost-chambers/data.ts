import { TypeFAQAndAdditionQuestion, TypeTopThingsToDo, TypeTourHighlights, TypeTourWhyVisitAndTourVisitPlan } from "../../utils/type";
import { nanoid } from 'nanoid';

//Top Things to do
export const lostChambersTopThingsToDo:TypeTopThingsToDo[] = [
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
export const lostChambersWhyVistData:TypeTourWhyVisitAndTourVisitPlan[] = [
    {
        id: nanoid(),
        title:"Lost Chambers Aquarium",
        descriptions:[
            {
                id: nanoid(),
                title:"Themed Exhibits",
                description:"The aquarium's design is based on the story of Atlantis, a legendary underwater city. The architecture and theming create the illusion of exploring the ruins of this ancient, submerged civilization. ",
            },
            {
                id: nanoid(),
                title:"Marine Life",
                description:"The Lost Chambers is home to a diverse range of marine species, including rays,sharks, and various types of fish. The exhibits are designed to mimic natural habitats and provide educational information about the marine life on display.",
            },
            {
                id: nanoid(),
                title:"Interactive Experiences",
                description:"Visitors can enjoy a range of interactive activities, such as touch tanks where they can get up close with certain species, and educational talks that provide insights into marine biology and conservation. ",
            },
            {
                id: nanoid(),
                title:"Aquatic Adventures",
                description:"For those looking for a more hands-on experience, the aquarium offers unique activities like snorkeling and diving experiences, allowing guests to explore the underwater environments more closely.",
            },
            {
                id: nanoid(),
                title:"Design and Atmosphere",
                description:" The aquarium's design features intricate details that reflect the grandeur and mystery of the legendary Atlantis. Visitors can wander through tunnels and view large tanks that create the impression of being within the ancient city's ruins.",
            },
        ],
        imgUrl:"/assets/images/lost-chambers-lostChambersWhyVisit.jpg"
    },
]



//Highlights
export const lostChambersHighlightsData:TypeTourHighlights[] = [
    {
        id: nanoid(),
        description:"One of the world's largest suspended aquariums, featuring a diverse range of marine life including sharks and rays. Immersive design inspired by the mythical lost city of Atlantis, with elaborate ruins and atmospheric elements. ",
        image: "/assets/images/lostChambersHighlightsOne.webp"
    },
    {
        id: nanoid(),
        description:"Touch pools for hands-on learning and interactive displays to engage visitors with marine life. Options for snorkeling and diving in the Ambassador Lagoon, plus behind-the-scenes tours.",
        image: "/assets/images/lostChambersHighlightsTwo.jpg"
    },
    {
        id: nanoid(),
        description:"Engaging activities and educational programs suitable for visitors of all ages. Focus on marine conservation and environmental education.",
        image: "/assets/images/lostChambersHighlightsThree.jpg"
    },
]

//Visit Plan

export const lostChambersPlanVisitData:TypeTourWhyVisitAndTourVisitPlan[] = [
    {
        id: nanoid(),
        title:"Timing",
        descriptions:[
            {
                id: nanoid(),
                title:"Opening hours",
                description:"Typically open from 10:00 AM to 10:00 PM. However, hours can vary, especially during peak seasons or special events, so it's a good idea to check the official website or contact the attraction for the most up-to-date information before your visit.",
            },
            {
                id: nanoid(),
                title:"Best Time to Visit on Weekdays",
                description:"Visiting on weekdays, especially Tuesday through Thursday, can be less crowded compared to weekends, providing a more relaxed experience.",
            },
            {
                id: nanoid(),
                title:"Morning",
                description:"Arriving early, right when the aquarium opens, often means fewer crowds and a more leisurely exploration.",
            },
            {
                id: nanoid(),
                title:"Avoiding Peak Times",
                description:"Weekends, public holidays, and school vacation periods can be busier. If you prefer a quieter visit, try to avoid these peak times.",
            },
        ],
        imgUrl:"/assets/images/lostChambersVisitPlanTimingImg.jpg"
    },
    {
        id: nanoid(),
        title:"Getting There",
        descriptions:[
            {
                id: nanoid(),
                title:"Location",
                description:" Atlantis The Palm Crescent Road, Palm Jumeirah, Dubai, United Arab Emirates.",
            },
            {
                id: nanoid(),
                title:"By Car",
                description:"You can drive to Atlantis The Palm, there is ample parking available at the resort.",
            },
            {
                id: nanoid(),
                title:"By Taxi",
                description:"Taxis are a convenient option and are readily available throughout Dubai. Simply provide the driver with the resort's address.",
            },
            {
                id: nanoid(),
                title:"By Metro and Shuttle",
                description:"While there's no direct metro line to Atlantis, you can take the Dubai Metro to the nearest station and then use a taxi or shuttle service to reach the resort.",
            },
            {
                id: nanoid(),
                title:"By Tram and Monorail",
                description:"The Dubai Tram connects to the Dubai Metro, and you can transfer to the Palm Jumeirah Monorail, which connects to Atlantis The Palm.",
            },
        ],
        imgUrl:"/assets/images/lostChambersVisitPlanGettingThereImg.jpg"
    },
    {
        id: nanoid(),
        title:"Visiting Rules",
        descriptions:[
            {
                id: nanoid(),
                title:"Purchase Tickets",
                description:"Tickets should be purchased in advance where possible, either online or at the entrance. Keep your ticket handy for inspection.",
            },
            {
                id: nanoid(),
                title:"Valid Identification",
                description:"Bring valid ID if required, especially for discounted tickets or special promotions.",
            },
            {
                id: nanoid(),
                title:"Dress Code",
                description:"While casual attire is generally acceptable, swimming attire is not allowed unless you're participating in specific aquatic activities. Comfortable, weather-appropriate clothing and footwear are recommended.",
            },
            {
                id: nanoid(),
                title:"Health Precautions",
                description:"Follow any health and safety guidelines in place, such as wearing masks or using hand sanitizers if required.",
            },
            {
                id: nanoid(),
                title:"Respect the Environment",
                description:"Do not touch or tap on the aquarium glass or disturb the marine life. Follow instructions from staff regarding interaction with exhibits.",
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
                title:"Aquaventure Waterpark",
                description:"One of Dubai's largest and most popular waterparks, featuring thrilling slides, a lazy river, and a private beach. Location Within Atlantis The Palm.",
            },
            {
                id: nanoid(),
                title:"Dolphin Bay",
                description:" Offers interactive experiences with dolphins, including swimming and playing with these marine mammals in a controlled environment. Location Within Atlantis The Palm.",
            },
            {
                id: nanoid(),
                title:"Atlantis The Palm Resort",
                description:"The resort itself has numerous amenities, including fine dining restaurants, luxury shopping, and an impressive lobby area with aquatic-themed decor. Location Within Atlantis The Palm complex.",
            },
            {
                id: nanoid(),
                title:"The Pointe",
                description:" A waterfront dining and entertainment destination with a variety of restaurants, shops, and views of the Atlantis The Palm. Location On Palm Jumeirah, a short drive from the resort",
            },
        ],
       imgUrl:"/assets/images/lostChambersVisitPlanAttractionNearbyImg.jpg"
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

export const lostChambersAdditionInfoData:TypeFAQAndAdditionQuestion[] = [
    {
        id: nanoid(),
        ques:"Where is the Lost Chambers Aquarium located ?",
        ans:[
            "You can find The Lost Chambers Aquarium at Atlantis, The Palm. To reach it, navigate through The Avenues and follow the signs for The Lost Chambers Aquarium."
        ]
    },
    {
        id: nanoid(),
        ques:"What are your opening hours of the Lost Chambers Aquarium ?",
        ans:[
            "You can explore the underwater world at The Lost Chambers Aquarium every day of the year. The aquarium is open from 10:00 AM to 9:00 PM."
        ]
    },
    {
        id: nanoid(),
        ques:"Are there any age restrictions ?",
        ans:[
            "The Lost Chambers Aquarium welcomes guests of all ages. Children under 12 years old must be accompanied by an adult. A child price is available for guests aged 3 to 7 years, while guests aged 8 years and older are charged the adult price. Children aged 2 years and under can enjoy complimentary access."
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter."]
    },
]

//FAQ
export const lostChambersTourHomeFAQ:TypeFAQAndAdditionQuestion[] = [
    {
        id: nanoid(),
        ques:"What can I see at The Lost Chambers Aquarium ?",
        ans:["The aquarium features a diverse array of marine life, including majestic sharks, vibrant fish, and other underwater species. Explore the mythical lost city of Atlantis and witness the stunning aquatic displays."]
    },
    {
        id: nanoid(),
        ques:"Is scuba diving available ?",
        ans:["Yes, The Lost Chambers Aquarium offers scuba diving experiences for those looking to explore the underwater world more intimately. Check availability and book in advance."]
    },
    {
        id: nanoid(),
        ques:"How can I book a diving or snorkeling experience ?",
        ans:["You can book diving and snorkeling experiences through the Aquaventure website, by calling their reservations team, or directly at the Aquaventure guest services."]
    },
]