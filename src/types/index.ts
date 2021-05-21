import { Status } from "@/constants";

export interface Position {
  id: string;
  name: string;
}

export interface Detail {
  id: string;
  name: string;
  status: Status;
  description: string;
}
