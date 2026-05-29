import { create } from "zustand";

interface IsOpenFormStore {
  isOpenContactForm: boolean;

  closeContactForm: () => void;
  openContactForm: () => void;
  toggleContactForm: () => void;
}

export const useIsOpenForm = create<IsOpenFormStore>((set) => ({
  isOpenContactForm: false,

  closeContactForm: () => set({ isOpenContactForm: false }),

  openContactForm: () => set({ isOpenContactForm: true }),

  toggleContactForm: () =>
    set((state) => ({
      isOpenContactForm: !state.isOpenContactForm,
    })),
}));

