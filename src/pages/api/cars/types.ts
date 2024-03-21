export type CarTypeEntry = {
  id: number;
  name: string;
  type: string;
  parts: Array<string>
};

export type ECarType = "electrical"| "2 wheels" | "sport";

export type CarResponseData = Array<CarTypeEntry>;