exports.bookingPlanData = [
    {
        title: "Dubai Frame Ticket",
        desc: [
          "At the top of the frame, the Sky Deck offers breathtaking 360-degree views of Dubai. On one side, visitors can see modern Dubai with its skyscrapers, including the Burj Khalifa, and on the other side, they can view the older parts of the city.",
          "The Sky Deck features a glass-floored bridge, providing an exhilarating experience as visitors can look straight down to the ground 150 meters below. This transparent walkway adds an adventurous element to the visit."
        ],
        type: "bookTypeOne",
        service: "dubai-frame",
        image: [
          "/assets/images/dubaiFrameTicketOne.avif",
          "/assets/images/dubaiFrameTicketTwo.avif",
          "/assets/images/dubaiFrameTicketThree.avif",
          "/assets/images/dubaiFrameTicketFour.avif",
          "/assets/images/dubaiFrameTicketFive.avif",
          "/assets/images/dubaiFrameTicketSix.avif"
        ],
        preference: [
          {
            price: {
              weekDays: {
                adult: 49,
                child: 25,
                senior: 25
              },
              weekEnds: {
                adult: 49,
                child: 25,
                senior: 25
              }
            },
            title: "General Admission",
            details: [
              "Ticket for General Admission"
            ],
          }
        ],
        pricing: [
          {
            weekDays: {
              adult: 49,
              child: 25
            },
            weekEnds: {
              adult: 49,
              child: 25
            },
            title: "General Admission",
          },
        ],
        inclusionAndExclusion: {
            cancellationPolicy: [
              "These tickets can't be cancelled or rescheduled"
            ],
            inclusion: [
              "Entrance Tickets"
            ],
            exclusion: [
              "Parking",
              "Food and Drink",
              "Locker"
            ]
          },
        rulesAndRestriction: [
          "The Dubai Frame is open daily from 9:00 AM to 9:00 PM.",
          "These tickets can't be canceled or rescheduled.",
          "Dubai Frame is accessible for people with disabilities.",
          "You are allowed to take pictures at the Dubai Frame."
        ]
      },
]