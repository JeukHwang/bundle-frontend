import Filter from "./Filter";
import Board from "./Board";
import Pieces from "./piece/pieces";
import TheirPieces from "./piece/theirPieces";

function Game() {
    return (
        <div className="game-main">
            <Board />
            <TheirPieces />
            <Pieces />
            <Filter />
        </div>
    );
}

export default Game;
