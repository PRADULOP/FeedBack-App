import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/feedback').then((res)=>{
      setFeedbacks(res.data)
    }).catch((error)=>{
      console.log(error)
    })},[])

    const handleUpdate=(val)=>{
      navigate('/addfeedback',{state:{val}})
  }

  const handleDelete = (val) => {
    axios.delete(`/api/feedback/delete/${val._id}`).then((res)=>{
      alert(res.data.message)
      setFeedbacks(feedbacks.filter(item=>item._id!=val._id));
    }).catch((error)=>{
      console.log(error)
  })
    
  };

  return (
    <div style={{ margin: '7%' }}>
      <Grid container spacing={3}>
        {feedbacks.map((feedback) => (
          <Grid key={feedback._id} item xs={12} sm={6} md={4}>  
            <Card sx={{ height: '250px',  
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',width: '300px' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography style={{fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                  Course ID: {feedback.courseId}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Course Name: {feedback.courseName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Duration: {feedback.duration}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Rating: {feedback.rating}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button
                  size="small"
                  variant="contained"
                  color="warning"
                  onClick={()=> handleUpdate(feedback)}
                  
                >
                  Update
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={()=>handleDelete(feedback)}
                  
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
