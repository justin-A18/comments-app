'use client';

import { useGetAllCommentsQuery } from './_hooks/comment';

import { CommentForm, CommentCard, CommentHeader } from './_components/comment';
import { Typography } from './_components/shared/typography';

export default function Home() {
	const { data, isLoading } = useGetAllCommentsQuery();

	return (
		<main className='w-full min-h-screen p-md flex flex-column gap-md'>
			<CommentHeader />

			<section className='flex flex-column gap-md'>
				<Typography className='text-center'>Lista de comentarios</Typography>

				{isLoading && (
					<div className='flex justify-center items-center'>Loading...</div>
				)}

				{data && !isLoading && (
					<div className='w-full p-md grid grid-cols-3 gap-md'>
						{data?.map((comment) => (
							<CommentCard
								key={comment.id}
								{...comment}
							/>
						))}
					</div>
				)}
			</section>
			<CommentForm />
		</main>
	);
}
