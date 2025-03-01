import { CommentMapper } from "@/infrastructure/mappers";
import { HttpAdapter } from "@/config/adapters/http";
import { CommentEntity } from "@/core/entity";

export const updateCommentUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, id: string) => {
	const data = await apiFetcher.put<CommentEntity>(`/comments/${id}`, body);
	return CommentMapper.toDomain(data);
	;
};