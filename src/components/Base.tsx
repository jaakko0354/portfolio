import { useEffect, useRef, useState } from "react";
import "../styles/Base.scss";
import { Avatar } from "antd";
import cvkuva from "../assets/cv-kuva.jpg";
import Projects from "./Projects";
import { Triangle } from "./Triangle";
import lottie from "lottie-web";
import valve_pressure_animation from "../animation/valve_pressure_release.json";

export default function Base() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<any>(null);

  const [isActive, setIsActive] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      const animationInstance = lottie.loadAnimation({
        container: lottieRef.current,
        animationData: valve_pressure_animation,
        renderer: "html",
        rendererSettings: {
          imagePreserveAspectRatio: "xMidYMid meet",
        },
        loop: false,
        autoplay: false,
      });

      animationInstanceRef.current = animationInstance;
    }
  }, []);

  const avatarClick = () => {
    setIsActive(!isActive);
    setHasClicked(true);
    if (!isActive && animationInstanceRef.current) {
      animationInstanceRef.current.goToAndStop(15, true);
      animationInstanceRef.current.play();
    }
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
          className={`profile-picture ${
            hasClicked ? (isActive ? "active" : "inactive") : ""
          }`}
          onClick={() => avatarClick()}
        >
          <div className="hinge top" />
          <div className="hinge bottom" />
          <Avatar size={300} src={cvkuva} className="front" />
          <div className="back ">
            <div className="panel" />
            <div className="hinge-back top" />
            <div className="hinge-back bottom" />
          </div>
        </div>
        <div className="info-ball" onClick={() => avatarClick()}>
          <div
            className={`shadow-element ${
              hasClicked ? (isActive ? "active" : "inactive") : ""
            }`}
          />
        </div>
        <div
          className="valve-pressure-animation"
          ref={lottieRef}
          style={{ width: "1500px", height: "1500px" }}
        ></div>
        <p className="info-text" onClick={() => avatarClick()}>
          About me
        </p>
      </div>

      <div style={{ zIndex: 1 }}>
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
