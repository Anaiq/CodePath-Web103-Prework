import React from "react";
import { cardStyle } from "./ContentCreatorCard.styles";

export const ContentCreatorCard = ({ name, url, description, imageURL }) => {
return (
    <>
        <div style={cardStyle} className="content-creator-card-container">
            <article>
            <header>{name}</header>
                <div>
                    <h4>{description}</h4>
                    <p><a href={url} target="_blank" >{url}</a></p>
                </div>
            

            <footer>
                {/* if there is an imageURL (optional) then display */}
                {imageURL && <img src={imageURL} alt={`${name}'s profile`} />}
            </footer>
            </article>
        </div>
    </>
);
};
