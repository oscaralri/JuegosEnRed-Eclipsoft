package com.example.demo;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final String fileName = "users.txt";
    private List<String> userList;

    public UserService() {
        userList = readUsersFromFile();
    }

    public void saveUserName(String name) {
        userList.add(name);
        writeUsersToFile();
    }

    public List<String> getAllUserNames() {
        return userList;
    }

    private void writeUsersToFile() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            for (String name : userList) {
                writer.write(name);
                writer.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private List<String> readUsersFromFile() {
        List<String> users = new ArrayList<>();
        try {
            if (Files.exists(Paths.get(fileName))) {
                users = Files.readAllLines(Paths.get(fileName));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return users;
    }
}

