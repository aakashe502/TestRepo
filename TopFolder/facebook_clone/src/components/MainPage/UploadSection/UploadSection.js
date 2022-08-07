import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';

import "./UploadSection.css";

import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";

class UploadSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
               <Paper className="upload_container">
                
               <div className='upload_top'>
                <div >
                    <Avatar clasName="upload_image" src="https://scontent.fbho4-3.fna.fbcdn.net/v/t1.6435-1/120015140_319554869348445_1586273488652125233_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XG4umKxzgn4AX_pRXup&_nc_ht=scontent.fbho4-3.fna&oh=00_AT_nlujeqKxdRSO9URPvmJtILz3Oa1hKoUhgw_wnlfSf-Q&oe=62FD4FC2"/>
                </div>
                <div >
                    <input type="text"  className='upload_text' placeholder='whats on your mind?'/>
                </div>
               </div>
               
               <div className="upload_bottom">
                <div className='upload_tabs'>
                    <img src={live} width="20px"    />
                    <div className='upload_texts'>Live Video</div>
                </div>
                <div className='upload_tabs'>
                <img src={image}  width="20px"/>
                <div className='upload_texts'>Photo/Video</div>
                </div>

                <div className='upload_tabs'>
                <img src={feeling}  width="20px"/>
                <div className='upload_texts'> Feeling/Activities</div>
                </div>

               </div>
               
               </Paper>
            </div>
         );
    }
}
 
export default UploadSection;