import { useEffect, useRef, useState } from "react";
import "../styles/Base.scss";
import { Avatar } from "antd";
import cvkuva from "../assets/cv-kuva.jpg";
import Projects from "./Projects";
import { Triangle } from "./Triangle";

export default function Base() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const [isProjecsVisible, setIsProjectsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (scrollY >= 500) {
      setIsProjectsVisible(true);
    }
  }, [scrollY]);

  //https://stackoverflow.com/a/71682214
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

  const onMoveToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const top = ref.current.offsetTop - ref.current.clientHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="background-color">
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

      <div>
        <Triangle onClick={() => onMoveToSection(projectsRef)} />

        <div ref={projectsRef}>
          <Projects />
        </div>
        <Triangle onClick={() => onMoveToSection(projectsRef)} />
        <div style={{ height: "270px" }}></div>
        <Triangle onClick={() => onMoveToSection(projectsRef)} />
      </div>
    </div>
  );
}
