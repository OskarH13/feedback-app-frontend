import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks, onFeedbackDeleted }) => {

    return(
        <div>
            <h2>Feedback</h2>
            {feedbacks.length === 0 ? (
                <p>No feedback available.</p>
            ) : (
                feedbacks.map((feedback) => (
                    <FeedbackItem 
                        key={feedback.id}
                        feedback={feedback}
                        onDeleted={onFeedbackDeleted}
                    />
                ))
            )}
        </div>
    )
}

export default FeedbackList;