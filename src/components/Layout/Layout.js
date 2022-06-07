import React, { Fragment } from "react";
import Sidebar from "./Sidebar";

const Layout = (props) => {
    return (
        <Fragment>
            <Sidebar />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
