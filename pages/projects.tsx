// import { useMemo, memo } from "react";
// import Link from "next/link";
// import { Typography, Button, Container, Toolbar } from "@material-ui/core";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import Project from "components/Projects/Project";

// import { useDarkMode } from "context/themeContext";

// const logos = {
//   react: "/assets/icons/react.png",
//   bootstrap: "/assets/icons/bootstrap.svg",
//   chartjs: "/assets/icons/chartjs.svg",
//   expressjs: "/assets/icons/expressjs.png",
//   git: "/assets/icons/git.svg",
//   materialui: "/assets/icons/materialui.svg",
//   mongodb: "/assets/icons/mongodb.svg",
//   nextjs: "/assets/icons/nextjs.svg",
//   nodejs: "/assets/icons/nodejs.svg",
//   s3: "/assets/icons/s3.png",
//   socketio: "/assets/icons/socketio.svg",
//   typescript: "/assets/icons/typescript.svg",
//   vercel: "/assets/icons/vercel.svg",
// };

// export type ProjectType = {
//   title: string;
//   description: string[];
//   images: {
//     webm?: string;
//     mp4?: string;
//     main?: { link: string; height: number; width: number };
//     poster?: string;
//   };
//   links: { github?: string; live: string };
//   stack?: { label: string; logo: string; invert?: boolean }[];
// };
// interface Projects extends ProjectType {}

// function Projects() {
//   const darkMode = useDarkMode();
//   const projects: ProjectType[] = useMemo(
//     () => [
//       {
//         title: "Dogmash",
//         description: [
//           "**Upload**, **view** and **vote** for the cutest dogs, Dogmash project is inspired by Mark Zuckerberg's infamous website **facemash**",
//           "This was my first big backend project made using **node.js** with **express.js** and styled using **Bootstrap**. Any user can upload their dog pics to the website without any registration which will only be made public once the admin logs in and approve the uploaded image. Yes this project has an **Admin panel** built into it to ensure images are appropriate.",
//           "Uploaded images are stored on **amazon s3 bucket**, uploaded using **presigned URL** straight from browser to s3 bucket.",
//           "This project also has **rate limiting** to avoid spam and uses **CSRF token** protection.",
//         ],
//         images: {
//           main: {
//             link: "/project/dogmash/dogmash.png",
//             width: 1903,
//             height: 894,
//           },
//         },
//         stack: [
//           { label: "nodejs", logo: logos.nodejs },
//           { label: "expressjs", logo: logos.expressjs },
//           { label: "aws-s3", logo: logos.s3 },
//           { label: "mongodb", logo: logos.mongodb },
//           { label: "bootstrap", logo: logos.bootstrap },
//         ],
//         links: {
//           live: "https://dogmash.herokuapp.com/",
//         },
//       },
//       {
//         title: "covid-19 India tracker",
//         description: [
//           "covid-19 tracker for India made using **react**",
//           "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state",
//           "There is also a state-wise table of covid data which can be sorted by any column",
//           "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data",
//           "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
//         ],
//         images: {
//           webm: "/project/covid-19/covid-3.webm",
//           mp4: "/project/covid-19/rick.mp4",
//           main: {
//             link: "/project/covid-19/covid.png",
//             width: 1225,
//             height: 571,
//           },
//         },
//         stack: [
//           { label: "chartjs", logo: logos.chartjs },
//           { label: "reactjs", logo: logos.react },
//           { label: "material-ui", logo: logos.materialui },
//         ],
//         links: {
//           github:
//             "https://github.com/Juggernaut9/covid-tracker-material-ui-react",
//           live: "https://covid-tracker-beta.vercel.app/",
//         },
//       },
//       {
//         title: "Connect-4 online multiplayer",
//         description: [
//           "connect-4 board game that allows you to **play with anyone around the world** with no registration or downloads. You and your friend just need to open the link in the browser and you're ready to play 🙂",
//           "The frontend is built using **react** and styled using **material-ui** and backend built using **node.js**.",
//           "**socket.io** library is used for live transfer of data from client to server using websockets",
//           "The app supports multiple games running parallel, means many pair of people can play on the same website at the same time without any interference",
//           "If you wish to test this project, you must run the url on different browsers, or better check my **[video explaining how it works](https://www.linkedin.com/posts/bhavya-tomar-1967b6202_careerhack-github-hackathon-activity-6760854974944694272--QFx)** that I posted on **LinkedIn**",
//         ],
//         stack: [
//           { label: "nodejs", logo: logos.nodejs },
//           { label: "reactjs", logo: logos.react },
//           { label: "socket.io", logo: logos.socketio },
//           { label: "material-ui", logo: logos.materialui },
//         ],
//         links: {
//           github: "https://github.com/Juggernaut9/connect-4-online-multiplayer",
//           live: "https://konnect-4.vercel.app/",
//         },
//         images: {
//           poster: "/project/connect-4/poster.png",
//           mp4: "/project/connect-4/c4mp4.mp4",
//           webm: "/project/connect-4/c4webm.webm",
//         },
//       },
//     ],
//     [darkMode]
//   );

//   const renderProjects = () => {
//     return projects.map(
//       ({ title, description, images, stack, links }, index) => {
//         return (
//           <Project
//             key={index}
//             index={index + 1}
//             title={title}
//             description={description}
//             images={images}
//             stack={stack}
//             links={links}
//           />
//         );
//       }
//     );
//   };
//   return (
//     <>
//       <Toolbar />
//       <Typography id="projects" variant="h2">
//         Projects I have worked on
//       </Typography>
//       {renderProjects()}
//       <Container style={{ textAlign: "right" }}>
//         <Link href="/projects" passHref>
//           <Button
//             component="a"
//             color="secondary"
//             size="large"
//             variant="outlined"
//             endIcon={<ArrowForwardIosIcon />}
//           >
//             View All Projects
//           </Button>
//         </Link>
//       </Container>
//     </>
//   );
// }

// export default memo(Projects);

import React from "react";

function projects() {
  return (
    <div>
      <h1>Projects page</h1>
      <h1>Projects page</h1>
      <h1>Projects page</h1>
      <h1>Projects page</h1>
    </div>
  );
}

export default projects;
