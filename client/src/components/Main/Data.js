import menuImage1 from "../../assets/images/menu-1.png";
import menuImage2 from "../../assets/images/menu-2.png";
import menuImage3 from "../../assets/images/menu-3.png";
import menuImage4 from "../../assets/images/menu-4.png";
import menuImage5 from "../../assets/images/menu-5.png";
import menuImage6 from "../../assets/images/menu-6.png";
import menuImage7 from "../../assets/images/menu-7.png";
import menuImage8 from "../../assets/images/menu-8.png";



const menu = [
  {
    img: menuImage1,
    trend: '4/5',
    title: 'React',
    disc:"React is a popular JavaScript library for building dynamic and responsive user interfaces.",
    link: {
      to: "/RquestionsSet",
      text: "Read More"
    }
  },


  {
    img: menuImage2,
    trend: '4.5/5',
    title: 'NodeJS',
    disc:"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to build.",
    link:"",
    link: {
      to: "/NquestionsSet",
      text: "Read More"
    }
  },
  {
    img: menuImage3,
    trend: '3.5/5',
    title: 'Express',
    disc:"Express is a popular and minimalist web framework for Node.js designed for building efficient server-side applications.",
    link:"",
    link: {
      to: "/EquestionsSet",
      text: "Read More"
    }
  },
  {
    img: menuImage4,
    trend: '5/5',
    title: 'MongoDB',
    disc:'MongoDB is a document-oriented NoSQL database. MongoDB uses a flexible and scalable data model, making it well-suited.',
    link:"",
    link: {
      to: "/MquestionsSet",
      text: "Read More"
    }
  },
  {
    img: menuImage5,
    trend: '4.8/5',
    title: 'ML ',
    disc:"Machine Learning is a field of artificial intelligence that focuses on the development of algorithms and statistical models",
    link:"",
    link: {
      to: "/MlquestionsSet",
      text: "Read More"
    }
  },
  {
    img: menuImage6,
    trend: '3/5',
    title: 'CSS',
    disc: "CSS stands for Cascading Style Sheets and is a styling language used for describing the presentation of a document written in HTML or XML.",
    link:"",
    link: {
      to: "/CssquestionsSet",
      text: "Read More"
    }
  },
  {
    img: menuImage8,
    trend: '4/5',
    title: 'Cpp',
    disc: "C++ is a high-level programming language with object-oriented features, designed for efficient system and application programming.",
    link:"",
    link: {
      to: "/CppquestionsSet",
      text: "Read More"
    }
  },
  {
    img: menuImage7,
    trend: '5/5',
    title: 'DSA',
    disc: "DSA stands for Data Structures and Algorithms, which are fundamental concepts in computer science for efficient data organization and manipulation.",
    link:"",
    link: {
      to: "/DsaquestionsSet",
      text: "Read More"
    }
  },
];

export { menu };
