import React from "react";
import SideBar from "../MobilePayment-SideBar";
import SearchBar from "../../common/Searchbar";
import BodyContainer from "./OneTimeTransferConfirmation_Body";

export default function OneTimePaymentConfirmation(props) {
  return (
    <div style={{ display: "flex" }}>
      <SearchBar />
      <SideBar />
      <BodyContainer/>
    </div>
  );
}
