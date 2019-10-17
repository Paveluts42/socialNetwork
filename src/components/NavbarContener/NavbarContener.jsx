import React from "react";

import StoreContext from "../../storeContext"
import Navbar from "../Navbar/Navbar"

const NavbarContener = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                return (
                    <Navbar id={store.getState().frendsNav.piple} />
                )
            }

        }

        </StoreContext.Consumer>
    )

}
export default NavbarContener;