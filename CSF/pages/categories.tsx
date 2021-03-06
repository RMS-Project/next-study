import React from 'react';
import { GetStaticProps } from 'next'

import api from '../services/apiInterna.json'
import { Container } from '../styles/Dashboard/styles'

interface ICategories {
	id: number;
	title: string
}

interface CategoryProps {
	categories: ICategories[]
}

export default function categories({categories}: CategoryProps) {
	return (
		<Container>
			<h1>Categorias</h1>

			<section>
				<ul>
					{categories.map(categorie => {
						return (
							<li key={categorie.id}>
								{ categories.title }
							</li>
						)
					})}
				</ul>
			</section>
		</Container>
	)
}

export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
	const response = await api.get('http://localhost:3333/categories')

	const categories = await response.data;

	return {
		props: {
				categories
		},
		revalidate: 5
	}
}