package com.group6.todolist.services;

import com.group6.todolist.dtos.TaskUpdateDTO;
import com.group6.todolist.entities.Task;
import com.group6.todolist.dtos.TaskCreateDTO;

import java.util.List;

public interface TaskService {
    List<Task> findAll();
    Task createTask(TaskCreateDTO taskCreateDTOs);
    Task updateTask(TaskUpdateDTO taskUpdateDTO, Long theId);
}
