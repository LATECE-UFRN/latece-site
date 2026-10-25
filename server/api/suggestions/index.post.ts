export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validação dos campos obrigatórios
  if (!body.tipo || !body.mensagem) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Os campos Tipo de Sugestão e Mensagem são obrigatórios.'
    })
  }

  // Mock: Simula o salvamento no banco de dados
  console.log('Nova sugestão recebida:', body)

  return {
    status: 'success',
    message: 'Sugestão enviada com sucesso! Agradecemos sua contribuição.',
    data: {
      id: Date.now(), // Simula um ID gerado pelo banco
      ...body
    }
  }
})