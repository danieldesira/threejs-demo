import { create } from "zustand";

type AuthenticationModel = {
  token: string;
  userEmail: string;
};

interface AuthenticationStore {
  token: string;
  userEmail: string;
  setAuthModel: (value: AuthenticationModel) => void;
  reset: () => void;
}

const useAuthenticationStore = create<AuthenticationStore>((set) => ({
  token: "",
  userEmail: "",
  setAuthModel: ({ token, userEmail }: AuthenticationModel) =>
    set({ token, userEmail }),
  reset: () => set({ token: "", userEmail: "" }),
}));

export default useAuthenticationStore;
