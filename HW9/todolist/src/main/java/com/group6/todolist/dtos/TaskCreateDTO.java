package com.group6.todolist.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class TaskCreateDTO {
    @NotBlank(message = "Title must be not blank")
    @Size(min = 1, max = 50, message = "Title must be between 1 and 50")
    private String title;
    private boolean completed;
}
