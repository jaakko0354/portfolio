import { DoubleRightOutlined } from "@ant-design/icons";
import "../styles/Triangle.scss";

export const Triangle = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      <div className="background-triangle" />
      <div className="background-square">
        <DoubleRightOutlined
          rotate={90}
          style={{
            fontSize: "50px",
            color: "black",
          }}
          className="down-arrow"
          onClick={onClick}
        />
        <div className="background-bottom-triangle" />
        <div className="background-bottom-triangle-box" />
        <div className="background-bottom-triangle-shadow" />
      </div>
    </div>
  );
};
