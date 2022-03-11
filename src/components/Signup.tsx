import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInfo } from "../type/accountType";
import { SignUpProp } from "../type/propType";
import { SubmitEvent } from "../type/typeUtil";

function Signup(props: SignUpProp) {
    const { socket } = props;

    const navigate = useNavigate();
    const routeChange = () => {
        const path = "/game";
        navigate(path);
    };

    const [inputs, setInputs] = useState<SignInfo>({ name: "", password: "" });

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updateOneProp = (info:SignInfo):SignInfo => ({ ...info, [name]: value });
        setInputs(updateOneProp);
    };

    const handleSubmit = (event:SubmitEvent) => {
        event.preventDefault();
        socket.emit("sign_up", inputs.name, inputs.password);
        socket.once("sign_up", (responseCode) => {
            switch (responseCode) {
                case 100: routeChange(); break;
                case 201: alert("That is one retarded name. Please change it into something more sensible"); break;
                case 202: alert("Please, enter something your puny mind can remember"); break;
                case 203: alert("Aperrently, you are not the only idiot who thought of that user name"); break;
                default:
                    break;
            }
        });
    };

    return (
        <div className="login">
            {/* Find and write the other props too as default values if you don't need it */}
            <form onSubmit={handleSubmit}>
                <h1>Hello!</h1>
                <p>Enter your credentials to continue.</p>

                <div className="input-wrapper">
                    <input type="text" name="name" value={inputs.name || ""} placeholder="Enter your username" onChange={handleChange} />
                    <i className="bx bxs-user-circle" />
                </div>

                <div className="input-wrapper">
                    <input type="password" name="password" value={inputs.password || ""} placeholder="Enter your password" onChange={handleChange} />
                    <i className="bx bx-key" />
                </div>

                <div>
                    <button type="submit">
            Sign Up
                        <i className="bx bx-right-arrow-alt" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
