import { TypeAnimation } from "react-type-animation";


export default function Beginning() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: '#13031d',
  };

  const textBoxStyle = {
    color: "white",
    textAlign: "center",
    fontFamily: "'Geist Mono', monospace",
    fontSize: '18px'
  };

  return (
    <div style={containerStyle}>
      <div style={textBoxStyle}>
        <TypeAnimation
          sequence={["What are you doing here..?", 500]}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
