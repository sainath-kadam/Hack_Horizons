// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Typography,
// } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const questions = [
//   {
//     id: 1,
//     text: 'What is React?',
//     answer:
//       'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
//   },
//   {
//     id: 2,
//     text: 'What are the key features of React?',
//     answer:
//       'React provides a virtual DOM, which allows for efficient updates and rendering of components. It also supports server-side rendering, one-way data binding, and a declarative programming model.',
//   },
//   {
//     id: 3,
//     text: 'What is JSX?',
//     answer:
//       'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to create and manage React components, as you can include HTML-like tags and attributes directly in your code.',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },
//   accordion: {
//     marginBottom: theme.spacing(2),
//     boxShadow: 'none',
//   },
//   summary: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//   },
// }));

// function RQuestionsSet() {
//   const classes = useStyles();
//   const [expandedId, setExpandedId] = useState(null);

//   const handleChange = (panelId) => (event, isExpanded) => {
//     setExpandedId(isExpanded ? panelId : null);
//   };

//   return (
//     <div className={classes.root}>
//       {questions.map((question) => (
//         <Accordion
//           key={question.id}
//           className={classes.accordion}
//           expanded={expandedId === question.id}
//           onChange={handleChange(question.id)}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${question.id}-content`}
//             id={`panel${question.id}-header`}
//             className={classes.summary}
//           >
//             <Typography variant="h6" component="h2" className={classes.icon}>
//               Q:
//             </Typography>
//             <Typography variant="h6" component="h2">
//               {question.text}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">{question.answer}</Typography>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }

// export default RQuestionsSet;
 import React from 'react'
 
 function RquestionsSet() {
   return (
     <div>
       Hlo
     </div>
   )
 }
 
 export default RquestionsSet
 