import React from "react";
import ListDisplay from "./ListDisplay";

const List = () => {
    const Languages = ["Java", "Phython", "C++"];
    let authorizedUser = true;
    
        return (
            <>
            {authorizedUser ? (
              <ul>
                {Languages.map((language, i) => (
                  <ListDisplay data={language} key={i} value={language} />
                ))}
              </ul>
              ): (
                <>Not Authorized</>
              )} 
            </>
          );
    }
export default List;
console.log(List);

