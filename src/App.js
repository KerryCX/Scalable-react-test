import {Box, Container, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useEffect, useState} from "react";
import {StyledCard} from "./components/Card";

export const App = () => {
  const [loading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [slicedData, setSlicedData] = useState([])
  const [limit, setLimit] = useState([4])
  const updateLimit = (event) => {
    setLimit(event.target.value);
  };

  useEffect(() => {
    fetch("https://emojihub.herokuapp.com/api/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(true);
          setData(result);
        },
        (error) => {
          setIsLoading(true);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    if(data) {
      setSlicedData(data.splice(0, limit))
    }
  }, [data, limit])


  return (
    <>
      <Box p={5} primary>
        <Typography variant='h1' align='center'>
          EMOJI LIST
        </Typography>
      </Box>
      <Container>
        <Box p={2}>
          <TextField 
            onChange={updateLimit}
            label="Limit"
            type='number'
            defaultValue={limit}
            >{limit}</TextField>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
          {slicedData.length && slicedData.map((props, i) => (
            <StyledCard {...props} key={i}/>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default App;
