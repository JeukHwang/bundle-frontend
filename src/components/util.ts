import { Index, Pos, X, Y } from "../type/coordinate";

// convert tile number into coordinates
const indexToPos = (index:Index):Pos => {
    const pieceElement = document.getElementById(index.toString())!.getBoundingClientRect();
    const mainElement = document.getElementsByClassName("game-main")[0].getBoundingClientRect();
    const c = (pieceElement.width - document.getElementsByClassName("piece")[0].getBoundingClientRect().width) / 2;
    return ({
        x: pieceElement.x - mainElement.x + c as X,
        y: pieceElement.y - mainElement.y + c as Y,
    });
};

export { indexToPos };
