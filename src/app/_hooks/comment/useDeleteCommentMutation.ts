'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCommentUseCase } from "@/core/use-cases/comment";
import { apiFetcher } from "@/config/adapters/api.adapter";

export const useDeleteCommentMutation = () => {
	const queryClient = useQueryClient();

	const deleteCommentMutation = useMutation({
		mutationKey: ['delete-comment-mutation'],
		mutationFn: (id: string) => {
			return deleteCommentUseCase(apiFetcher, id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['comments-query'] });
		}
	});

	return {
		...deleteCommentMutation,
	};

};