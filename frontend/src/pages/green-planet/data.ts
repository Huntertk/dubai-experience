import { TypeFAQAndAdditionQuestion, TypeTopThingsToDo, TypeTourHighlights, TypeTourWhyVisitAndTourVisitPlan } from "../../utils/type";
import { nanoid } from 'nanoid';



//Top Things to do
export const dubaiFrameTopThingsToDo:TypeTopThingsToDo[] = [
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
export const greenPlanetWhyVistData:TypeTourWhyVisitAndTourVisitPlan[] = [
    {
        id: nanoid(),
        title:"Green Planet Dubai",
        descriptions:[
            {
                id: nanoid(),
                title:"Immersive Rainforest Experience",
                description:" Green Planet Dubai provides an opportunity to explore a tropical rainforest environment indoors. This immersive experience allows you to walk through a lush, vibrant ecosystem without leaving the city.",
            },
            {
                id: nanoid(),
                title:"Educational Insights",
                description:"The attraction offers educational exhibits and programs about rainforest ecosystems, biodiversity, and conservation. It's an excellent way to learn about the importance of rainforests and their role in global ecology.",
            },
            {
                id: nanoid(),
                title:"Diverse Wildlife Encounters",
                description:"You can see a variety of exotic animals, including sloths, monkeys, birds, and reptiles. The chance to observe these creatures up close and learn about their behaviors and habitats is both exciting and educational.",
            },
            {
                id: nanoid(),
                title:"Interactive Exhibits",
                description:"Green Planet Dubai features interactive displays and hands-on activities that engage visitors of all ages. These exhibits are designed to be informative and entertaining, making learning about nature fun.",
            },
            {
                id: nanoid(),
                title:"Family-Friendly Fun",
                description:"The attraction is designed to be enjoyable for visitors of all ages. It's a great destination for families, offering activities and experiences that appeal to children and adults alike.",
            },
        ],
        imgUrl:"/assets/images/greenPlanetWhyVisit.jpg"
    },
]



//Highlights
export const greenPlanerHighlightsData:TypeTourHighlights[] = [
    {
        id: nanoid(),
        description:"With a ticket to The Green Planet, you may enter the first bio-dome-enclosed tropical forest in the UAE.",
        image: "/assets/images/greenPlanetHighlightsOne.jpg"
    },
    {
        id: nanoid(),
        description:"In this completely immersive vertical tropical jungle, discover a whole new world of unique flora and creatures.",
        image: "/assets/images/greenPlanetHighlightsTwo.jpg"
    },
    {
        id: nanoid(),
        description:"Discover more than 3,000 different plants and animals, and engage with them!",
        image: "/assets/images/greenPlanetHighlightsThree.jpg"
    },
]

//Visit Plan

export const greenPlanetPlanVisitData:TypeTourWhyVisitAndTourVisitPlan[] = [
    {
        id: nanoid(),
        title:"Timing",
        descriptions:[
            {
                id: nanoid(),
                title:"Monday to Thursday",
                description:"10:00 AM - 6:00 PM",
            },
            {
                id: nanoid(),
                title:"Friday to Sunday",
                description:"10:00 AM - 7:00 PM",
            },
            {
                id: nanoid(),
                title:"Location",
                description:"City Walk, Al Wasl, Dubai, UAE",
            },
            {
                id: nanoid(),
                title:"Important",
                description:"These hours can vary due to special events, public holidays, or maintenance schedules. For the most current and accurate information, it's a good idea to check Green Planet Dubai's official website or contact their customer service directly before planning your visit.",
            },
        ],
        imgUrl:"/assets/images/greenPlanetVisitPlanTimingImg.jpg"
    },
    {
        id: nanoid(),
        title:"Getting There",
        descriptions:[
            {
                id: nanoid(),
                title:"By Metro",
                description:" The closest Dubai Metro station is the Burj Khalifa/Dubai Mall Station on the Red Line. From there, you can take a short taxi ride or use public transport options to reach City Walk.",
            },
            {
                id: nanoid(),
                title:"By Car",
                description:"Parking is available at City Walk. Look for signage directing you to the parking areas.",
            },
            {
                id: nanoid(),
                title:"By Taxi",
                description:"Taxis can drop you off directly at the entrance of City Walk.",
            },
        ],
        imgUrl:"/assets/images/greenPlanetVisitPlanGettingThereImg.avif"
    },
    {
        id: nanoid(),
        title:"Visiting Rules",
        descriptions:[
            {
                id: nanoid(),
                title:"Ticket Purchase",
                description:"Tickets should be purchased either online in advance or at the entrance. It's advisable to check for any special rates or packages before your visit.",
            },
            {
                id: nanoid(),
                title:"Entry Requirements",
                description:"Ensure you have your ticket (printed or digital) ready for scanning upon arrival.",
            },
            {
                id: nanoid(),
                title:"COVID-19 Measures",
                description:"Follow any current health and safety protocols, including wearing masks if required, maintaining social distancing, and using hand sanitizers.",
            },
            {
                id: nanoid(),
                title:"Health Conditions",
                description:"If you're feeling unwell or showing symptoms of illness, it's best to postpone your visit to prevent the spread of illness.",
            },
            {
                id: nanoid(),
                title:"Respect Wildlife",
                description:"Do not disturb or feed the animals. Follow guidelines for interacting with wildlife to ensure their safety and well-being.",
            },
            {
                id: nanoid(),
                title:"Noise Levels",
                description:"Keep noise levels to a minimum to avoid disturbing the animals and other visitors.",
            },
        ],
        imgUrl:"/assets/images/greenPlanetVisitPlanVisitingRulesImg.jpg"
    },
    {
        id: nanoid(),
        title:"Attractions Nearby",
        descriptions:[
            {
                id: nanoid(),
                title:"Shopping and Dining",
                description:" City Walk is a modern urban development with a range of high-end shops, boutiques, and restaurants. It's a great place to enjoy a meal or do some shopping.",
            },
            {
                id: nanoid(),
                title:"Street Art",
                description:" The area features impressive street art and murals that make for interesting photo opportunities.",
            },
            {
                id: nanoid(),
                title:"Dubai Aquarium & Underwater Zoo",
                description:"Located at Dubai Mall, a short drive from City Walk.",
            },
            {
                id: nanoid(),
                title:"Burj Khalifa",
                description:"Also situated near Dubai Mall.",
            },
            {
                id: nanoid(),
                title:"Dubai Fountain",
                description:"Located outside Dubai Mall.",
            },
        ],
        imgUrl:"/assets/images/greenPlanetVisitPlanAttractionNearbyImg.jpg"
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
        ],
       imgUrl:"/assets/images/dubaiFrameVisitPlanAttractionVisitorTipsImg.avif"
    },
]

//Additional Information

export const greenPlanetAdditionInfoData:TypeFAQAndAdditionQuestion[] = [
    {
        id: nanoid(),
        ques:"What is Green planet dubai ?",
        ans:[
            "At Green Planet Dubai, you can experience a rich and immersive tropical rainforest environment right in the heart of the city. Explore the different layers of a rainforest, including the Forest Floor, the Mid-Story, and the Canopy. Each layer features distinct plant and animal life. Walk through dense, vibrant vegetation with a variety of tropical plants. You'll see towering trees, vibrant ferns, and colorful flowers that mimic a real rainforest environment. Some plants may have bioluminescent properties, adding a magical glow to the rainforest in the evening."
        ]
    },
    {
        id: nanoid(),
        ques:"Is it worth visiting Green Planet Dubai?",
        ans:[
            "Absolutely! Green Planet Dubai is one of the largest and only indoor rainforests in Dubai. It contains a bio-dome ecosystem and a 25-meter man-made tree."
        ]
    },
    {
        id: nanoid(),
        ques:"Where is Green Planet Dubai located ?",
        ans:[
            "The Green Planet is located inside City Walk - Al Wasl, Dubai."
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter."]
    },
]

//FAQ
export const greenPlanetTourHomeFAQ:TypeFAQAndAdditionQuestion[] = [
    {
        id: nanoid(),
        ques:"Where can i buy Green planet dubai tickets ?",
        ans:["You can buy Green planet tickets online and make bookings in advance to avoid waiting in long queues as well as a hassle-free-booking experience."]
    },
    {
        id: nanoid(),
        ques:"Where is Green planet dubai located",
        ans:["City Walk, Al Wasl, Dubai, UAE"]
    },
    {
        id: nanoid(),
        ques:"What are the Green Planet Dubai timing ?",
        ans:[
            "Monday to Thursday: 10:00 AM - 6:00 PM",
            "Friday to Sunday: 10:00 AM - 7:00 PM"
        ]
    },
]