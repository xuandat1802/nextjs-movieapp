import React from "react";
import { createContext } from "react";
export const resultContext = createContext<any>([]);
export const detailMovieContext = createContext<any>([]);
export const listCastContext = createContext<any>([]);
export default function context() {
  return <div></div>;
}
