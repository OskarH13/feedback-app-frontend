import React, { useState } from 'react';
import { createFeedback } from '../api/feedbackApi';

const FeedbackForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        createFeedback({title, text});
        setTitle('');
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Feedback</h2>
            <input
                type="text"
                placeholder="Add Feedback Title Here"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <br/>
            <textarea 
                placeholder="Add Feedback Text Here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <br/>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;