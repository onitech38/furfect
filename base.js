// ========== Base Start
// DEFINIÇÕES DE CONFIGURAÇÃO IMPORTANTE

import { addAnimation } from './animations.js';

document.addEventListener("DOMContentLoaded", function() {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
});

//======================================= NAVBAR ========================================
//== user ===============================================================================

let userData = {
    login: { user: '', senha: '' },
    signIn: { name: '', user: '', senha: '', image: '' } // Adicionando a propriedade image
};
function renderForm(mode) {
    const formFields = document.getElementById('formFields');
    formFields.innerHTML = ''; // Limpar campos existentes

    if (mode === 'login') {
        formFields.innerHTML = `
            <label for="username">Usuário:</label>
            <input type="text" id="username" required>
            <br>
            <label for="password">Senha:</label>
            <input type="password" id="password" required>
        `;
    } else if (mode === 'signin') {
        formFields.innerHTML = `
            <label for="name">Nome:</label>
            <input type="text" id="name" required>
            <br>
            <label for="username">Usuário:</label>
            <input type="text" id="username" required>
            <br>
            <label for="password">Senha:</label>
            <input type="password" id="password" required>
            <br>
            <label for="imageUpload">Foto de Perfil:</label>
            <input type="file" id="imageUpload" accept="image/*" onchange="previewImage(event)">
            <br>
            <img id="preview" class="img__user" src="/" alt="Imagem do Usuário" style="display:none;">
        `;
      } else if (mode === 'user') {
        formFields.innerHTML = `
            <label for="name">Nome:</label>
            <input type="text" id="name" value="${userData.signIn.name}" required>
            <br>
            <label for="username">Usuário:</label>
            <input type="text" id="username" value="${userData.signIn.user}" required>
            <br>
            <label for="password">Senha:</label>
            <input type="password" id="password" value="${userData.signIn.senha}" required>
            <br>
            <label for="imageUpload">Foto de Perfil:</label>
            <input type="file" id="imageUpload" accept="image/*" onchange="previewImage(event)">
            <br>
            <img id="preview" class="img__user" src="${userData.signIn.image}" alt="Imagem do Usuário" style="display:${userData.signIn.image ? 'block' : 'none'};">
        `;
    }
}
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.getElementById('preview');
        img.src = e.target.result; // Define a fonte da imagem como o resultado do FileReader
        img.style.display = "block"; // Exibe a imagem

        // Atualiza a imagem do botão de acesso do usuário
        const userImage = document.getElementById('userImage');
        userImage.src = e.target.result; // Atualiza a imagem do botão
        userData.signIn.image = e.target.result; // Armazena a imagem no objeto userData
    }

    if (file) {
        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
}    
function openModal(mode) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const submitButton = document.getElementById('submitButton');
    const toggleText = document.getElementById('toggleText');

    // Configurações do modal com base no modo
    if (mode === 'login') {
        title.innerText = "Log In";
        submitButton.innerText = "Entrar";
        toggleText.innerHTML = 'Não tem uma conta? <button type="button" onclick="openModal(\'signin\')">Sign In</button>';
    } else if (mode === 'signin') {
        title.innerText = "Sign In";
        submitButton.innerText = "Criar Conta";
        toggleText.innerHTML = 'Já tem uma conta? <button type="button" onclick="openModal(\'login\')">Log In</button>';
    } else if (mode === 'user') {
        title.innerText = "Alterar Dados do Usuário";
        submitButton.innerText = "Atualizar";
        toggleText.innerHTML = '';
    }

    renderForm(mode); // Renderiza o formulário
    modal.style.display = "block";
}
function closeModal(event) {
    if (event.target === event.currentTarget) { // Verifica se o clique foi fora do conteúdo do modal
        document.getElementById('modal').style.display = "none";
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('modalTitle').innerText;

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (title === "Log In") {
        // Verifica se o usuário está registrado
        if (userData.signIn.user === username && userData.signIn.senha === password) {
            alert("Log In efetuado com sucesso!");
            updateUserDisplay(username);
            localStorage.setItem('loggedIn', 'true'); // Armazenar que o usuário está logado
            closeModal(event);
        } else {
            alert("Usuário inválido! Deseja fazer Sign In?");
            openModal('signin');
        }
    } else if (title === "Sign In") {
        const name = document.getElementById('name').value;
        userData.signIn.name = name;
        userData.signIn.user = username;
        userData.signIn.senha = password;
        alert("Conta criada com sucesso!");
        updateUserDisplay(username);
        localStorage.setItem('loggedIn', 'true'); // Armazenar que o usuário está logado
        closeModal(event);
    } else if (title === "Alterar Dados do Usuário") {
        const name = document.getElementById('name').value;
        userData.signIn.name = name;
        userData.signIn.user = username;
        userData.signIn.senha = password;
        alert(`Dados atualizados para ${username}`);
        closeModal(event);
    }
}
function updateUserDisplay(username) {
    document.querySelector('.logout').style.display = "block";
    document.querySelector('.user-access').style.display = "block"; // Exibir botão de acesso ao modal do usuário
    document.querySelector('.login').style.display = "none";
    document.querySelector('.signin').style.display = "none";
}
function logout() {
    // Apenas ocultar os elementos, mantendo os dados
    document.querySelector('.logout').style.display = "none";
    document.querySelector('.user-access').style.display = "none";
    document.querySelector('.login').style.display = "inline-block";
    document.querySelector('.signin').style.display = "inline-block";
    alert("Você saiu. Seus dados ainda estão salvos.");
    localStorage.removeItem('loggedIn'); // Remover a informação de login
}
// Abrir o modal de login após 5 segundos, se o usuário não estiver logado
window.onload = function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        setTimeout(() => {
            openModal('login');
        }, 5000);
    }
};
//== end user ==========================================================================
//===================================== END NAVBAR ======================================

// ========== Base end

