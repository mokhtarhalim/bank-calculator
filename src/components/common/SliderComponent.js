import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';


const SliderComponent = (props) => {
  return (

    <Stack my={1.4}> 
      <Stack gap={1}>
        <Typography variant='subtitle2'>{props.label}</Typography>
        <Typography variant='h6'>{props.unit} {props.amount}</Typography>
      </Stack>

      <Slider
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={props.step}
        marks
        onChange={props.onChange}
        value={props.value}
      />
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='caption' color='text.secondary'>{props.unit} {props.min}</Typography>
        <Typography variant='caption' color='text.secondary'>{props.unit} {props.max}</Typography>
      </Stack>
    </Stack>

  )
}

export default SliderComponent