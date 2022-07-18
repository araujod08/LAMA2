<p id= "voltar">

<p>
<a href="#sobre">Sobre</a> |
<a href="#orientacoes">Orientações</a> |
<a href="#link">Link</a> |
<a href="#features">Features</a> |
<a href="#tecnologias">Tecnologias</a> |
<a href="#desenvolvedores">Desenvolvedores</a>
</p>

<h1 id="sobre">🎵 LAMA - Labenu Musical Awards</h1>

<p>LAMA (Labenu Musical Awards), um festival com várias bandas famosas.</p>

<h2 id="orientacoes">🚨 Orientações para acesso</h2>

- Realizar o login se já possui um cadastro
- Realizar o cadastro com dados pessoais

<h2 id="link">🔗 Link</h2>

<a href="https://documenter.getpostman.com/view/20351643/UzQvtk4N">LAMA</a>

<h2 id="features">✔️ Features</h2>

👤 Login/Cadastro
- [x] O nosso sistema deve permitir o registro aos usuários que irão usá-lo. Para se cadastrar, é necessário passar um email, um nome e uma senha, e também uma função dentro do sistema. Você pode ser um cliente (usuário normal) ou um administrador do sistema (admin). O usuário deve poder se logar automaticamente após o cadastro.
- [x] Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário.

🎙 Registrar banda
- [x] O nosso sistema deve deixar registrado todas as bandas que participarão dos três dias de shows. Para uma banda ser criada, precisamos das informações: nome, gênero musical principal a qual ela se identifica e o nome de um responsável (que pode ser qualquer membro dela). Não podem existir duas bandas com o mesmo nome. Somente administradores podem registrar bandas. Faça ao menos dois testes para checar se os dados estão corretos, sendo um em caso de erro e outro em caso de acerto.

🎸 Detalhes banda
- [x] Deve receber o id ou o nome da banda e retornar todas as informações salvas sobre ela.

📅 Adicionar show
- [x] Para cadastrar um show, o endpoint precisa do id da banda, o dia (sexta, sábado ou domingo) e o horário em que ela irá se apresentar. Deve haver uma validação para indicar se o horário é válido (ou seja, se está entre 08h e 23h). Além disso os shows só podem ser marcados em horários redondos, ou seja, pode ser 08h - 09h ou 09h - 13h mas não pode ser 09h - 10h30 ou 10h30 - 14h. Caso já exista um show marcado para o dia e o horário em questão, o seu endpoint deve retornar um erro. Faça ao menos dois testes para checar se os dados estão corretos, sendo um em caso de erro e outro em caso de show em data repetida.

🔍 Data e shows
- [x] Recebe um dia (sexta, sábado ou domingo) e retorna todos os shows daquela data (ordenados pelo horário), mostrando somente o nome da banda e o gênero musical principal.
 
 <h2 id="tecnologias">🛠 Tecnologias</h2>
 
- Typescript

<h2 id="desenvolvedores">👨‍💻 Desenvolvedores</h2>
<table>          
<td><a href="https://github.com/future4code/silveira-Ariane-Mello"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98977257?s=400&u=6c7f069d8c85e34fdf6fd6f58bc0f0f989a6948e&v=4" width="100px;" alt="Imagem profile Ariane Mello desenvolvedora"/><br /><sub><b>Ariane Mello </b></sub></a><br /> 
<td><a href="https://github.com/future4code/silveira-Davi-Gomes"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98953119?v=4" width="100px;" alt="Imagem profile Davi Gomes desenvolvedor"/><br /><sub><b>Davi Gomes </b></sub></a><br /> 
<td><a href="https://github.com/future4code/silveira-Eduardo-Osiro"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98972986?v=4" width="100px;" alt="Imagem profile Eduardo Osiro desenvolvedor"/><br /><sub><b>Eduardo Osiro </b></sub></a><br />
</table>

<a href="#voltar">Voltar para o topo ⬆️</a>
