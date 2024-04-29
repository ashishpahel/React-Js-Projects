import React from "react";
import { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import { toast } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from 'react-bootstrap/Spinner';


function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let data = await res.json();
      console.log(data);
      setCourses(data.data);
    } catch (error) {
      toast.error("Network error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-900">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh">
          {loading ? (
            <Spinner animation="border" variant="light"/>
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
