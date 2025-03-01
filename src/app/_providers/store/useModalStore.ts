import { CommentEntity } from "@/core/entity";
import { create } from "zustand";

type FormMode = "create" | "edit";

interface FormState {
	isOpen: boolean;
	mode: FormMode;
	data?: CommentEntity;
	onOpen: (mode: FormMode, data?: CommentEntity) => void;
	onClose: () => void;
}

export const useFormStore = create<FormState>((set) => ({
	isOpen: false,
	mode: "create",
	data: undefined,
	onOpen: (mode, data) => set({ isOpen: true, mode, data }),
	onClose: () => set({ isOpen: false, data: undefined }),
}));
