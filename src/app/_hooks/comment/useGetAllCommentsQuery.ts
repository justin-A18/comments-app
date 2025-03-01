'use client';

import { getAllCommentsUseCase } from "@/core/use-cases/comment";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCommentsQuery = () => {
	const getAllCommentsQuery = useQuery({
		queryKey: ['comments-query'],
		queryFn: () => {
			return getAllCommentsUseCase(apiFetcher);
		},
	});

	return {
		...getAllCommentsQuery,
	};
};