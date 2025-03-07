import { CommentMapper } from "@/infrastructure/mappers";
import { HttpAdapter } from "@/config/adapters/http";
import { CommentEntity } from "@/core/entity";

export const getAllCommentsUseCase = async (apiFetcher: HttpAdapter) => {
	const data = await apiFetcher.get<CommentEntity[]>('/comments?_limit=9');
	return CommentMapper.toDomainArray(data);
	;
};