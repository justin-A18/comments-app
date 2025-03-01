import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleFadingPlus } from 'lucide-react';
import { z } from 'zod';

import { Typography } from '../shared/typography';
import { commentSchema } from '@/app/_schemas';
import { Button } from '../shared/button';
import { Input } from '../shared/input';
import { Modal } from '../shared/modal';

type CommentFormValues = z.infer<typeof commentSchema>;

interface FormCommentProps {
	isOpen: boolean;
	onClose: () => void;
}

export const CommentForm = ({ isOpen, onClose }: FormCommentProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CommentFormValues>({
		resolver: zodResolver(commentSchema),
	});

	const onSubmit: SubmitHandler<CommentFormValues> = (data) => {
		console.log(data);
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}>
			<Typography variant='h2'>Crear comentario</Typography>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-column gap-md'>
				<Input
					{...register('name')}
					placeholder='john doe'
					label='Nombre'
					error={errors.name?.message}
				/>

				<Input
					{...register('email')}
					placeholder='example@gmail.com'
					label='Email'
					error={errors.email?.message}
				/>

				<Input
					{...register('body')}
					placeholder='Escribe aqui un comentario'
					label='Comentario'
					error={errors.body?.message}
				/>

				<Button
					variant='withIcon'
					type='submit'>
					<CircleFadingPlus />
					Crear comentario
				</Button>
			</form>
		</Modal>
	);
};
