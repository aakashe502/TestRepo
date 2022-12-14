import { Grid } from '@mui/material';
import React, { Component } from 'react';
import LeftSide from './LeftsidePanel/LeftSide';
import "./Mainpage.css";
import PostContainer from './PostContainer/PostContainer';
import StatusBAr from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';



class Layout extends Component {
    render() { 
        return (
            <div className='mainpage_container'>
               <Grid container >
                <Grid item xs={3}>
                <LeftSide/>
                </Grid>
                <Grid item xs={6} className="middlecontainer">
                    <StatusBAr/>
                    <UploadSection/>
                    <PostContainer/>
                         
                </Grid>
                <Grid item xs={3}>right</Grid>
               </Grid>

            </div>
        );
    }
}
 
export default Layout;