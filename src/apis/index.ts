import Floors from "@/mock/floors.json";

async function request<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}

export function getFloors(): Promise<{
  data: Array<{ id: string; name: string }>;
}> {
  return request(Floors);
}
