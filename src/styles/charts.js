export const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
    // overflow: isFullscreen ? "hidden" : "auto",
  },
  priceDisplay: {
    marginBottom: "10px",
  },
  mainPrice: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  currency: {
    fontSize: "16px",
    color: "#666",
    marginLeft: "5px",
  },
  priceChange: {
    fontSize: "16px",
    color: "#4caf50",
  },
  nav: {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "20px",
    fontWeight:"bold"
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
  navItem: {
    padding: "10px 20px",
    cursor: "pointer",
  },
  navItemActive: {
    borderBottom: "2px solid #4c6fff",
    color: "#4c6fff",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  button: {
    background: "none",
    border: "1px solid #e0e0e0",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
    fontWeight:"bold"
  },
  timeSelector: {
    background: "none",
    border: "none",
    padding: "10px 10px",
    cursor: "pointer",
    fontWeight:"bold"
  },
  timeSelectorActive: {
    backgroundColor: "#4c6fff",
    color: "white",
    borderRadius: "5px",
  },
  chartContainer: {
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    padding: "20px",
    backgroundColor: "#ffffff",
    flex: 1,
    minHeight: 0, // Allows proper flex behavior
  },
  chartWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  areaChart: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "85%",
  },
  barChart: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "15%",
  },
  hoverValue: {
    position: "absolute",
    right: "10px",
    top: "10px",
    background: "#454545",
    padding: "8px 10px",
    borderRadius: "3px",
    color:"white",
    fontWeight:"bold"
  },
};