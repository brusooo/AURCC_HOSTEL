export const getActiveComponent = () =>
  useState<string>("activeComponent", () => "Dashboard");

export const showMenuToggler = () =>
  useState<boolean>("showToggler", () => false);


export const activeDepartment = () =>
  useState<Array<String>>("activeDepartment", () => ["ALL"]);
