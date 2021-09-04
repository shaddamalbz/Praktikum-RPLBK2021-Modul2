import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import { InputText, InputNumber } from "./components/Input";

import gambar1 from "./assets/images/gambar1.jpg";

const quotes =
  "Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis";

const newQuotes = "tes test tes";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList
      name="Orang"
      nim="211201181..."
      kelompok="0"
      isNameBold
      image={gambar1}
    />
    <Quotes quotes={newQuotes} author="Orang" />
  </React.StrictMode>,
  document.getElementById("root")
);
