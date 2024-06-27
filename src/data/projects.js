import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    id: uuidv4(),
    img: ["/img/tai-chi.jpg", "/img/tai-chi-phones.jpg"],
    title: "TAI CHI",
    description:
      "This project is a responsive website for a Tai Chi Academy, built using ReactJS. It features seamless navigation with React Routing and dynamic route paths for efficient URL management. The site integrates a News API to provide the latest updates about Tai Chi and uses the Unsplash API to create a dynamic gallery of Tai Chi-related images.",
    github: "https://github.com/stefanbrkic1/tai-chi",
    deployment: "https://tai-chi.vercel.app/",
  },
  {
    id: uuidv4(),
    img: ["/img/dinosaurs.jpg", "/img/dinosaurs-phones.jpg"],
    title: "DINOZZ",
    description:
      "DINOZz is a web application that helps dinosaur enthusiasts explore and learn about various types of dinosaurs quickly and easily. The data, sourced from the National History Museum in London, includes details about each dinosaur’s characteristics, diet and geographical origin. Users can search and filter the dinosaurs, save their favorites, dive into interactive charts for insights, check the locations map where they have been found and stay updated with the latest news in this field.",
    github: "https://github.com/chingu-voyages/v48-tier2-team-13",
    deployment: "https://dinozz-discovery.onrender.com/",
  },
  {
    id: uuidv4(),
    img: ["/img/e-commerce.jpg", "/img/e-commerce-phones.jpg"],
    title: "Shoping Commerce",
    description:
      "SHOPPING COMMERCE is an e-commerce website built with ReactJS and Redux. The site offers a seamless shopping experience with efficient navigation using React Router, allowing users to browse through the landing page, product categories, and individual product pages. Redux is implemented for robust state management, handling user authentication, shopping cart items, and product data.",
    github: "https://github.com/stefanbrkic1/E-Commerce",
    deployment: "https://shoping-commerce.vercel.app/",
  },
  {
    id: uuidv4(),
    img: ["/img/memory-game.jpg", "/img/memory-game-phones.jpg"],
    title: "Schwifty",
    description:
      "Schwifty is a Rick and Morty-themed card memory game built with ReactJS. Players must avoid clicking the same card twice to progress through levels, with difficulty increasing as 6 new cards are added each level. Track your progress with levels completed (🏆), current score (⭐), and highest score achieved (🎯).",
    github: "https://github.com/stefanbrkic1/MemoryGame",
    deployment: "https://rickandmorty-memory-teal.vercel.app/",
  },

  {
    id: uuidv4(),
    img: ["/img/listify.jpg", "/img/listify-phones.jpg"],
    title: "Listify",
    description:
      "Listify is a productivity-focused ToDo application built with JavaScript, designed to help users manage their tasks efficiently. With Listify, users can easily add and delete tasks, mark them as important, and organize them into different sections. The application allows users to track their progress by marking tasks as done and offers the flexibility to view tasks based on different timeframes, such as tasks due today or within the week. ",
    github: "https://github.com/stefanbrkic1/todo-app",
    deployment: "https://stefanbrkic1.github.io/todo-app/",
  },

  {
    id: uuidv4(),
    img: ["/img/battleship.jpg", "/img/battleship-phones.jpg"],
    title: "Battleship",
    description:
      "BATTLESHIP is a classic naval combat game made with JavaScript. Players place ships on a grid and take turns firing to sink their opponent's fleet. The game offers single-player and multiplayer modes and is thoroughly tested with Jest for reliable performance.",
    github: "https://github.com/stefanbrkic1/battleship",
    deployment: "https://stefanbrkic1.github.io/battleship/",
  },
  {
    id: uuidv4(),
    img: ["/img/weather-app.jpg", "/img/weather-app-phones.png"],
    title: "Weather App",
    description:
      "WeatherApp is a JavaScript-based application designed to display current weather data. By integrating external weather APIs, the app provides up-to-date weather information to users. With the implementation of a Geolocation API, users can easily search for locations through a search bar.",
    github: "https://github.com/stefanbrkic1/weather-app",
    deployment: "https://stefanbrkic1.github.io/weather-app/",
  },
  {
    id: uuidv4(),
    img: ["/img/resumify.jpg", "/img/resumify-phones.jpg"],
    title: "Resumify",
    description:
      "Resumify is a web application built with ReactJS for crafting resumes. Users can easily add their resume information, select a theme color, and export their resumes as PDF files. This user-friendly application simplifies the resume creation process, providing a streamlined and customizable experience for job seekers.",
    github: "https://github.com/stefanbrkic1/cv-app",
    deployment: "https://resumify-phi.vercel.app/",
  },
  {
    id: uuidv4(),
    img: ["/img/tictactoe.jpg", "/img/tictactoe-phones.jpg"],
    title: "Tic Tac Toe",
    description:
      "TicTacToe is a classic tic-tac-toe game implemented in JavaScript. Users can enjoy the game by playing 1v1 against another player or challenging the computer. This simple yet engaging game offers a fun way to pass the time while testing strategic thinking skills.",
    github: "https://github.com/stefanbrkic1/TicTacToe",
    deployment: "https://stefanbrkic1.github.io/TicTacToe/",
  },
  {
    id: uuidv4(),
    img: ["/img/sign-up.jpg", "/img/sign-up-phones.jpg"],
    title: "SIGN UP FORM",
    description:
      "This is a project focused on creating a user-friendly sign-up page with form validation. Implemented in JavaScript, this page ensures that users provide accurate information by validating their input in real-time.",
    github: "https://github.com/stefanbrkic1/SignUp-Form",
    deployment: "https://stefanbrkic1.github.io/SignUp-Form/",
  },
  {
    id: uuidv4(),
    img: ["/img/burgers.jpg", "/img/burgers-phones.jpg"],
    title: "BURGER HOUSE",
    description:
      "BURGER HOUSE is a website for a fast food restaurant, featuring three main pages: a landing page, a menu page, and a contact page. The landing page showcases the restaurant's delicious offerings and promotions, the menu page provides detailed information about the available food items, and the contact page offers easy access to location details and a contact form.",
    github: "https://github.com/stefanbrkic1/BurgerRestaurant",
    deployment: "https://stefanbrkic1.github.io/BurgerRestaurant/",
  },
  {
    id: uuidv4(),
    img: ["/img/books.jpg", "/img/books-phones.jpg"],
    title: "BOOKS MANAGER",
    description:
      "BOOKS MANAGER is a JavaScript-based application designed to help users manage their book collection. Users can add new books, mark them as read or unread, delete books, and choose different layouts for displaying their books. This versatile application makes it easy to keep track of your reading progress and organize your library according to your preferences.",
    github: "https://github.com/stefanbrkic1/BookLibrary",
    deployment: "https://stefanbrkic1.github.io/BookLibrary/",
  },
  {
    id: uuidv4(),
    img: ["/img/rps.jpg", "/img/rps-phones.jpg"],
    title: "ROCK PAPER SCISSORS",
    description:
      "Rock Paper Scissors is a classic game implemented using JavaScript. Players compete against the computer in a race to reach 5 wins. With simple rules—rock beats scissors, scissors beats paper, and paper beats rock—this game provides an entertaining challenge for players of all ages.",
    github: "https://github.com/stefanbrkic1/RockPaperScissors",
    deployment: "https://stefanbrkic1.github.io/RockPaperScissors/",
  },
];

export default projects;
