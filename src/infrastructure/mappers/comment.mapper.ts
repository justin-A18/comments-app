import { CommentEntity } from "@/core/entity";

export class CommentMapper {
	static toDomain(raw: CommentEntity): CommentEntity {
		return {
			id: String(raw.id),
			name: String(raw.name),
			email: String(raw.email),
			body: String(raw.body),
		};
	}

	static toDomainArray(rawArray: CommentEntity[]): CommentEntity[] {
		return rawArray.map(CommentMapper.toDomain);
	}
}
