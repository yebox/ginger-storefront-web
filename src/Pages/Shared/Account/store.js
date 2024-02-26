import { proxy } from "valtio";

export const accountStore = proxy({
  selectedOrderItem: undefined,
});
