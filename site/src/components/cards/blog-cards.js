import React from 'react'
import { Link } from "gatsby"
import { Card, Button } from 'react-bootstrap'
import Reactmarkdown from "react-markdown"
import styles from './blog.module.scss'

const BlogCards = ({ cards }) => {
	console.log("TCL: BlogCards -> edges", cards)
	let card
	return (
		<div className={styles.card__container}>
			{
				cards && cards.map(node => {
					card = node.node ? node.node : node
					return (<Card className={styles.card__custom}>
						<Card.Img variant="top" src={card && card.image && card.image.childImageSharp.resize.src} />
						<Link to={card.id && card.id.toString().toLowerCase().includes('article_') ? `${card.id}` : `Article_${card.id}`}
							className={styles.card__link}>
							<Card.Body>

								<Card.Title>{card.title.substring(0, 100).concat("...")}</Card.Title>
								<Card.Text>
									<Reactmarkdown
										source={card.content.substring(0, 200).concat("...")}
										transformImageUri={uri =>
											uri.startsWith("http")
												? uri
												: `${process.env.IMAGE_BASE_URL}${uri}`
										}
										className="indexArticle"
										escapeHtml={false}
									/>
								</Card.Text>
							</Card.Body>
						</Link>
					</Card>)
				})
			}
		</div>
	)
}

export default BlogCards




