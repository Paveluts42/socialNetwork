import React from "react";
import preloader from "../../content/img projekt/ajax-loader.gif"
const Preloader = (props) => {
    return (
        <div><img src={preloader} alt="kits" style={{ width: "90px", height: "90px" }} /></div>
    )
}
export default Preloader