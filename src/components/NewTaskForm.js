import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
    const [taskText, setTaskText] = useState("");
    const [taskCategory, setTaskCategory] = useState("All");

    const handleTextChange = (event) => {
        setTaskText(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setTaskCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a task object with the text and category
        const newTask = {
            text: taskText,
            category: taskCategory,
        };
        // Call the callback prop to submit the new task
        onTaskFormSubmit(newTask);
        // Reset the form
        setTaskText("");
        setTaskCategory("All");
    };

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <label>
                Details
                <input
                    type="text"
                    name="text"
                    value={taskText}
                    onChange={handleTextChange}
                />
            </label>
            <label>
                Category
                <select
                    name="category"
                    value={taskCategory}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </label>
            <input type="submit" value="Add task" />
        </form>
    );
}

export default NewTaskForm;
