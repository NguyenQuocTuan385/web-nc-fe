package com.group6.todolist.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TaskUpdateDTO {
    @NotNull(message = "Completed is not null")
    private boolean completed;
}
