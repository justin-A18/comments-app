import { CommentMapper } from "@/infrastructure/mappers";
import { HttpAdapter } from "@/config/adapters/http";
import { CommentEntity } from "@/core/entity";

export const getAllAppointmentUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<CommentEntity[]>('/comments', token);
	return CommentMapper.toDomainArray(data);
	;
};