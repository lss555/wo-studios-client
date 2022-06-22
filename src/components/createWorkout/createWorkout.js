import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

export default function CreateWorkout() {

  const [workout, setWorkout] = useState({
    registrationNumber: '',
    name: '',
    date: '',
    description: '',
    exersise: '',
    bodyParts: ''
  });

  const createWorkout = () => {
    axios.post('http://localhost:5000/workouts', workout)
  }
  return (
    <div>
    <h2>Create Workout</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="ID number" variant="filled" value={workout.registrationNumber} onChange={(event) => {
          setWorkout({...workout, registrationNumber: event.target.value})
        }}/>
        <TextField id="filled-basic" label="Name" variant="filled" value={workout.name} onChange={(event) => {
          setWorkout({...workout, name: event.target.value})
        }}/>
        <TextField id="filled-basic" label="Description" variant="filled" value={workout.description} onChange={(event) => {
          setWorkout({...workout, description: event.target.value})
        }}/>
        <TextField id="filled-basic" label="exersise" variant="filled" value={workout.exersise} onChange={(event) => {
          setWorkout({...workout, exersise: event.target.value})
        }}/>
        <TextField id="filled-basic" label="Muscles Used" variant="filled" value={workout.bodyParts} onChange={(event) => {
          setWorkout({...workout, bodyParts: event.target.value})
        }}/>
        <Button variant="contained" onClick={createWorkout}>Sumbit</Button>
      </Box>
    </div>
  );
}
