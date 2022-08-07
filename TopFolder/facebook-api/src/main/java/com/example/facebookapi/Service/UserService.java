package com.example.facebookapi.Service;

import com.example.facebookapi.Model.User;
import com.example.facebookapi.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public User submituser(User user){
//        Date date=new Date();
//        long time=date.getTime();
//        Timestamp t=new Timestamp(time);
//        user.setJoiningDate(t);

        user.setActive(true);

        return userRepository.save(user);
    }
    public ArrayList<User> retrieveAlluser(){

        return userRepository.findAll();
    }
    public  User getUser(String userId){
        return userRepository.findAllByUserId(userId);
    }
}
