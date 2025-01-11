import "./responsiveLoadingScreen.css";

interface responsiveLoadingScreenProps {
  showLoader: boolean;
}

function ResponsiveLoadingScreen({ showLoader }: responsiveLoadingScreenProps) {
  return (
    <div
      id="responsive-loading-content"
      style={showLoader ? { display: "block" } : { display: "none" }}
    >
      <div id="responsive-loader"></div>
    </div>
  );
}

export default ResponsiveLoadingScreen;
