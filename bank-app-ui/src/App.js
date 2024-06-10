import React, { useState } from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import UpdateForm from "./Components/UpdateForm/UpdateForm";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      {/* <LoginForm /> */}
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>

          <Route
            path="/register"
            element={<RegisterForm></RegisterForm>}
          ></Route>

          <Route path="/update" element={<UpdateForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
