package com.marbproduction.bookingproject.services;

import com.marbproduction.bookingproject.models.PostHelloDTO;
import com.marbproduction.bookingproject.models.entities.HelloEntity;
import com.marbproduction.bookingproject.repositories.HelloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloWorldService {

    @Autowired
    private HelloRepository helloRepository;

    public String helloWorld (){
        return "Hello World";
    }

    public HelloEntity createHelloWorld (PostHelloDTO postHelloDTO){
        HelloEntity hello = new HelloEntity(postHelloDTO);

        return helloRepository.save(hello);
    }
}
