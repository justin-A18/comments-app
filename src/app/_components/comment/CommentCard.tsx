'use client';

import { PenLine, Trash } from 'lucide-react';
import { Button } from '../shared/button/Button';
import { Typography } from '../shared/typography';
import { CommentEntity } from '@/core/entity';
import { useCommentStore, useFormStore } from '@/app/_providers/store';

export const CommentCard = ({ body, email, name, id }: CommentEntity) => {
	const { onOpen } = useFormStore();
	const { deleteComment } = useCommentStore();

	return (
		<article className='comment-card'>
			<Typography variant='h4'>{name}</Typography>
			<Typography variant='p'>{body}</Typography>

			<div className='flex justify-between items-center'>
				<Typography
					isBold
					variant='p'
					className='text-secondary'>
					{email}
				</Typography>

				<div className='flex gap-sm'>
					<Button
						variant='icon'
						onClick={() => deleteComment(id)}>
						<Trash size={20} />
					</Button>

					<Button
						variant='icon'
						onClick={() => onOpen('edit', { id, body, email, name })}>
						<PenLine size={20} />
					</Button>
				</div>
			</div>
		</article>
	);
};
