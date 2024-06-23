"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Card,
  Typography,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "@/styles/TodoList.module.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Pick up kids from school",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Prepare for presentation",
      isCompleted: true,
    },
    {
      id: 3,
      task: "Print Statements",
      isCompleted: false,
    },
    {
      id: 4,
      task: "Create invoice",
      isCompleted: false,
    },
    {
      id: 5,
      task: "Call John",
      isCompleted: true,
    },
    {
      id: 6,
      task: "Meeting with Alisa",
      isCompleted: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const statusChangedHandler = (event: any, id: any) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: event.target.checked } : todo,
    );
    setTodos(updatedTodos);
  };

  const addTodo = (event: any) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Prevent adding empty tasks

    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: inputValue,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const removeTodo = (id: any) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const inputChangeHandler = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <Card className={styles.card}>
      <Typography className={styles.title}>To Do List</Typography>
      <form className={styles["add-items"]} onSubmit={addTodo}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={10} md={10} className={styles["input-wrapper"]}>
            <TextField
              type="text"
              variant="outlined"
              value={inputValue}
              onChange={inputChangeHandler}
              placeholder="Enter Text"
              required
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2} md={2} className={styles["button-wrapper"]}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.button}
              fullWidth
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className={styles["list-wrapper"]}>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id} dense>
              <Checkbox
                checked={todo.isCompleted}
                onChange={(event) => statusChangedHandler(event, todo.id)}
              />
              <ListItemText primary={todo.task} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
};

export default TodoList;
