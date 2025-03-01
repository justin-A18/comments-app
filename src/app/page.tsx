'use client';

import { useState } from 'react';
import {
	CommentForm,
	CommentCard,
	CommentHeader,
	CommentSearchBar,
} from './_components/comment';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main className='w-full min-h-screen p-md flex flex-column gap-md'>
			<CommentHeader onOpen={() => setIsOpen(!isOpen)} />

			<section className='flex flex-column gap-md'>
				<CommentSearchBar />

				<div className='w-full max-w-lg p-md grid grid-cols-3 gap-md'>
					<CommentCard
						id='1'
						name='Comentario 1'
						body='Cuerpo del comentario 1'
						email='Yt4lB@example.com'
					/>
					<CommentCard
						id='1'
						name='Comentario 1'
						body='Cuerpo del comentario 1'
						email='Yt4lB@example.com'
					/>
					<CommentCard
						id='1'
						name='Comentario 1'
						body='Cuerpo del comentario 1'
						email='Yt4lB@example.com'
					/>
					<CommentCard
						id='1'
						name='Comentario 1'
						body='Cuerpo del comentario 1'
						email='Yt4lB@example.com'
					/>

					<CommentForm
						isOpen={isOpen}
						onClose={() => setIsOpen(!isOpen)}
					/>
				</div>
			</section>
		</main>
	);
}
