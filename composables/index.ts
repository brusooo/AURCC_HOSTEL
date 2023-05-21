export const getActiveComponent = () =>
  useState<string>("activeComponent", () => "Dashboard");

export const getActiveHostelRoomId = () =>
  useState<number>("activeHostelRoomId", () => 1);

export const getActiveHostelRoomNo = () =>
  useState<number>("activeHostelRoomNo", () => 1);

export const getActiveHostel = () =>
  useState<string>("activeHostel", () => "boys");

export const showMenuToggler = () =>
  useState<boolean>("showToggler", () => false);

export const getAvailableRooms = () =>
  useState<Array<Object>>("availableRooms", () => [])

export const activeDepartment = () =>
  useState<Array<String>>("activeDepartment", () => ["ALL"]);
