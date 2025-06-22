import React from "react";

export const ContentCreatorCard = ({ name, URL, description, imageURL }) => {
return (
    <>
        <div className="content-creator-card container">
            <article>
            <header>{name}</header>
                <hgroup>
                    <h4>{description}</h4>
                    <p>{URL}</p>
                </hgroup>
            

            <footer>
                {/* if there is an imageURL (optional) then display */}
                {imageURL && <img src={imageURL} alt={`${name}'s profile`} />}
            </footer>
            </article>
        </div>
    </>
);
};
