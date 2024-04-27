#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let todoList:string []=[];
let condition=true;

console.log(chalk.magenta.bold("\n \t TodoList Application!!"));

let main = async () => {
    while(condition){
        let option =await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:"Select an option you want to do:",
                choices:["Add Task","Delete Task","Update Task","View Todo-list","Exit"]
            }
        ]);
        if(option.choice ==="Add Task"){
            await addTask()
        }
        else if(option.choice==="Delete Task"){
            await deleteTask()
        }
        else if(option.choice==="Update Task"){
            await updateTask()
        }
         else if(option.choice ==="View Todo-list"){
            await  viewTask()
         }
         else if(option.choice ==="Exit"){
            condition = false;
         }
    }
}
//function to add new tasks
let addTask =async () => {
    let newTask=await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your task here :"
        }
    ]);
todoList.push(newTask.task)
console.log(`\n ${newTask.task} task added sucessfully in todo-list!!`)
}
//function to view all todo-list tasks

let viewTask =async () => {
    console.log("\nYour Todo-List: \n")
    todoList.forEach((task, index)=> {
        console.log(`${index +1}: ${task}`)
    }); 
}

//function to delete a task from the list
let deleteTask =async () => {
    await viewTask()
    let taskIndex=await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Please Enter the 'index no.' of the task you want to delete :"
        }
    ])
    let deletedTask=todoList.splice(taskIndex.index -1,1);
    console.log(`${deletedTask} this task has been deleted sucessfully from your todo-list`)
}
//function to update a task
let updateTask=async () => {
    await viewTask()
    let update_task_index=await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the index of task you want to update:"
        },
        {
            name:"new_task",
            type:"input",
            message:"Now enter the new task name:"
        }
    ]);
    todoList[update_task_index.index -1]=update_task_index.new_task;
    console.log(`\n Task at index no: ${update_task_index.index -1} updated sucessfully [for updated list check option "View Todo-List"]`)
}


main();