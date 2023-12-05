package com.group6.todolist.controllers;

import com.group6.todolist.dtos.TaskCreateDTO;
import com.group6.todolist.dtos.TaskUpdateDTO;
import com.group6.todolist.entities.Task;
import com.group6.todolist.services.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "${fe.url}")
public class TaskController {
    private final TaskService taskService;

    @GetMapping("")
    ResponseEntity<List<Task>> getAllTasks() {
        return ResponseEntity.status(HttpStatus.OK).body(taskService.findAll());
    }

    @PostMapping("")
    ResponseEntity<Task> createTask(@RequestBody @Valid TaskCreateDTO taskCreateDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.createTask(taskCreateDTO));
    }

    @PutMapping("/{id}")
    ResponseEntity<?> updateTask(@RequestBody @Valid TaskUpdateDTO taskUpdateDTO, @PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(taskService.updateTask(taskUpdateDTO, id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
