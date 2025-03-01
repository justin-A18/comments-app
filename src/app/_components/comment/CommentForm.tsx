'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleFadingPlus, PencilLine } from 'lucide-react';
import { useEffect } from 'react';
import { z } from 'zod';

import { useFormStore } from '@/app/_providers/store';
import { Typography } from '../shared/typography';
import { commentSchema } from '@/app/_schemas';
import { Button } from '../shared/button';
import { Input } from '../shared/input';
import { Modal } from '../shared/modal';
import {
	useCreateCommentMutation,
	useUpdateCommentMutation,
} from '@/app/_hooks/comment';

type CommentFormValues = z.infer<typeof commentSchema>;

export const CommentForm = () => {
	const { onClose, isOpen, data, mode } = useFormStore();

	const { mutateAsync: createCommentMutate, isPending: isPendingCreate } =
		useCreateCommentMutation();

	const { mutateAsync: updateCommentMutate, isPending: isPendingUpdate } =
		useUpdateCommentMutation();

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
			createCommentMutate(values);
			return;
		}

		updateCommentMutate({ body: values, id: data!.id });
	};

	useEffect(() => {
		if (data) {
			reset(data);
		}
	}, [data, reset]);

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

				<Input
					{...register('body')}
					placeholder='Escribe aqui un comentario'
					label='Comentario'
					error={errors.body?.message}
				/>

				<Button
					variant='withIcon'
					type='submit'
					disabled={isPendingCreate || isPendingUpdate}>
					{mode === 'create' ? <CircleFadingPlus /> : <PencilLine />}
					{mode === 'create' ? 'Crear comentario' : 'Editar comentario'}
				</Button>
			</form>
		</Modal>
	);
};
