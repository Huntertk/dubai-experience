import { nanoid } from 'nanoid';


//Booking Card Data
export const splashManiaCardData = [
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/htdDCsFR/splashmania-newtagline-2022-2.png",
            "https://i.postimg.cc/6688YC4Y/FB-IMG-1672326767007.jpg",
            "https://i.postimg.cc/v8CcjDWM/FB-IMG-1672326769274.jpg",
            "https://i.postimg.cc/hPxfqgrm/FB-IMG-1672326773605.jpg",
            "https://i.postimg.cc/fRfyJK1T/FB-IMG-1672326776017.jpg",
            "https://i.postimg.cc/3ww8WHgn/FB-IMG-1675571092838.jpg",
            "https://i.postimg.cc/Jzx71hBs/FB-IMG-1675571102131.jpg"
        ],
        title:"Ticket to Spalash Mania Waterpark at Gamuda Cove Selangor",
        desc:"Experience the ultimate thrills with your loved ones on 39 exciting water slides and rides at SplashMania waterpark.",
        type:"bookTypeOne",
        service:"splash-mania",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:103,
                        child:85,
                        senior:85,
                    },
                    weekEnds:{
                        adult:103,
                        child:85,
                        senior:85,
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
                        adult:103,
                        child:85,
                        senior:85,
                    },
                    weekEnds:{
                        adult:103,
                        child:85,
                        senior:85,
                    },
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["Entrance Tickets"],
            exclusion:[
                "Parking",
                "Food and Drink",
                "Locker"
            ]
        }
    },
]

//Why Visit
export const splashmaniaWhyVistData = [
    {
        id: nanoid(),
        title: "Treasure Tower",
        desc:"A colossal slide combination that seamlessly merges multiple flumes and splash buckets for an exhilarating experience.",
        imgUrl:"https://i.postimg.cc/vHNs5xSx/14-Treasure-Tower-2023-01-27-041251-xgwt-removebg-preview.png"
    },
    {
        id: nanoid(),
        title: "Splash Sploosh",
        desc:"An engaging water fountain splash pad designed for enjoyment by both kids and adults alike.",
        imgUrl:"https://i.postimg.cc/sgGRmft6/23-Splash-Sploosh-2023-01-27-041654-oyas-removebg-preview.png"
    },
    {
        id: nanoid(),
        title: "Ravage River",
        desc:"Embark on a journey through diverse ride elements with attractions like Savage Ravage, Secret Lair, Donut Rapids, Bubbly Dip, Monsoon, Pinnacle Creek, Rain Shooters, Happy Feet, and the Wave Ball Pool.",
        imgUrl:"https://i.postimg.cc/QMLZyGDX/15-Ravage-River-removebg-preview.png"
    },
    {
        id: nanoid(),
        title: "Meet and Greet",
        desc:"In line with Splash Mania's rainforest theme, these mascots were selected as some of the most remarkable and majestic creatures inhabiting the rainforest terrain.",
        imgUrl:"https://i.postimg.cc/JhbCw67j/pasd-removebg-preview.png"
    },
]



//Things to do
export const splashManiaThingsToDoData = [
    {
        id: nanoid(),
        image: "https://i.postimg.cc/PqGPRbp9/WhatsApp_Image_2023-12-05_at_09.31.13_fcuvlf.jpg",
        title:"Twista",
        desc:"Indulge in excitement as you navigate a high-speed slide, spiraling through a bowl before the exhilarating release."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/bwSZgVJ1/WhatsApp_Image_2023-12-05_at_09.31.31_ihv9uc.jpg",
        title:"Monsta",
        desc:"Embark on an exhilarating adventure as you zoom down a high-speed slide, spinning within a bowl before the thrilling release."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/zfnVZLTB/WhatsApp_Image_2023-12-05_at_09.32.16_z5zder.jpg",
        title:"Maniac Racers",
        desc:"Compete against your friends on this multi-flume slide that enables you to race and drift while keeping an eye on your companions."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/Nfzy1vgg/Whats-App-Image-2023-12-05-at-09-32-32-sw-jxwr.jpg",
        title:"Wild Rush",
        desc:"A timeless, iconic water slides featuring exhilarating twists and 360-degree loops."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/SskjyyGG/WhatsApp_Image_2023-12-05_at_09.31.44_pyeu2e.jpg",
        title:"Sumaumeira Drop",
        desc:"Feel the adrenaline rush with a sudden descent from the summit, plunging into curving high-speed body slides."
    },
]


//Highlights
export const splashManiaHighlighhtsData = [
    {
        id: nanoid(),
        desc:" Embark on an adventure and experience the excitement of 29 pulse-pounding water slides and 15 additional attractions, including the Lazy River, Family Raft Ride, Master Blaster Splash Pad, and many more.",
        image: "https://i.postimg.cc/L8xSc0rf/gallery-desktop-7.png"
    },
    {
        id: nanoid(),
        desc:"Indulge in exhilarating moments with your loved ones as you explore 39 thrilling water slides and rides at Splash Mania waterpark.",
        image: "https://i.postimg.cc/D0GyFdqh/FB-IMG-1675571108280.jpg"
    },
    {
        id: nanoid(),
        desc:"Immerse yourself in the enclosed Shaka Waka tube slide, where you can encounter breathtaking lighting and audio effects for a truly spectacular experience.",
        image: "https://i.postimg.cc/15PZfQSw/Splash-Mania-Waterpark-Ticketin-Gamuda-Cove-Selangor-Klook-Malaysia.jpg"
    },
    {
        id: nanoid(),
        desc:" Embark on the ultimate aquatic escapade while tackling the massive waves of the wave pool.",
        image: "https://i.postimg.cc/fRfyJK1T/FB-IMG-1672326776017.jpg"
    },
]

//Additional Information

export const splashManiaAdditionInfoData = [
    {
        id: nanoid(),
        ques:"Operating Hours ?",
        ans:[
            "Thursday - Tuesday : 10am - 6pm", 
            "(Closed on Wednesday EXCEPT during Malaysia public holidays and school holidays)",
            "Ramadan Promo Operation Hours (12 March to 9 April 2024)"
        ]
    },
    {
        id: nanoid(),
        ques:"Child Policy",
        ans:[
            "Adult: Height 110cm above.",
            "Child height 90cm to 110cm",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: nanoid(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
]


//FAQ
export const splashManiaTourHomeFAQ = [
    {
        id: nanoid(),
        ques:"When does Splash Mania close ?",
        ans:["Splash Mania Waterpark is close every Wednesday except Public Holiday and School Holiday."]
    },
    {
        id: nanoid(),
        ques:"How long should I plan for Splash Mania?",
        ans:["You can enjoy all rides unlimitedly within the time frame 10am to 6pm."]
    },
    {
        id: nanoid(),
        ques:"Can I bring mineral water on my own?",
        ans:["No. Outside food and water not allowed."]
    },
    {
        id: nanoid(),
        ques:"Does my ticket includes Locker and Tubes?",
        ans:["No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."]
    },
    {
        id: nanoid(),
        ques:"What are the games includes in my tickets",
        ans:["All games in the park except pay-per-rides like SurfMania, Zoomi's Runaway and Sky Leap."]
    },
    {
        id: nanoid(),
        ques:"If my child is more than 120cm, can i buy Child Ticket ?",
        ans:["No Child above 120cm will be considered as adult."]
    },
]