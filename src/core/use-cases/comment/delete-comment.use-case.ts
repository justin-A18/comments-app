import { CommentMapper } from "@/infrastructure/mappers";
import { HttpAdapter } from "@/config/adapters/http";
import { CommentEntity } from "@/core/entity";

export const deleteCommentUseCase = async (
	apiFetcher: HttpAdapter, id: string
) => {
	const data = await apiFetcher.delete<CommentEntity>(`/comments/${id}`);
	return CommentMapper.toDomain(data);
	;
};