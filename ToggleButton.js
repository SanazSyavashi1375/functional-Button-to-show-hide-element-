import React from "react";
const ToggleButton = () => {
        const clickHandling = () => {
            document.getElementById("aim").classList.toggle("displayNun");
            document.querySelector('button').innerHTML = document.getElementById("aim").classList.contains('displayNun') ? "Show Element Below" : "Hide Element Below"
        }
        return ( < > { /* <button>{document.getElementById('aim').classList.contains('displayNun')? "Show Element Below" : "Hide Element Below"}</button> */ } <
                button onClick = { clickHandling } > Hide Element Below < /button> <
                p id = "aim" > Toggle Challenge! < /p> <
                />)}
                export default ToggleButton;