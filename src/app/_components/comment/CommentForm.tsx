import { CircleFadingPlus } from 'lucide-react';
import { Button } from '../shared/button';
import { Input } from '../shared/input';
import { Modal } from '../shared/modal';
import { Typography } from '../shared/typography';

interface FormCommentProps {
	isOpen: boolean;
	onClose: () => void;
}

export const CommentForm = ({ isOpen, onClose }: FormCommentProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}>
			<Typography variant='h2'>Crear comentario</Typography>

			<form className='flex flex-column gap-md'>
				<Input
					placeholder='john doe'
					label='Nombre'
				/>
				<Input
					placeholder='example@gmail.com'
					label='Email'
				/>
				<Input
					placeholder='Escribe aqui un comentario'
					label='Comentario'
				/>

				<Button variant='withIcon'>
					<CircleFadingPlus />
					Crear comentario
				</Button>
			</form>
		</Modal>
	);
};
