import React from 'react'
import { Carousel } from 'react-bootstrap'
import { graphql } from "gatsby"
import { width } from '@material-ui/system';

export default function BootStrapCarousel({ data }) {
	return (
		<div>
			<Carousel>
				{data.map(data => {
					let node = data.node
					return (<Carousel.Item key={node.id}>
						<img
							className="d-block w-100"
							style={{
								width: 600,
								heigh: 400
							}}
							src={node && node.Image && node.Image.childImageSharp &&
								node.Image.childImageSharp.resize.src}
							alt={node.Title}
						/>
						<Carousel.Caption>
							<h3>{node.Title}</h3>
							<p>{node.subtitle}</p>
						</Carousel.Caption>
					</Carousel.Item>)
				})}
			</Carousel>
		</div>
	)
}
// export const query = graphql`query {
// 	allStrapiCarousel {
// 		edges {
// 			node {
// 				id,
// 					Title,
// 					subtitle,
// 					Image {
// 					childImageSharp {
// 						fluid{
// 							src
// 						}
// 					}
// 				}
// 				description
// 			}
// 		}
// 	}
// }
// `

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`





