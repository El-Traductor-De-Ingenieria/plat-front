import { Post } from './Post';
import type { Article } from '@models/index';

const posts: Article[] = [
	{
		id: 32,
		title: 'Titulo post',
		points: 50,
		tags: ['Tags de prueba'],
		image: '/images/cat.jpg',
		description:
			'Descripción de post lorem ipsum Descripción de post lorem ipsum Descripción de post lorem ipsum'
	},
	{
		id: 50,
		title: 'Titulo post',
		points: 50,
		tags: ['Tags de prueba'],
		image: '/images/cat.jpg',
		description:
			'Descripción de post lorem ipsum Descripción de post lorem ipsum Descripción de post lorem ipsum'
	},
	{
		id: 154,
		title: 'Titulo post',
		points: 50,
		tags: ['Tags de prueba'],
		image: '/images/cat.jpg',
		description:
			'Descripción de post lorem ipsum Descripción de post lorem ipsum Descripción de post lorem ipsum'
	},
	{
		id: 432432,
		title: 'Titulo post',
		points: 50,
		tags: ['Tags de prueba'],
		image: '/images/cat.jpg',
		description:
			'Descripción de post lorem ipsum Descripción de post lorem ipsum Descripción de post lorem ipsum'
	},
	{
		id: 542343,
		title: 'Titulo post',
		points: 50,
		tags: ['Tags de prueba'],
		image: '/images/cat.jpg',
		description:
			'Descripción de post lorem ipsum Descripción de post lorem ipsum Descripción de post lorem ipsum'
	},
	{
		id: 43254363321321,
		title: 'Titulo post',
		points: 50,
		tags: ['Tags de prueba'],
		image: '/images/cat.jpg',
		description:
			'Descripción de post lorem ipsum Descripción de post lorem ipsum Descripción de post lorem ipsum'
	}
];

export function Posts() {
	return posts.map(({ description, image, points, tags, title, id }) => {
		return (
			<Post
				key={id}
				id={id}
				description={description}
				image={image}
				points={points}
				tags={tags}
				title={title}
			/>
		);
	});
}
