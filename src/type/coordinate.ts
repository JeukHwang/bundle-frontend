import { Nominal } from "./typeUtil";

type Index = Nominal<number, "Index">;
type X = Nominal<number, "X">;
type Y = Nominal<number, "Y">;
type Pos = { x: X, y: Y };

export type { Index, X, Y, Pos };
