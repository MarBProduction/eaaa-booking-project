package com.marbproduction.bookingproject.controllers;

import com.marbproduction.bookingproject.models.PostHelloDTO;
import com.marbproduction.bookingproject.models.entities.HelloEntity;
import com.marbproduction.bookingproject.services.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hello")
public class HelloWorldController {

    @Autowired
    private HelloWorldService helloWorldService;

    @GetMapping
    public String helloWorld (){
        return helloWorldService.helloWorld();
    }

    @PostMapping
    public HelloEntity createHelloWorld(@RequestBody PostHelloDTO postHelloDTO){
        return helloWorldService.createHelloWorld(postHelloDTO);
    }
}
