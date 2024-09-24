import React from "react";

const FeedbackItem = ({feedback}) => {

    return(
        <div className="feedback-item">
            <h3>{feedback.title}</h3>
            <p>{feedback.text}</p>
        </div>
    );
};

export default FeedbackItem;