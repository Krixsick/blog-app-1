import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
      <div className="p-4">
        {blogs.length === 0 ? (
          <p>No blogs available. Add one!</p>
        ) : (
          blogs.map((blog) => (
            <div className="border flex flex-col gap-[5px]">
              <h2 className="font-bold text-lg">{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
