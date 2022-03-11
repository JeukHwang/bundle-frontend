import { Socket } from "socket.io-client";
import { Index } from "./coordinate";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PieceProp = {index:Index, onDrag:any, ref:any };
type TheirPieceProp = { index:Index};

type SignInProp = { socket: Socket};
type SignUpProp = { socket: Socket};

export type { PieceProp, TheirPieceProp };
export type { SignInProp, SignUpProp };
