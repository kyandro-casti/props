import React from "react";

function Child({ childToParent }){
    const data = "This is data from Child Component to the Parent Component."
    return(
        <div>
            <button onClick={childToParent(data)}>click child to parent</button>
        </div>
    );
}
export default Child