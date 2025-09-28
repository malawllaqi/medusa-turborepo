import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/src/lib/sdk";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => sdk.store.product.list(),
  });
}
