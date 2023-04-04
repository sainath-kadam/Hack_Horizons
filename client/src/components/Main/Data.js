import menuImage1 from "../../assets/images/menu-1.png";
import menuImage2 from "../../assets/images/menu-2.png";
import menuImage3 from "../../assets/images/menu-3.png";
import menuImage4 from "../../assets/images/menu-4.png";
import menuImage5 from "../../assets/images/menu-5.png";
import menuImage6 from "../../assets/images/menu-6.png";
// import cartImage1 from "./assets/images/cart-item-1.png";
// import cartImage2 from "./assets/images/cart-item-2.png";
// import cartImage3 from "./assets/images/cart-item-3.png";
// import cartImage4 from "./assets/images/cart-item-4.png";
// import productImage1 from "./assets/images/product-1.png";
// import productImage2 from "./assets/images/product-2.png";
// import productImage3 from "./assets/images/product-3.png";
// import reviewImage1 from "./assets/images/pic-3.png";
// import reviewImage2 from "./assets/images/pic-2.png";
// import reviewImage3 from "./assets/images/pic-1.png";
// import blogImage1 from "./assets/images/blog-1.jpeg";
// import blogImage2 from "./assets/images/blog-2.jpeg";
// import blogImage3 from "./assets/images/blog-3.jpeg";
import RquestionsSet from "../Questionset/RquestionsSet";
import NquestionsSet from "../Questionset/NquestionsSet";

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
];

// const cart = [
//   {
//     img: cartImage1,
//   },
//   {
//     img: cartImage2,
//   },
//   {
//     img: cartImage3,
//   },
//   {
//     img: cartImage4,
//   },
// ];

// const product = [
//   {
//     img: productImage1,
//     title:'Burger',
//     trend:'$18'
//   },
//   {
//     img: productImage2,
//     title:'Special Pizza',
//     trend:'$20'
//   },
//   {
//     img: productImage3,
//     title:'Ice Cram',
//     trend:'$10'
//   },
// ];
// const review = [
//   {
//     img: reviewImage1,
//     name:'shiva',
//     rating:'fas fa-star',
//     disc : "The food at this restaurant was incredible! Every dish we ordered was packed with flavor and cooked to perfection. We especially loved the steak and seafood options. Highly recommend!"
//   },
//   {
//     img: reviewImage2,
//     name:'aji',
//     rating:'fas fa-star',
//     disc : "Delicious and flavorful, with excellent presentation."
//   },
//   {
//     img: reviewImage3,
//     name:'tejas',
//     rating:'fas fa-star',
//     disc : "The food was absolutely amazing and exceeded all of my expectations"
//   },
// ];
// const blog = [
//   {
//     img: blogImage1,
//     title:"Spicy slice",
//     disc: "Food is a vital source of energy and nutrients that our bodies require to function properly and maintain good health.",
//     admin:"Sainath"
//   },
//   {
//     img: blogImage2,
//     title:"Bread omlete with Chese",
//     disc: " The type and quality of food we consume can have a significant impact on our physical and mental well-being, as well as our risk",
//     admin:"Sainath"
//   },
//   {
//     img: blogImage3,
//     title:"Juice",
//     disc: " Food is important for providing energy and nutrients to our bodies, and the quality of our diet can impact our health and disease risk.",
//     admin:"Sainath"
//   },
// ];
export { menu };
