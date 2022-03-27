import "../styles/Loader.css";

function FullPageLoader() {
  return (
    <div className="flex justify-ct align-ct">
      <div className="ripple-loader" style={{height: "100vh"}}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default FullPageLoader;
