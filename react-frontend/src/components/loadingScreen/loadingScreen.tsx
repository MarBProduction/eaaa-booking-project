import "./loadingScreen.css";

interface loadingScreenProps {
  showLoader: boolean;
}

function LoadingScreen({ showLoader }: loadingScreenProps) {
  return (
    <div
      id="loading-content"
      style={showLoader ? { display: "block" } : { display: "none" }}
    >
      <div id="loader-wrapper">
        <div id="loader"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
