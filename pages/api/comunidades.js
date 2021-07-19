import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {
    
    if (request.method === 'POST') {
        const TOKEN = '6629b9a997c77b7a8cd6a8537b3b21';
        const client = new SiteClient(TOKEN);

        // Validar os dados antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "968059",
            ...request.body,
            // title: "Comunidade de teste",
            // imageUrl: "https://github.com/JoaoMaganin.png"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}