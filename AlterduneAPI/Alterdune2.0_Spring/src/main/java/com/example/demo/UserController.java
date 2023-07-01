package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/nameForm")
    public String showNameForm() {
        return "nameForm.html";
    }

    @PostMapping("/saveName")
    public String saveUserName(@RequestParam("name") String name) {
        userService.saveUserName(name);
        return "redirect:/";
    }

    @GetMapping("/users")
    public String getAllUserNames(Model model) {
        model.addAttribute("userList", userService.getAllUserNames());
        return "userList";
    }
}
