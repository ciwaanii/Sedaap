// components/Guest/ScrollLink.js
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollLink({ toId, children, className }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
    }

    setTimeout(() => {
      const target = document.getElementById(toId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay agar scroll bekerja setelah render
  };

  return (
    <a href={`#${toId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
