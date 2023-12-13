/*
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/

console.log('funziona');

//crea array di stringhe con i nome dei membri del team

const team = ['Wayne Barnett', 'Angela Caroll', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos'];

console.log(team);

//MILESTONE 1:
//Stampare le informazioni su DOM come card.


/*
const teamContainerEl = document.getElementById('team')


for (let i = 0; i < team.length; i++) {
    
    const member = team[i];

    const memberEl = document.createElement('div')

    memberEl.classList.add('card');

    memberEl.append(member)

    teamContainerEl.appendChild(memberEl)
    
}
*/
/*
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/

const teamContainerEl = document.getElementById('team')


for (let i = 0; i < team.length; i++) {

    const member = team[i];

    const memberEl = document.createElement('div');

    memberEl.classList.add('card');

    memberEl.append(member);

    memberEl.addEventListener('click', function (click) {

        memberEl.style.backgroundColor = 'yellow';
        memberEl.style.color = 'blue';
        memberEl.style.fontSize = '3rem';
        console.log(click.target, this);

        this.classList.toggle('bg-primary');
    })

    teamContainerEl.appendChild(memberEl);

}

document.getElementById('addMember').addEventListener('submit', function(e){
    e.preventDefault()

    const newNameMember = document.getElementById('name').value

    console.log(newNameMember);

    const newSurnameMember = document.getElementById('surname').value

    console.log(newSurnameMember);

    const aggiungi = newNameMember + " " + newSurnameMember;

    console.log(aggiungi);

    const memberEl = document.createElement('div');

    memberEl.classList.add('card');

    memberEl.append(aggiungi);

    memberEl.addEventListener('click', function (click) {

        memberEl.style.backgroundColor = 'yellow';
        memberEl.style.color = 'blue';
        memberEl.style.fontSize = '3rem';
        console.log(click.target, this);

        this.classList.toggle('bg-primary');
    })

    teamContainerEl.appendChild(memberEl);

    document.getElementById('name').value = ''
    document.getElementById('surname').value = ''

})



