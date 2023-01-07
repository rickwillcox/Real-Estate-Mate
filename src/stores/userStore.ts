import create from "zustand";

interface UserStoreState {
  id?: number;
  name?: number;
  userName?: string;
  email?: string;
  setUser: (todo: Omit<UserStoreState, "setUser">) => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  id: undefined,
  name: undefined,
  userName: undefined,
  email: undefined,
  setUser: (user: Omit<UserStoreState, "setUser">) =>
    set({
      id: user.id,
      name: user.name,
      userName: user.userName,
      email: user.email,
    }),
}));
