import React from "react";
import SideBar from "./MobilePayment-SideBar"
import SearchBar from "../common/Searchbar";
import BodyContainer from "./OneTimeTransfer/OneTimeTransfer_Body";

export default function OneTimePaymentPage() {
  return (
    <div style={{ display: "flex" }}>
      <SearchBar />
      <SideBar />
      <BodyContainer />
    </div>
  );
}
