const mapping: Record<string, string> = {
  menus: 'menu',
  orders: 'order',
  'order-items': 'order_item',
  reservations: 'reservation',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
