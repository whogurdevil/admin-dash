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

const TodoListComponent = () => {
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

  const statusChangedHandler = (event, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: event.target.checked } : todo,
    );
    setTodos(updatedTodos);
  };

  const addTodo = (event) => {
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

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Card
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography fontWeight={"bold"} variant="h6">
        To Do List
      </Typography>
      <form
        className="add-items"
        onSubmit={addTodo}
        style={{ paddingBlock: 2, display: "flex", width: "100%" }}
      >
        <Grid container spacing={1} justifyContent={"space-between"}>
          <Grid
            item
            xs={10}
            md={10}
            justifyContent={"space-between"}
            display={"flex"}
          >
            <TextField
              type="text"
              label="What do you need to do today?"
              variant="outlined"
              value={inputValue}
              onChange={inputChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={1} md={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ display: "flex", height: "100%" }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="list-wrapper">
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id} dense sx={{ paddingX: 0 }}>
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

export default TodoListComponent;
