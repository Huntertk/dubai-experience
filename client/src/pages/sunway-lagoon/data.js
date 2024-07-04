import { nanoid } from 'nanoid';


//Booking Card Data
export const sunwayLagoonCardData = [
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/SQ3jTkPk/1-1.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg",
            "https://i.postimg.cc/qqhqJ5zP/5.jpg",
            "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
            "https://i.postimg.cc/mD6hGs23/6.jpg",
            "https://i.postimg.cc/DZmy6MdS/the-villas-at-sunway.jpg",
            "https://i.postimg.cc/P5zx5Z55/pirate-s-revenge-3-wide.jpg"
        ],
        title:"Full Day Admission at Sunway Lagoon",
        desc:"Unlock a day of excitement at Sunway Lagoon with the Full Day Admission Ticket for MyKad holders. Enjoy thrilling rides, water attractions, and endless fun in Malaysia's premier amusement park.",
        type:"bookTypeOne",
        service:"sunway-lagoon",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:141,
                        child:119,
                        senior:119,
                    },
                    weekEnds:{
                        adult:141,
                        child:119,
                        senior:119,
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
                        adult:181,
                        child:149,
                        senior:149,
                    },
                    weekEnds:{
                        adult:181,
                        child:149,
                        senior:149,
                    },
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["1 Entrance Tickets for Sunway Lagoon"],
            exclusion:[
                "Meals",
                "Rental of Cabana, Tube and Lockers",
            ]
        }
    },
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/28LZvTb7/e4b73bbb-d5d9-4ca2-9414-cd80567c5c9a.jpg",
            "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
            "https://i.postimg.cc/qqhqJ5zP/5.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg"
        ],
        title:"Quack Express Only at Sunway Lagoon",
        desc:"Unlock a day of excitement at Sunway Lagoon with the Full Day Admission Ticket for MyKad holders. Enjoy thrilling rides, water attractions, and endless fun in Malaysia's premier amusement park.",
        type:"bookTypeTwo",
        service:"sunway-lagoon",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:75,
                        child:75,
                        senior:75,
                    },
                    weekEnds:{
                        adult:75,
                        child:75,
                        senior:75,
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
                        adult:75,
                        child:75,
                        senior:75,
                    },
                    weekEnds:{
                        adult:75,
                        child:75,
                        senior:75,
                    },
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["1 Entrance Tickets for Sunway Lagoon"],
            exclusion:[
                "Meals",
                "Rental of Cabana, Tube and Lockers",
            ]
        }
    },
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/kM0KVQqQ/the-ghostbusters-adventure-live-at-sunway-lagoon-11.jpg",
            "https://i.postimg.cc/RZ9tdv3q/Apache-Pots-Sunway-Lagoon-Night-Park.jpg",
            "https://i.postimg.cc/hGZ7Kx27/Vultures-Sunway-Lagoon-Night-Park.jpg",
            "https://i.postimg.cc/Y059hzFh/Image-P.jpg",
            "https://i.postimg.cc/zG1vNp5Q/2.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg"
        ],
        title:"Night Park at Sunway Lagoon",
        desc:"Unlock a day of excitement at Sunway Lagoon with the Full Day Admission Ticket for MyKad holders. Enjoy thrilling rides, water attractions, and endless fun in Malaysia's premier amusement park.",
        type:"bookTypeThree",
        service:"sunway-lagoon",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:50,
                        child:48,
                        senior:48,
                    },
                    weekEnds:{
                        adult:50,
                        child:48,
                        senior:48,
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
                        adult:50,
                        child:48,
                        senior:48,
                    },
                    weekEnds:{
                        adult:50,
                        child:48,
                        senior:48,
                    },
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["1 Entrance Tickets for Sunway Lagoon"],
            exclusion:[
                "Meals",
                "Rental of Cabana, Tube and Lockers",
            ]
        }
    },
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/28LZvTb7/e4b73bbb-d5d9-4ca2-9414-cd80567c5c9a.jpg",
            "https://i.postimg.cc/SQ3jTkPk/1-1.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg",
            "https://i.postimg.cc/qqhqJ5zP/5.jpg",
            "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
            "https://i.postimg.cc/mD6hGs23/6.jpg",
            "https://i.postimg.cc/DZmy6MdS/the-villas-at-sunway.jpg",
            "https://i.postimg.cc/P5zx5Z55/pirate-s-revenge-3-wide.jpg"
        ],
        title:"Combo Admission + Quack Express at Sunway Lagoon",
        desc:"Unlock a day of excitement at Sunway Lagoon with the Full Day Admission Ticket for MyKad holders. Enjoy thrilling rides, water attractions, and endless fun in Malaysia's premier amusement park.",
        type:"bookTypeFour",
        service:"sunway-lagoon",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:200,
                        child:218,
                        senior:218,
                    },
                    weekEnds:{
                        adult:200,
                        child:218,
                        senior:218,
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
                        adult:229,
                        child:209,
                        senior:209,
                    },
                    weekEnds:{
                        adult:229,
                        child:209,
                        senior:209,
                    },
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["1 Entrance Tickets for Sunway Lagoon"],
            exclusion:[
                "Meals",
                "Rental of Cabana, Tube and Lockers",
            ]
        }
    },
]

//Why Visit
export const sunwayLagoonWhyVistData = [
    {
        id: nanoid(),
        title: "Thrilling Adventure",
        desc:"Embark on a thrilling adventure at Sunway Lagoon, a sprawling 88-acre theme park boasting over 90 attractions in five distinct zones.",
        imgUrl:"https://i.postimg.cc/zG1vNp5Q/2.jpg"
    },
    {
        id: nanoid(),
        title: "High-Octane thrills",
        desc:"For high-octane thrills, head to the Extreme Park. Take on bungee jumping,  go-karting, paintball, and archery for an adrenaline-packed adventure.",
        imgUrl:"https://i.postimg.cc/cHJ6jHZ4/4-1.jpg"
    },
    {
        id: nanoid(),
        title: "High-Speed Slides",
        desc:"Dive into high-speed slides, explore wildlife habitats, and enjoy family-friendly activities, creating lasting memories in Malaysia's premier theme park.",
        imgUrl:"https://i.postimg.cc/mD6hGs23/6.jpg"
    },
]



//Things to do
export const sunwayLagoonThingsToDoData = [
    {
        id: nanoid(),
        image: "https://i.postimg.cc/mDqZ5y88/vuvzela-1.png",
        title:"Vuvuzela",
        desc:"Experience the world's largest water ride, taking you on a thrilling journey throughamassivefunnel and an extended flume."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/kM0KVQqQ/the-ghostbusters-adventure-live-at-sunway-lagoon-11.jpg",
        title:"Ghoster Buster Adventure Live",
        desc:"Experience a live show where you can join the Ghostbusters teamand assist theminbusting some ghosts."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
        title:"Nickelodeon Lost Lagoon",
        desc:"For fans of Nickelodeon characters, the Nickelodeon Lost Lagoon is a must-visit. Immerse yourself in the worlds of SpongeBob SquarePants, Dora the Explorer, Teenage Mutant Ninja Turtles, and many more."
    },
]


//Highlights
export const sunwayLagoonHighlighhtsData = [
    {
        id: nanoid(),
        desc:"Dive into the fun with massive water slides, wave pools, and the iconic Vuvuzelaride.",
        image: "https://i.postimg.cc/NG9RfJqG/theme-park-overview-14-wide.jpg"
    },
    {
        id: nanoid(),
        desc:"Enjoy interactive play areas, slime time, and meet beloved Nickelodeon characters.",
        image: "https://i.postimg.cc/DZmy6MdS/the-villas-at-sunway.jpg"
    },
    {
        id: nanoid(),
        desc:"Experience adrenaline-pumping roller coasters, wildlife encounters, and cultural showsinone dynamic theme park.",
        image: "https://i.postimg.cc/cHJ6jHZ4/4-1.jpg"
    },
]

//Additional Information

export const sunwayLagoonAdditionInfoData = [
    {
        id: nanoid(),
        ques:"Operating Hours ?",
        ans:[
            "Opens everyday from 10am - 11pm", 
            "Close every Tuesday except Public and School holiday.",
            "Night Park starts at 6pm - 11pm"
        ]
    },
    {
        id: nanoid(),
        ques:"Child Policy",
        ans:[
            "Adult age is 12 to 59 years old.",
            "Child age is  3 to 11 years old.",
            "Below 90cm Free.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: nanoid(),
        ques:"Ticket Inclusion",
        ans:[
            "Full day Ticket: Waterpark, Scream Park, Amusement Park, WildlifePark, Nickelodeon Lost Lagoon, Extreme Park & Night Park.",
            "Night Park: Lost City of Gold, Carousel, Wagon Wheel, GrandCanyon,Colorado, Vultures & Butch Cassidy.",
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
    {
        id: nanoid(),
        ques:"Ticket Validity",
        ans:["The tickets are fixed dated tickets. And no re-entry allowed."]
    },
]


//FAQ
export const sunwayLagoonTourHomeFAQ = [
    {
        id: nanoid(),
        ques:"Can I bring food inside Sunway Lagoon ?",
        ans:["No. Food and drinks is prohibited inside."]
    },
    {
        id: nanoid(),
        ques:"Does my 2 years old baby need to buy ticket to enter Sunway Lagoon ?",
        ans:["No, Child below 90cm can enter for FREE."]
    },
    {
        id: nanoid(),
        ques:"How long can I stay inside Sunway Lagoon ?",
        ans:["You may stay as long as you want, no time limit."]
    },
    {
        id: nanoid(),
        ques:"When does Sunway Lagoon close ?",
        ans:["Sunway Lagoon is close every Tuesday except for Public Holiday and School Holiday."]
    },
    {
        id: nanoid(),
        ques:"Does my ticket includes Locker and Tubes ?",
        ans:["No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."]
    },
    {
        id: nanoid(),
        ques:"Is all games included in my ticket ?",
        ans:["Yes all included except for Paid Games; Buggy Jump, G-Force X and GoKart"]
    },
    {
        id: nanoid(),
        ques:"Can I enter Night park if I buy Full Day Ticket ?",
        ans:["Yes, Customer who have Full Day Ticket may enjoy night park as well by staying inside the park as no re-entry is allowed."]
    },
    {
        id: nanoid(),
        ques:"Can I buy Only Quack Express Tickets if I already have Annual Pass ?",
        ans:["For Annual Pass Holders, you may buy Quack Express tickets only separatelyifyou want to enjoy Express Lane Privilege."]
    },
    {
        id: nanoid(),
        ques:"Can I buy Quack Express Tickets only to enter Sunway Lagoon ?",
        ans:["No. Quack Express is only add on ticket. You are required to have admission ticketsto enter the park."]
    },
]