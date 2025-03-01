import { Search } from 'lucide-react';
import { Input } from '../shared/input';
import { Typography } from '../shared/typography';

export const CommentSearchBar = () => {
	return (
		<header className='flex flex-column justify-center items-center gap-md'>
			<Typography className='text-center'>Lista de comentarios</Typography>

			{/*<form className='search-form'>
				<Input
					leftIcon={<Search />}
					placeholder='Buscar comentario...'
				/>
			</form> */}
		</header>
	);
};
