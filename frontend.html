<script>
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        const form = e.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            // Conversões de tipo para números e datas (importante!)
            if (key === 'tempoEmpresa' || key === 'dependentes') {
                data[key] = parseInt(value, 10);
            } else if (key === 'salarioHora') {
                data[key] = parseFloat(value);
            } else if (key === 'dataNascimento' || key === 'dataVirouSocio') {
                data[key] = new Date(value).toISOString(); // Formato ISO para o backend
            } else {
                data[key] = value;
            }
        });

        // EXEMPLO: FAÇA O LOGIN PRIMEIRO PARA OBTER O TOKEN
        // Você precisaria de um formulário de login separado ou uma forma de obter o token
        // Por enquanto, vamos assumir que você tem um token (substitua pelo seu token real ou lógica de login)
        const token = localStorage.getItem('jwtToken'); // Guarde o token após o login

        if (!token) {
            alert('Você precisa estar logado para cadastrar/atualizar sócios.');
            // Redirecionar para página de login, etc.
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/socios', { // URL do seu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Envia o token JWT
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                form.reset(); // Limpa o formulário após sucesso
            } else {
                alert('Erro: ' + result.message || 'Ocorreu um erro no servidor.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro de conexão ou no servidor. Verifique o console.');
        }
    });
</script>