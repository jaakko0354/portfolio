import { useEffect, useRef, useState } from "react";
import "../styles/Background.scss";
import { Avatar } from "antd";
import cvkuva from "../assets/cv-kuva.jpg";
import Projects from "./Projects";
import { Triangle } from "./Triangle";

export default function Background() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState(0);
  const [showAvatar, setShowAvatar] = useState(true);
  const [showProjecs, setShowProjects] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //https://stackoverflow.com/a/71682214
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowAvatar(window.scrollY < 550);
      if (window.scrollY > 350 && window.scrollY < 1100) {
        setShowProjects(true);
      } else {
        setShowProjects(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const avatarClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="background-color">
      {showAvatar ? (
        <div className="avatar-container">
          <div
            className={`profile-picture ${isActive ? "active" : ""}`}
            onClick={() => avatarClick()}
          >
            <Avatar size={300} src={cvkuva} className="front" />
            <div className="back " />
          </div>
          <div className="info-ball" onClick={() => avatarClick()} />
          <p className="info-text" onClick={() => avatarClick()}>
            About me
          </p>
        </div>
      ) : (
        <div className="avatar-placeholder" />
      )}

      <Triangle />

      {showProjecs ? (
        <Projects ref={projectsRef} scrollY={scrollY} />
      ) : (
        <div className="projects-placeholder" />
      )}
      <Triangle />
      <div style={{ height: "450px" }}></div>
      <Triangle />
    </div>
  );
}
