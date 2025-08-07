// This is how you write comments inside jsx but this wont work under return jsx block or you can say jsx markup the double slash will through error
{/*this is how you write comments inside return block or jsx markup*/}
//while using simple javascript you can use (/*...*/) to write comments.

//Web Fundamentals (Quick Review)
//Before diving deep into React, you need solid HTML, CSS, and JavaScript basics.
//HTML5: Semantic tags, forms, tables, media.
//CSS3: Flexbox, Grid, Responsive design, animations.
//JavaScript: Variables, functions, DOM manipulation, ES6+ features.
//📌 Practical: Build a simple responsive website without React.

//📚 Lesson 1 — React Basics
//1. What is React?
//React is a JavaScript library for building user interfaces (UI).
//It is component-based — you build small reusable parts and combine them.
//It updates only what’s needed in the UI using the Virtual DOM (fast performance).
//Example:
//Instead of refreshing the whole page when a button is clicked, React updates only the part that changed.


//2. Setting Up a React Project
//We’ll use Vite (faster than Create React App).

//# Create project
//npm create vite@latest

// # Project name
//  my-app, you can also write project name in the above step while creating the project

//# Choose:
//# ✔ Framework: React
//# ✔ Variant: JavaScript

//# Go inside folder
//cd my-app

//# Install dependencies
//npm install

//# Run project
//npm run dev


//3. Components
//Components are reusable pieces of UI.
//They can be functional or class-based.
//Functional components are simpler and recommended for most cases.
//it should always start with a capital letter.

//Example of a functional component:
//function MyComponent() {
   // return <h1>Hello, World!</h1>;
//}

//4. Understanding JSX
//JSX: JavaScript + XML/HTML syntax.
//You can write HTML inside JavaScript functions.


//CREATE A COMPONENT
import React from 'react';
function ReactBasics() {
    return (
<div className="react-basics bg-white p-6 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 max-w-3xl mx-auto mt-36 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2 border-indigo-200">
    React Basics
  </h2>

  <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-pretty">
    <li>
      <span className="text-indigo-600 font-semibold hover:underline cursor-help">React</span> is a powerful library for building user interfaces.
    </li>
    <li>
      It allows you to create reusable <span className="text-indigo-600 font-semibold hover:underline cursor-help">components</span> that manage their own state.
    </li>
    <li>
      Components can be nested, reused, and composed to build complex UIs from small pieces.
    </li>
    <li>
      <span className="text-indigo-600 font-semibold hover:underline cursor-help">JSX</span> makes it easy to write HTML-like syntax in JavaScript.
    </li>
    <li>
      React uses a virtual DOM for efficient UI updates and rendering.
    </li>
  </ul>
</div>



  
    )
}
export default ReactBasics;
//Rules of JSX:
//It IS MANDATORY To Return only one parent element which can be h2 here to add more elements you can use a fragment or a div.
//Use className instead of class.
//Close all tags (<img /> not <img>).
//for practice you can remove the div or fragment and see it will throw an error.



