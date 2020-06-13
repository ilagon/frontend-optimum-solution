import React from "react";
import SideBar from "./MobilePayment-SideBar"
import SearchBar from "../common/Searchbar";
import BodyContainer from "../MobilePayment/BodyContainer";

export default function OneTimePayment() {
  return (
    <div style={{ display: "flex" }}>
      <SearchBar />
      <SideBar />
      <BodyContainer />
    </div>
  );
}
