import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
function Header() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    // Check scroll position on window scroll
    const handleScroll = () => {
      // Change the threshold value (e.g., 100px) as needed
      if (window.scrollY > 10) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      className="rounded-3xl fixed top-0 mt-[5px] flex w-full h-16 justify-between bg-blue-100"
      animate={{ width: expanded ? "98%" : "50%" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="header-subtitles">w</motion.div>
      <div className="header-subtitles gap-[35px] mr-[20px]">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/add">
          <button>Add Blog</button>
        </Link>
        <Link to="/signin">
          <button>Sign in</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;
