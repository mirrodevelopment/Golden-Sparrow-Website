package com.goldensparrow.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouteController {

    @GetMapping("/destination/{slug}")
    public String forwardToHome() {
        // Forward internally so that Spring Boot serves index.html,
        // and the frontend JavaScript routing can resolve the URL slug.
        return "forward:/index.html";
    }

    @GetMapping("/festival/{slug}")
    public String forwardFestivalToHome() {
        // Forward so that the frontend FestivalView JS handles the slug.
        return "forward:/index.html";
    }

    @GetMapping("/nest")
    public String forwardNestToHome() {
        // Forward so that the frontend handles the Nest Dashboard view.
        return "forward:/index.html";
    }

    @GetMapping("/destinations")
    public String forwardDestinationsToHome() {
        // Forward so that the frontend handles the All Destinations view.
        return "forward:/index.html";
    }

    @GetMapping("/packages")
    public String forwardPackagesToHome() {
        // Forward so that the frontend handles the Holiday Packages view.
        return "forward:/index.html";
    }
}
