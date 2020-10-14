export interface OrderCreate {
  for: string;
  items: string;
}

export interface Order {
  id: string;
  for: string;
  items: string;
  status: string;
}
