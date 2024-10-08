class skill {
    constructor(nome,nivel,icone) {
        this.nome = nome;
        this.nivel = nivel;
        this.icone = icone;
    }

    nivelEstrela(nivel){
        const estrelaVazia = `<svg  class="vazia" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#E914C2" class="bi bi-star" viewBox="0 0 16 16" display='inline'>
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
        </svg>`;
        const estrelaCheia = `<svg  class="cheia" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#E914C2" class="bi bi-star-fill" viewBox="0 0 16 16" display='inline'>
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>`;
        const estrelaMeia = `<svg  class="meia" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#E914C2" class="bi bi-star-half" viewBox="0 0 16 16" display='none'>
        <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
        </svg>`;

        const containerEstrelas = document.createElement('div');
        nivelSkillContainer.className = 'nivel';

        if(nivel >= 0 && nivel < 0.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaVazia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaVazia;
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia; inn
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 0.5 && nivel < 1){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaMeia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaVazia;
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 1 && nivel < 1.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaVazia;
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 1.5 && nivel < 2){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaMeia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 2 && nivel < 2.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 2.5 && nivel < 3){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaMeia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 3 && nivel < 3.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 3.5 && nivel < 4){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaMeia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 4 && nivel < 4.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaCheia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
        } else if(nivel >= 4.5 && nivel < 5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaCheia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaMeia;
        } else if(nivel >= 5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaCheia;
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaCheia;
        }

            return containerEstrelas;

    }

    criarElemento() {
        const skillContainer = document.createElement('div');
        skillContainer.className = 'skill';

        const iconSkill = document.createElement('div');
        iconSkill.className = 'icon-skill';

        const imgSkill = document.createElement('img');
        imgSkill.src = this.icone;
        imgSkill.alt = `${this.nome} Icon`;
        imgSkill.className = 'icon';
        iconSkill.appendChild(imgSkill);

        const nomeSkill = document.createElement('p');
        nomeSkill.className = 'nome-skill';
        iconSkill.textContent = this.nome;

        const nivelSkillContainer= this.nivelEstrela(this.nivel);
        
        skillContainer.appendChild(iconSkill);
        skillContainer.appendChild(nomeSkill);
        skillContainer.appendChild(nivelSkillContainer);

        return skillContainer;
    }

    addSkill(container){
        const skillElemento = this.criarElemento();
        container.appendChild(skillElemento);
    }

}

const seletorContainer = document.getElementById('skills-container');

const skill1 = new skill('CSS', 3,'');
skill1.addSkill(seletorContainer);