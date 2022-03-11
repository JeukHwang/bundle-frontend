import { ReactElement } from "react";

function Board() {
    const cells: ReactElement[] = [];
    for (let i = 0; i < 25; i++) {
        const cell = <div className="cell" id={i.toString()} />;
        cells.push(cell);
    }
    return (<div className="grid">{cells}</div>);
}

export default Board;
