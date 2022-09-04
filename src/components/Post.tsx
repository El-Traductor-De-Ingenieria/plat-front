import type { Article } from '../models';
import '../styles/post.scss';

export function Post({ description, image, points, tags, title }: Article) {
	return (
		<section className="post">
			<img
				src={image}
				alt={title}
				loading="lazy"
				decoding="async"
				className="post__image"
			/>
			<div className="post__body">
				<header className="post__header">
					<h3 className="post__title">{title}</h3>
				</header>

				<div className="post__tag-list">
					{tags.map((tag) => (
						<span className="post__tag tag">{tag}</span>
					))}
				</div>

				<p className="post__text">{description}</p>

				<div className="post__actions">
					{/* <a
						href={preview}
						rel="external"
						target="_blank"
						className="button post__button"
					>
						<span className="post__icon--preview"></span>
						Preview
					</a>
					<a
						href={code}
						rel="external"
						target="_blank"
						className="button button--reverse"
						className="button post__button"
					>
						<span className="post__icon--code"></span>
						Code
					</a> */}
				</div>
			</div>
		</section>
	);
}
