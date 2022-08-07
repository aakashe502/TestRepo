import { Paper } from '@mui/material';
import React, { Component } from 'react';
import Post from './Post';
import "./PostContainer.css";

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        data:[]
     }
     getdata=()=>{//calling rest from here
        let json=[
            {
            "post_id":1,
            "user_id":123445,
            "user_img":"url..",
            "user_name":"Aakash Kumar",
            "description":"loved this walpaper",
            "post_img":"",
            "like":"25"
        },
        {
            "post_id":2,
            "user_id":123445,
            "user_img":"url..",
            "user_name":"brock lesnar",
            "description":"wenning defending wwe champion",
            "post_img":"",
            "like":"256"
        }
    ]
        this.setState({data:json}); 
     }
     
     componentDidMount(){
        this.getdata();
     }
    render() { 
        return ( 
            <div>
                 
                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                    
                }
              
            </div>
        );
    }
}
 
export default PostContainer;