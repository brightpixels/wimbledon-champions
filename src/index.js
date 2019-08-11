import data from "./data.json";

export const all = data;
export const ladies = data.map(({ gentlemen, ...rest }) => rest);
export const gentlemen = data.map(({ ladies, ...rest }) => rest);
export const year = year => x.find(i => i.year.toString() === year);
