const Database = [
  {
    id: 0,
    background: "./../images/home/background-home-desktop.jpg",
    navLink: "home",
    textSmallTitle: "SO, YOU WANT TO TRAV",
    textTitle: "SPACE",
    text: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
  },
  {
    id: 1,
    background: "./../images/destination/background-destination-desktop.jpg",
    navLink: "destination",
    textSmallTitle: "Pick your destination",
    planets: [
      {
        id: 1,
        name: "moon",
        image: "./../images/destination/image-moon.png",
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distanceName: "AVG. DISTANCE",
        distanceNumber: "384,400 km",
        timeName: "Est. travel time",
        timeNumber: "3 days",
      },
      {
        id: 2,
        name: "mars",
        image: "./../images/destination/image-mars.png",
        text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distanceName: "AVG. DISTANCE",
        distanceNumber: "225 MIL. km",
        timeName: "Est. travel time",
        timeNumber: "9 months",
      },
      {
        id: 3,
        name: "europa",
        image: "./../images/destination/image-europa.png",
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distanceName: "AVG. DISTANCE",
        distanceNumber: "225 MIL. km",
        timeName: "Est. travel time",
        timeNumber: "3 years",
      },
      {
        id: 4,
        name: "titan",
        image: "./../images/destination/image-titan.png",
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distanceName: "AVG. DISTANCE",
        distanceNumber: "1.6 BIL. km",
        timeName: "Est. travel time",
        timeNumber: "7 years",
      }
    ],
  },
  {
    id: 2,
    background: "./../images/crew/background-crew-desktop.jpg",
    navLink: "crew",
    textSmallTitle: "Meet your crew",
    dot_menu: [
      {
        id: 1,
        title: "Commander",
        name: "Douglas Hurley",
        text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: './images/crew/image-douglas-hurley.webp'
      },
      {
        id: 2,
        title: "Mission Specialist",
        name: "MARK SHUTTLEWORTH",
        text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: './images/crew/image-mark-shuttleworth.webp'
      },
      {
        id: 3,
        title: "PILOT",
        name: "Victor Glover",
        text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        image: './images/crew/image-victor-glover.webp'
      },
      {
        id: 4,
        title: "Flight Engineer",
        name: "Anousheh Ansari",
        text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        image: './images/crew/image-anousheh-ansari.webp'
      }
    ]
  },
  {
    id: 3,
    background: "./../images/technology/background-technology-desktop.jpg",
    navLink: "technology",
    textSmallTitle: "SPACE LAUNCH 101",
    number_menu: [
      {
        id: 1,
        title: "LAUNCH VEHICLE",
        text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: './images/technology/image-launch-vehicle-portrait.jpg'
      },
      {
        id: 2,
        title: "SPACEPORT",
        text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        image: './images/technology/image-spaceport-portrait.jpg'
      },
      {
        id: 3,
        title: "SPACE CAPSULE",
        text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: './images/technology/image-space-capsule-portrait.jpg'
      },
    ]
  },
]

export default Database;