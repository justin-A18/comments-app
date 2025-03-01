'use client';

import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from "react";

import { getAllCommentsUseCase } from "@/core/use-cases/comment";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useCommentStore } from "@/app/_providers/store";
import { CommentEntity } from "@/core/entity";


export const useGetAllCommentsQuery = () => {
	const { setComments, comments } = useCommentStore();
	const [value, setValue] = useLocalStorage<CommentEntity[]>('comments', []);

	const getAllCommentsQuery = useQuery({
		queryKey: ['comments-query'],
		queryFn: () => {
			return getAllCommentsUseCase(apiFetcher);
		},
	});

	useEffect(() => {
		if (value.length === 0 && getAllCommentsQuery.isSuccess && getAllCommentsQuery.data) {
			setComments(getAllCommentsQuery.data);
			setValue(getAllCommentsQuery.data);
		} else if (value.length > 0 && comments.length === 0) {

			setComments(value);
		}
	}, [getAllCommentsQuery.data, getAllCommentsQuery.isSuccess, value, comments.length, setComments, setValue]);

	useEffect(() => {
		if (comments.length > 0) {
			setValue(comments);
		}
	}, [comments, setValue]);

	return {
		...getAllCommentsQuery,
		data: comments,
	};
};