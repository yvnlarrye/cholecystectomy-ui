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

    @GetMapping("/poll/complete")
    public String pollComplete() {
        return "poll-complete";
    }

    @GetMapping("/poll/{id}")
    public String getPollWithId() {
        return "poll-preview";
    }

    @GetMapping("/doctor/create")
    public String createDoctor() {
        return "sign-up-doctor";
    }

    @GetMapping("/edit-poll/{id}")
    public String editPoll() {
        return "edit-poll";
    }

}
