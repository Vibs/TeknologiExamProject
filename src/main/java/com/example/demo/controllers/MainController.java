package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {


    // dette er en get
    @GetMapping("/")
    public String index(){
        return "index";
    }

}
