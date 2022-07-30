import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Input, Button, Grid, Typography } from "@mui/material";

function App() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography sx={{ color: "blue", fontSize: 20 }}>
          Country Flag Searcher
        </Typography>
        <Grid item xs={3}>
          <Input onChange={(e) => setKeyword(e.target.value)}></Input>
          <Button
            onClick={() => {
              setError(false);
              axios
                .get("https://restcountries.com/v3.1/name/" + keyword)
                .then(function (response) {
                  console.log(response.data);
                  setResult(response.data[0].flags.png);
                })
                .catch(function () {
                  setError(true);
                });
            }}
          >
            Search
          </Button>
        </Grid>
        {result && <img src={result}></img>}
        {error && (
          <Typography sx={{ color: "red", fontSize: 20 }}>
            Sorry, no result found!
          </Typography>
        )}
      </Grid>
    </div>
  );
}

export default App;
