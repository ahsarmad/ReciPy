import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";
import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./screens/AppNav";

function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
