import { useRouter } from 'next/router';

// Ao chamar a rota vai obter o parâmetro e apresentar no navegador.
// Exemplo de rota: produtos/bermida.
// Vai colocar um título com o que for colocado na URL após produtos/.
export default function product() {
	const router = useRouter()

	return <h1>{router.query.slug}</h1>
}