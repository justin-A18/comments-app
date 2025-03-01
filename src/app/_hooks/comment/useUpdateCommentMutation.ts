'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCommentUseCase } from "@/core/use-cases/comment";
import { apiFetcher } from "@/config/adapters/api.adapter";

export const useUpdateCommentMutation = () => {

	const queryClient = useQueryClient();

	const updateCommentMutation = useMutation({
		mutationKey: ['update-comment-mutation'],
		mutationFn: ({ body, id }: { body: Record<string, unknown>, id: string; }) => {
			return updateCommentUseCase(apiFetcher, body, id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['comments-query'] });
		}
	});

	return {
		...updateCommentMutation
	};

};