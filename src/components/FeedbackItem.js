import React from "react";
import { deleteFeedback } from "../api/feedbackApi";

const FeedbackItem = ({ feedback, onDeleted }) => {

    const handleDelete = async () => {
        await deleteFeedback(feedback.title);
        onDeleted();
    }

    return(
        <div className="feedback-item">
            <h3>{feedback.title}</h3>
            <p>{feedback.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default FeedbackItem;