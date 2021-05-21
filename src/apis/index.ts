import Floors from "@/mock/floors.json";
import Details from "@/mock/details.json";
import { Position, Detail } from "@/types";
import { Status } from "@/constants";

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

export function getFloorDetail(id: string): Promise<Detail> {
  const result = Details.data.find((detail) => detail.id === id)!;

  return request({
    ...result,
    status: result.status as Status,
  });
}
