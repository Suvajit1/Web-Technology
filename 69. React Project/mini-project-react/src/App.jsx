import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";

function App() {
  let handelClick = () => {
    console.log("Button Clicked");
  };

  return (
    <>
      material UI
      <br />
      <Button variant="contained" onClick={handelClick}>
        Click me!
      </Button>
      <Button variant="contained" onClick={handelClick} disabled>
        Click me2!
      </Button>
      <Button variant="contained" color="success" size="small">
        Click me3!
      </Button>
      <br />
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
        Delete
      </Button>
      <Alert severity="error">This is an deletion Alert.</Alert>
    </>
  );
}

export default App;
