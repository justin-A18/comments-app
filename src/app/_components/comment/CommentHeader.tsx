'use client';

import { CircleFadingPlus } from 'lucide-react';
import { Button } from '../shared/button/Button';
import { useFormStore } from '@/app/_providers/store';

export const CommentHeader = () => {
	const { onOpen } = useFormStore();

	return (
		<header className='flex justify-end w-full'>
			<Button
				variant='withIcon'
				onClick={() => onOpen('create')}
				type='button'>
				Crear comentario <CircleFadingPlus />
			</Button>
		</header>
	);
};
