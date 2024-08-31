import { DoubleRightOutlined } from "@ant-design/icons";
import "../styles/Background.scss";

export const Triangle = () => {
  return (
    <div>
      <div
        className="background-triangle"
        style={{ transform: `translateY(-${scrollY * 0.4}px)` }}
      />
      <div
        className="background-square"
        style={{ transform: `translateY(-${scrollY * 0.4}px)` }}
      >
        <DoubleRightOutlined
          rotate={90}
          style={{
            fontSize: "50px",
            color: "black",
          }}
          className="down-arrow"
          onClick={() => {
            document.documentElement.scrollTo({ top: 520, behavior: "smooth" });
          }}
        />
        <div className="background-bottom-triangle" />
        <div className="background-bottom-triangle-box" />
        <div className="background-bottom-triangle-shadow" />
      </div>
    </div>
  );
};
