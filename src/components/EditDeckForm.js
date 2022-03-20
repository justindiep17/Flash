import { useForm, useFieldArray, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { makeStyles, createStyles, StylesContext } from "@mui/styles";
import { styled } from "@mui/system";
import { Grid, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { createDeck, createDeck2 } from "../config/decks";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      width: 350,
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        width: 700,
      },
      [theme.breakpoints.up("md")]: {
        width: 1050,
      },
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
    },
    textInput: {
      width: "100%",
      marginBottom: "20px !important",
    },
    cardsList: {
      listStyle: "none",
      width: "100%",
      margin: "0px",
      padding: "0px",
      marginTop: "15px",
    },
    textInputCard: {
      marginBottom: "20px !important",
      width: "48.75%",
    },
    cardInputsBar: {
      background: "#e8f4ff",
      width: "100%",
      display: "flex",
      padding: "18px 20px",
      borderRadius: "7px",
    },
    cardIndexBar: {
      width: "100%",
      background: "#e8f4ff",
      padding: "12px 20px",
      borderRadius: "7px",
    },
  })
);

function AddCardInput() {
  return (
    <Grid width="100%">
      <TextField label="term" />
      <TextField label="definition" />
    </Grid>
  );
}

function EditDeckForm({ deck }) {
  const styles = useStyles();
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: deck,
    }
  );

  const onSubmit = (data) => {
    console.log(data);
    data.preventDefault();
  };

  const handleOnDragEnd = (result) => {
    console.log(result.source.index);
    console.log(result.destination.index);
    swap(result.source.index, result.destination.index);
    console.log(fields);
  };

  const { fields, remove, append, swap } = useFieldArray({
    control,
    name: "cards",
  });

  const inputLabelProps = {
    style: {
      fontWeight: 500,
    },
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="standard"
        label="Title"
        InputLabelProps={inputLabelProps}
        InputProps={{
          style: { fontWeight: 500, paddingBottom: "5px" },
        }}
        className={styles.textInput}
        {...register("title")}
      />
      <TextField
        variant="standard"
        multiline
        label="Description"
        InputLabelProps={inputLabelProps}
        InputProps={{
          style: {
            fontWeight: 500,
            height: "4.5rem",
            justifyContent: "flex-start",
            paddingBottom: "10px",
          },
        }}
        className={styles.textInput}
        {...register("description")}
      />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <ul
              className={styles.cardsList}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {fields.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Grid container style={{ paddingBottom: "8px" }}>
                        <Grid
                          item
                          xs={12}
                          className={styles.cardIndexBar}
                          marginBottom="4px"
                        >
                          <Typography
                            variant="h6"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            {index + 1}{" "}
                            <IconButton>
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Typography>
                        </Grid>
                        <Grid container className={styles.cardInputsBar}>
                          <TextField
                            label="Term"
                            variant="standard"
                            className={styles.textInputCard}
                            style={{ marginRight: "2.5%" }}
                            InputProps={{
                              style: { fontWeight: 500 },
                            }}
                            InputLabelProps={inputLabelProps}
                            {...register(`cards.${index}.term`)}
                          />
                          <Controller
                            render={({ field }) => (
                              <TextField
                                label="Definition"
                                variant="standard"
                                className={styles.textInputCard}
                                InputProps={{
                                  style: { fontWeight: 500 },
                                }}
                                InputLabelProps={inputLabelProps}
                                {...field}
                              />
                            )}
                            name={`cards.${index}.definition`}
                            control={control}
                          />
                        </Grid>
                      </Grid>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button
        type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}

export default EditDeckForm;

function App() {}
