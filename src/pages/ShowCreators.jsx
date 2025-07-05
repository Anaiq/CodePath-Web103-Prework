import React from 'react'
import { ContentCreatorCard } from '../components/ContentCreatorCard'

export const ShowCreators = ({contentCreators}) => {
    return (
        <div className="container">
            <h1>Content Creators</h1>
            <p>Welcome to the CreatorVerse! You can find a list of amazing content creators.</p>
            <p>Click on a ContentCreator to learn about them, or edit their information.</p>
            {contentCreators.map((creator, index) => (
                <ContentCreatorCard key={index} {...creator} />
            ))}
        </div>
    );
};
