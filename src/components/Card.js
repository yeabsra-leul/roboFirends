import React from "react";


const Card = ({name,email,id}) => {
    return(
        <div className = "tc bg-light-green br3 pa3 dib ma2 grow bw2 shadow-4  ">
            <img alt = {`${id}`} src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card