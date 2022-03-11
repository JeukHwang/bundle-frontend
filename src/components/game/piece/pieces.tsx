import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Index, Pos } from "../../../type/coordinate";
import { PieceProp } from "../../../type/propType";
import { indexToPos } from "../../util";

function MyPiece(props: PieceProp) {
    const { index: pieceIndex, onDrag, ref } = props;

    const [controlledPosition, setControlledPosition] = useState<Pos>();
    const [currentIndex, setCurrentNum] = useState(pieceIndex);
    const currentIndexRef = useRef(currentIndex);

    const updateCurrentIndex = (index:Index) => {
        currentIndexRef.current = index;
        setCurrentNum(index);
    };

    // fixing moving elements when resizing
    const resizeHandler = () => {
        setControlledPosition(indexToPos(currentIndexRef.current));
        console.log(currentIndexRef.current);
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
        onDrag(pos); setControlledPosition(pos);
    };

    const onControlledDragStop = (event: MouseEvent) => {
        const selectedElement = document.elementsFromPoint(event.clientX, event.clientY)[1];
        const { id, className } = selectedElement;
        const index = id as unknown as Index;

        if (className === "cell") {
            updateCurrentIndex(index);
            setControlledPosition(indexToPos(index));
        } else {
            setControlledPosition(indexToPos(currentIndexRef.current));
        }
    };

    // const handleExternalControl = (pos:Pos) => {
    //     setControlledPosition(pos);
    // };

    // render
    return (
        // Find and write the other props too as default values if you don't need it
        <Draggable onStop={onControlledDragStop} onDrag={onControlledDrag} position={controlledPosition}>
            <div className="piece" />
        </Draggable>
    );
}

function Pieces() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();

    // const sync = { 1: ref1, 2: ref2, 3: ref3, 4: ref4, 5: ref5 };
    // function onDrag(pos:Pos) {
    //     // TODO
    // }

    return (
        <div className="pieces-outer">
            <MyPiece index={20 as Index} ref={ref1} onDrag={undefined} />
            <MyPiece index={21 as Index} ref={ref2} onDrag={undefined} />
            <MyPiece index={22 as Index} ref={ref3} onDrag={undefined} />
            <MyPiece index={23 as Index} ref={ref4} onDrag={undefined} />
            <MyPiece index={24 as Index} ref={ref5} onDrag={undefined} />
        </div>
    );
}

export default Pieces;
