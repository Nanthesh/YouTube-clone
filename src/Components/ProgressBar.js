import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from '@mui/material/LinearProgress';


const LinearIndeterminate = () => {
    const StyledLinearProgress = withStyles({
        colorPrimary: {
            backgroundColor: "#1F1F1F"
        },
        barColorPrimary: {
            backgroundColor: "red"
        }
    })(LinearProgress);
      return (
        <div>
          <StyledLinearProgress style={{ height : '2px' }}/>
        </div>
      );
}

export default LinearIndeterminate