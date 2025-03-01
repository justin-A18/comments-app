import { CommentEntity } from "@/core/entity";
import { create } from "zustand";

interface CommentStore {
	comments: CommentEntity[];
	addComment: (comment: CommentEntity) => void;
	updateComment: (comment: CommentEntity) => void;
	deleteComment: (id: string) => void;
	setComments: (comments: CommentEntity[]) => void;
}

export const useCommentStore = create<CommentStore>((set) => ({
	comments: [],
	addComment: (comment) => set((state) => ({ comments: [...state.comments, comment] })),
	updateComment: (data) =>
		set((state) => ({
			comments: state.comments.map((comment) =>
				comment.id === data.id ? { ...comment, ...data } : comment
			),
		})),

	deleteComment: (id) => set((state) => ({ comments: state.comments.filter((comment) => comment.id !== id) })),
	setComments: (comments) => set({ comments }),
}));
