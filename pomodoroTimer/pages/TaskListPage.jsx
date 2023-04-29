import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import { tasks as defaultTasks } from "../data/tasks";
import { TaskList } from "../components/tasks/TaskList";

import {
  getCurrentTasks,
  updateCurrentTasks,
  addTask,
} from "../utils/taskController";
import { useEffect, useState } from "react";



export default function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getCurrentTasks();
        const tasks = fetchedTasks == [] ? fetchedTasks : defaultTasks;
        console.log("fetched", fetchedTasks);
        setTasks(tasks);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTasks();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tarefas</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TaskList tasks={tasks} />
      <View style={styles.textRow}>
        <TextInput
          onSubmitEditing={(event) => {
            addTask(event.nativeEvent.text).then((updatedTasks) => {
              console.log("onSubmit", updatedTasks);
              setTasks(updatedTasks);
              updateCurrentTasks(updatedTasks);
            });
          }}
          style={styles.input}
          placeholder="Digite uma tarefa"
        />
        <Button title="Adicionar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "15%",
    paddingTop: "15%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  textRow: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    fontSize: 20,
  },
});