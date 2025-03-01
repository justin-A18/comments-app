'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCommentUseCase } from '@/core/use-cases/comment';
import { apiFetcher } from '@/config/adapters/api.adapter';

export const useCreateCommentMutation = () => {

	const queryClient = useQueryClient();

	const createCommentMutation = useMutation({
		mutationKey: ['create-comment-mutation'],	
		mutationFn: (body: Record<string, unknown>) => {
			return createCommentUseCase(apiFetcher, body);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['comments-query'] });
		}
	});

	return {
		...createCommentMutation,
	};
};