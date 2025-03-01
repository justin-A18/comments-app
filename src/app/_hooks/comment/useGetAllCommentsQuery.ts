'use client';

import { getAllCommentsUseCase } from "@/core/use-cases/comment";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useQuery } from "@tanstack/react-query";
import { useCommentStore } from "@/app/_providers/store";
import { useEffect } from "react";

export const useGetAllCommentsQuery = () => {
	const { setComments, comments } = useCommentStore();

	const getAllCommentsQuery = useQuery({
		queryKey: ['comments-query'],
		queryFn: () => {
			return getAllCommentsUseCase(apiFetcher);
		},
	});


	useEffect(() => {
		if (getAllCommentsQuery.data && getAllCommentsQuery.isSuccess) {
			setComments(getAllCommentsQuery.data);
		}
	}, [getAllCommentsQuery.data]);

	return {
		...getAllCommentsQuery,
		data: comments,
	};
};