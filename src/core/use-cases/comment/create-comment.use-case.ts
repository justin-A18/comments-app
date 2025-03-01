import { CommentMapper } from "@/infrastructure/mappers";
import { HttpAdapter } from "@/config/adapters/http";
import { CommentEntity } from "@/core/entity";

export const createCommentUseCase = async (
	apiFetcher: HttpAdapter, body: Record<string, unknown>
) => {
	const data = await apiFetcher.post<CommentEntity>('/comments', body);
	return CommentMapper.toDomain(data);
};