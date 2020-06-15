import React from "react";
import SideBar from "../MobilePayment-SideBar";
import SearchBar from "../../common/Searchbar";
import BodyContainer from "./OtherRecipients_AddPayee";

export default function OtherRecipientsPage() {
    
    return (
        <div style={{display: "flex"}}>
        <SearchBar />
        <SideBar />
        <BodyContainer />
        </div>
    );
}