import { CircleFadingPlus } from 'lucide-react';
import { Button } from '../shared/button/Button';

interface CommentHeaderProps {
	onOpen: () => void;
}

export const CommentHeader = ({ onOpen }: CommentHeaderProps) => {
	return (
		<header className='flex justify-end w-full'>
			<Button
				variant='withIcon'
				onClick={onOpen}
				type='button'>
				Crear comentario <CircleFadingPlus />
			</Button>
		</header>
	);
};
