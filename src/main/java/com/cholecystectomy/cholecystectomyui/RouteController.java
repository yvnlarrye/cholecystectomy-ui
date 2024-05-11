package com.cholecystectomy.cholecystectomyui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class RouteController {

    @GetMapping
    public String mainPage() {
        return "index";
    }

    @GetMapping("/patient/{id}")
    public String patientCard() {
        return "patient";
    }

    @GetMapping("/sign-up")
    public String sighUp() {
        return "sign-up";
    }

    @GetMapping("/sign-in")
    public String sighIn() {
        return "sign-in";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }

    @GetMapping("poll")
    public String poll() {
        return "poll";
    }

    @GetMapping("/error")
    public String error() {
        return "error";
    }

}
