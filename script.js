let mojaPitanja = [
	{
		tekst: "Gde je rodjen Ivo Andrić?",
		odgovori: {
			a: 'Sarajevo',
			b: 'Beograd',
			c: 'Mostar',
			d: 'Travnik',
		},
		indeks_korektnog_odgovora: 'd'
	},
	{
		tekst: "Glavni junak u romanu Tvrđava, koji je napisao Meša Selimović je?",
		odgovori: {
			a: 'Ahmet Šabo',
			b: 'Avdaga Osmanagić',
			c: 'Mehmed Paša'
		},
		indeks_korektnog_odgovora: 'a'
	},
	{
		tekst: "Jovan Jovanović Zmaj je nadimak Zmaj dobio po:?",
		odgovori: {
			a: 'Satiričnom listu "Zmaj"',
			b: 'Zmaju od Noćaja',
			c: 'Industriji mašina "Zmaj"'
		},
		indeks_korektnog_odgovora: 'a'
	},
	{
		tekst: "U kojem gradu je rođen Aleksa Šantić?",
		odgovori: {
			a: 'Beograd',
			b: 'Mostar',
			c: 'Zagreb'
		},
		indeks_korektnog_odgovora: 'b'
	},
	{
		tekst: "Autor romana Seobe je?",
		odgovori: {
			a: 'Branko Ćopić',
			b: 'Miloš Crnjanski',
			c: 'Ivo Andrić'
		},
		indeks_korektnog_odgovora: 'b'
	},
		{
		tekst: "Ko je napisao 'Hazarski rečnik'?",
		odgovori: {
			a: 'Milorad Pavić',
			b: 'Dobrica Ćopić',
			c: 'Danilo Kiš',
			d: 'Branko Ćopić'
		},
		indeks_korektnog_odgovora: 'a'
	},
		{
		tekst: "Koje delo počinje i završava se rečima :'Beskrajni, plavi krug. U njemu, zvezda'.?",
		odgovori: {
			a: 'Prokleta Avlija',
			b: 'Nečista krv',
			c: 'Seobe',
			d: 'Znakovi pored puta'
		},
		indeks_korektnog_odgovora: 'c'
	},
		{
		tekst: "Ko je napisao pesmu 'Domovina se brani lepotom'?",
		odgovori: {
			a: 'Milan Rakić',
			b: 'Jovan Dučić',
			c: 'Ljubivoje Ršumović',
			d: 'Vasko Popa'	
		},
		indeks_korektnog_odgovora: 'c'
	},
		{
		tekst: "Ko je napisao dramu 'Sumnjivo lice'?",
		odgovori: {
			a: 'Branislav Nušić',
			b: 'Laza Lazarević',
			c: 'Branko Ćopić'
		},
		indeks_korektnog_odgovora: 'a'
	},
	
	{
		tekst: "Ko je prvi Srpski pisac?",
		odgovori: {
			a: 'Stefan Prvovenčani',
			b: 'Sveti Sava',
			c: 'Teodosije'
		},
		indeks_korektnog_odgovora: 'b'
	}
];

const shuffled = mojaPitanja.sort(() => 0.5 - Math.random());
let randomPitanja = shuffled.slice(0, 5); 

function generisiKviz(teksts, quizContainer, rezContainer, posaljiDugme){

	function prikazPitanja(teksts, quizContainer){
	let output = [];
	let odgovori;

	for(let i=0; i<teksts.length; i++){
		odgovori = [];
		for(letter in teksts[i].odgovori){
			odgovori.push(
				'<label>'
					+ '<input type="radio" name="tekst'+i+'" value="'+letter+'">'
					+ teksts[i].odgovori[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="pitanje"><div class="tekst">' + teksts[i].tekst + '</div>'
			+ '<div class="odgovori">' + odgovori.join('') + '</div></div>'
		);
	}

	quizContainer.innerHTML = output.join('');
}

	function showResults(teksts, quizContainer, rezContainer){
	
	let answerContainers = quizContainer.querySelectorAll('.odgovori');
	
	let userAnswer = '';
	let numCorrect = 0;
	let spantacnonetacno = document.getElementById('tacnost');
	for(let i=0; i<teksts.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=tekst'+i+']:checked')||{}).value;
		
		if(userAnswer===teksts[i].indeks_korektnog_odgovora){
			numCorrect++;
			spantacnonetacno.innerHTML += `<p style="color:green">Tacno ste odgovorili na ${i+1}.pitanje</p>`	
		}
		else{
			spantacnonetacno.innerHTML += `<p style="color:red">Tacno ste odgovorili na ${i+1}.pitanje</p>`
		}
	}
	rezContainer.innerHTML = numCorrect + ' pogođenih od ukupno ' + teksts.length;
}

	prikazPitanja(teksts, quizContainer);

	posaljiDugme.onclick = function(){
		showResults(teksts, quizContainer, rezContainer);
	}
}

let quizContainer = document.getElementById('quiz');
let rezContainer = document.getElementById('results');
let posaljiDugme = document.getElementById('submit');
