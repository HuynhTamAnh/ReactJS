export interface Product {
  id: number;
  name: string;
  image: string;
  date_start: string;
  date_end: string;
  status: boolean;
  function: string;
}

export interface Products {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
