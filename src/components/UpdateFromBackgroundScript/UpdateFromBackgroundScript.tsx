import { AppContext } from "@src/AppContext";
import { useUserStore } from "@src/stores";
import React, { useContext } from "react";
import "@components/App/App.css";

export function UpdateFromBackgroundScript() {
  // use context to use background functions
  const { exampleFetch } = useContext(AppContext);
  // this store is updated by the context so it can be used directly. You could also use vanilla zustand here instead, I just like using the hooks
  const userStore = useUserStore();
  return (
    <div className="rcet-container ">
      <h2>Use Background Script To Fetch Example</h2>
      <button className="rcet-button" onClick={exampleFetch}>
        Get Random User
      </button>
      <h3>User:</h3>
      <h3>id: {userStore.id ?? ""}</h3>
      <h3>name: {userStore.name ?? ""}</h3>
      <h3>userName: {userStore.userName ?? ""}</h3>
      <h3>email: {userStore.email ?? ""}</h3>
    </div>
  );
}
