import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Grid() {
  const [value, setValue] = React.useState(2);

  return (
     <div style={{marginTop: "20px", marginLeft: "50px"}}>
    
    <div>
     <img
     src= "movieposter.jpg"
     alt= "Description"
     style={{
        width: "15%",
        height: "250px",
        borderRadius: "35px",
        marginLeft: "500px"

    }}
    />
    </div>
    <div style={{marginLeft: "510px", marginTop: "20px"}}>
        <Typography component="legend">Rating</Typography>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        />
    </div>
    <div style={{marginLeft: "550px"}}>
    <p>Avatar</p>
    </div>
    
    </div>
        
        
    
    
  );
}
