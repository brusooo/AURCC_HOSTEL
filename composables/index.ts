export const getActiveComponent = () => useState<string>("activeComponent", () => "Dashboard");

export const getActiveStudent = () => useState<Number>("activeStudent", () => 710020104012);

export const getActiveHostelRoomId = () => useState<number>("activeHostelRoomId", () => 1);

export const getActiveHostelRoomNo = () => useState<number>("activeHostelRoomNo", () => 1);

export const getActiveHostel = () => useState<string>("activeHostel", () => "boys");

export const showMenuToggler = () => useState<boolean>("showToggler", () => true);

export const getAvailableRooms = () => useState<Array<Object>>("availableRooms", () => [])

export const activeDepartment = () => useState<Array<String>>("activeDepartment", () => ["ALL"]);
