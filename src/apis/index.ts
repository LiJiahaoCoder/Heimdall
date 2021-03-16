import Floors from "@/mock/floors.json";
import { Position } from "@/types";

async function request<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}

export function getFloors(): Promise<{ data: Position[] }> {
  return request(Floors);
}
