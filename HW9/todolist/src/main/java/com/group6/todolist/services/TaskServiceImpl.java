package com.group6.todolist.services;

import com.group6.todolist.dtos.TaskUpdateDTO;
import com.group6.todolist.entities.Task;
import com.group6.todolist.exceptions.NotFoundException;
import com.group6.todolist.repositories.TaskRepository;
import com.group6.todolist.dtos.TaskCreateDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public Task createTask(TaskCreateDTO taskCreateDTO) {
        Task taskCreated = Task.builder()
                .title(taskCreateDTO.getTitle())
                .completed(taskCreateDTO.isCompleted())
                .build();
        return taskRepository.save(taskCreated);
    }

    @Override
    public Task updateTask(TaskUpdateDTO taskUpdateDTO, Long theId) {
        Task foundTask = taskRepository.findById(theId).orElse(null);

        if (foundTask == null) {
            throw new NotFoundException("Cannot find actor with id = " + theId);
        }
        foundTask.setCompleted(taskUpdateDTO.isCompleted());

        return taskRepository.save(foundTask);
    }
}
