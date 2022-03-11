import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Index, Pos } from "../../../type/coordinate";
import { TheirPieceProp } from "../../../type/propType";
import { indexToPos } from "../../util";

function TheirPiece(props:TheirPieceProp) {
    const { index: pieceIndex } = props;

    const [controlledPosition, setControlledPosition] = useState<Pos>();
    const [currentNum, setCurrentNum] = useState(pieceIndex);
    const currentNumRef = useRef(currentNum);

    const updateCurrentIndex = (index:Index) => {
        currentNumRef.current = index;
        setCurrentNum(index);
    };

    // fixing moving elements when resizing
    const resizeHandler = () => {
        setControlledPosition(indexToPos(currentNumRef.current));
        console.log(currentNumRef.current);
    };

    // run once
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        const remover = () => { window.removeEventListener("resize", resizeHandler); };
        return remover;
    }, []);

    useEffect(() => { setControlledPosition(indexToPos(pieceIndex)); }, []);

    // drag movement logic
    const onControlledDrag = (event:MouseEvent, pos:Pos) => {
        const { x, y } = pos;
        setControlledPosition({ x, y });
    };

    const onControlledDragStop = (event:MouseEvent) => {
        const selectedElement = document.elementsFromPoint(event.clientX, event.clientY)[1];
        const { id, className } = selectedElement;
        const index = id as unknown as Index;
        console.log(className);
        if (className === "cell") {
            updateCurrentIndex(index);
            setControlledPosition(indexToPos(index));
        } else {
            setControlledPosition(indexToPos(currentNumRef.current));
        }
    };

    // render
    return (
        // Find and write the other props too as default values if you don't need it
        <Draggable onStop={onControlledDragStop} onDrag={onControlledDrag} position={controlledPosition}>
            <div className="piece their" />
        </Draggable>
    );
}

function TheirPieces() {
    return (
        <div className="their pieces-outer">
            <TheirPiece index={4 as Index} />
            <TheirPiece index={3 as Index} />
            <TheirPiece index={2 as Index} />
            <TheirPiece index={1 as Index} />
            <TheirPiece index={0 as Index} />
        </div>
    );
}

export default TheirPieces;
