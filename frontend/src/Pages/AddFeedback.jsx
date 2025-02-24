import React, { useEffect, useState } from 'react'
import {TextField, Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddFeedback = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [feedback, setFeedback] = useState({
        courseId: '',
        courseName: '',
        duration: '',
        rating: '',
        comments: ''
      });
   
  const updateValue = ()=>{
    if(location.state!=null){
      axios.put(`http://localhost:8000/feedback/update/${location.state.val._id}`,feedback).then((res)=>{
        alert(res.data.message)
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    }else{
      if (
        !feedback.courseId ||
        !feedback.courseName ||
        !feedback.duration ||
        !feedback.rating ||
        !feedback.comments
      ) {
        alert("Please fill in all fields before submitting.");
        return; 
      }
      axios.post('http://localhost:8000/feedback/add',feedback).then((res)=>{
        alert(res.data.message)
        navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
    }
  }
   useEffect(()=>{
    if(location.state!=null){
      setFeedback({...feedback,
        courseId:location.state.val.courseId,
        courseName: location.state.val.courseName,
        duration: location.state.val.duration,
        rating: location.state.val.rating,
        feedback: location.state.val.feedback,
      })
    }else{
      setFeedback({...feedback, 
        courseId:'',
        courseName: '',
        duration: '',
        rating: '',
        feedback: '',
      })
    }
   },[])
  return (
    <div style={{textAlign:'center',margin: '10%', marginRight:'170px'}}>
      <Grid>
        <Typography variant="h4" style={{ color: 'GREY', fontWeight: 'bold' }}>
            {location.state ? 'EDIT FEEDBACK':'ADD FEEDBACK'}
        </Typography>
        <br />
        <Grid>
          <TextField  fullWidth
            className="textField"
            label="Course ID"
            variant="outlined"
            name="courseId"
            value={feedback.courseId}
            onChange={(e)=>{setFeedback({...feedback,courseId:e.target.value})}}
        
          />
        </Grid>
        <br />
        <Grid>
          <TextField fullWidth
            className="textField"
            label="Course Name"
            variant="outlined"
            name="courseName"
            value={feedback.courseName}
            onChange={(e)=>{setFeedback({...feedback,courseName:e.target.value})}}
            
            
          />
        </Grid>
        <br />
        <Grid>
          <TextField fullWidth
            className="textField"
            label="Duration"
            variant="outlined"
            name="duration"
            value={feedback.duration}
            onChange={(e)=>{setFeedback({...feedback,duration:e.target.value})}}
           
            
          />
        </Grid>
        <br />
        <Grid>
          <TextField fullWidth
            className="textField"
            label="Rating"
            variant="outlined"
            name="rating"
            value={feedback.rating}
            onChange={(e)=>{setFeedback({...feedback,rating:e.target.value})}}
            
            
          />
        </Grid>
        <br />
        <Grid>
          <TextField fullWidth
            className="textField"
            label="Comments"
            variant="outlined"
            name="comments"
            value={feedback.comments}
            onChange={(e)=>{setFeedback({...feedback,comments:e.target.value})}}
            
            
          />
        </Grid>
        <br />
        <Grid>
          <Button fullWidth color="error" variant="contained" onClick={updateValue} >
            {location.state ? 'UPDATE FEEDBACK':'ADD FEEDBACK'}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddFeedback