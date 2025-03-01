'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleFadingPlus, PencilLine } from 'lucide-react';
import { useEffect } from 'react';
import { z } from 'zod';

import { useCommentStore, useFormStore } from '@/app/_providers/store';
import { Typography } from '../shared/typography';
import { commentSchema } from '@/app/_schemas';
import { Button } from '../shared/button';
import { Input } from '../shared/input';
import { Modal } from '../shared/modal';
import { TextArea } from '../shared/text-area';

type CommentFormValues = z.infer<typeof commentSchema>;

export const CommentForm = () => {
	const { onClose, isOpen, data, mode } = useFormStore();

	const { addComment, updateComment } = useCommentStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<CommentFormValues>({
		resolver: zodResolver(commentSchema),
	});

	const onSubmit: SubmitHandler<CommentFormValues> = (values) => {
		if (mode === 'create') {
			addComment({
				...values,
				id: crypto.randomUUID(),
			});

			onClose();
			return;
		}

		updateComment({
			id: data!.id,
			...values,
		});

		onClose();
	};

	useEffect(() => {
		if (data && mode === 'edit') {
			reset(data);
		}

		reset({});
	}, [data, reset, mode]);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}>
			<Typography variant='h2'>
				{mode === 'create' ? 'Crear comentario' : 'Editar comentario'}
			</Typography>

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

				<TextArea
					{...register('body')}
					placeholder='Escribe aqui un comentario'
					label='Comentario'
					error={errors.body?.message}
				/>

				<Button
					variant='withIcon'
					type='submit'>
					{mode === 'create' ? <CircleFadingPlus /> : <PencilLine />}
					{mode === 'create' ? 'Crear comentario' : 'Editar comentario'}
				</Button>
			</form>
		</Modal>
	);
};
