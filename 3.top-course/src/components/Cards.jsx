import React from "react";
import { useState } from "react";
import Card from "./Card"; // Assuming you have a Card component

function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (!category || category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category] || []; 
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
