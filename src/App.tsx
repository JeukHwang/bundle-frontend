import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import "./App.css";
import Front from "./components/Front";
import Game from "./components/game/Game";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const socket = io("https://bundle-game.herokuapp.com/");

socket.on("disconnect", () => {
    console.error("Disconnected");
});

socket.on("connect", () => {
    console.log("Connected");
});

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="game" element={<Game />} />
                <Route path="signin" element={<Signin socket={socket} />} />
                <Route path="signup" element={<Signup socket={socket} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
