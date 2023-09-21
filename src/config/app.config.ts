interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Chef',
    'Waiter',
    'Restaurant Owner',
    'Restaurant Manager',
    'Wait Staff',
    'Kitchen Staff',
    'Customer',
  ],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menu items', 'Book a table', 'Place an order'],
  ownerAbilities: ['Manage user information', 'Manage restaurant information', 'Manage menu items', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/39d56b59-d712-4cf3-b3ab-e9d51ebcd498',
};
