import React, { useState, useEffect } from "react";
import "./Cursor.css";
import quill_cursor from "./quill_cursor.png";
import DH1 from "./DH1.png";

const Cursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY - 50 });
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${cursorVisible ? "visible" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <img
        className="cursor_feather"
        src={quill_cursor}
        height={70}
        alt="custom-cursor"
      />
    </div>
  );
};

export default Cursor;
