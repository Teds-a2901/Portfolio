import techquiz from "../../public/logo/techquiz.png";
import theoasis from "../../public/logo/theoasis.png";
import vetandgrom from "../../public/logo/vetandgrom.png";

const proejctsdata = [
  {
    Name: "The Wild Oasis",
    Image: theoasis,
    github: "https://github.com/Teds-a2901/Oasis-Website.git",
    demo: "https://the-oasis-web.vercel.app/",
    Description:
      "The Wild Oasis is a full-stack web app that offers a smooth and intuitive experience for booking cabin stays based on users' preferred dates and times.",
    techstack: [
      "React",
      "Tailwind",
      "Next.js",
      "JavaScript",
      "NextAuth",
      "Supabase",
    ],
  },
  {
    Name: "The Oasis",
    Image: techquiz,
    github: "https://github.com/Teds-a2901/Tech-Quiz.git",
    demo: "https://tech-quest-game.netlify.app/",
    Description:
      "A simple quiz game focused on technical computer-related topics, designed to test and enhance users’ knowledge in areas such as hardware and software.",
    techstack: [
      "React",
      "Tailwind",
      "Next.js",
      "JavaScript",
      "NextAuth",
      "Supabase",
    ],
  },
  {
    Name: "Find Vet and Groom Services",
    Image: vetandgrom,
    github:
      "https://github.com/Teds-a2901/Find-Veterinary-Grooming-Services.git",
    Description:
      "FIND VET&GROOM is a web-based application designed to help pet owners find the nearest veterinary and grooming services within their area.",
    techstack: ["PHP", "CSS", "HTML", "Bootstrap", "JavaScript", "MySQL"],
  },
];

export default proejctsdata;
