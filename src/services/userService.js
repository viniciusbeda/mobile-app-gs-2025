import api from './api'; // importa a instância do axios com baseURL configurada

export async function loginUser(email, senha) {
  try {
    const response = await api.post('/auth/login', {
      email,
      senha,
    });

    // supondo que o backend retorne token e usuário
    return {
      success: true,
      token: response.data.token,
      user: response.data.user,
    };
  } catch (error) {
    console.error('Erro no login:', error);
    return {
      success: false,
      message: 'Credenciais inválidas ou erro na API',
    };
  }
}
