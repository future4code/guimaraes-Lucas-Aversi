enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


 let filmes =  (nomeDoFilme: string, anoDeLançamento: number, generoDoFilme:GENERO, pontuacao?:string | number): {} => {	 

	const filme={
		Nome: nomeDoFilme,
		Lançamento: anoDeLançamento,
		Genero: generoDoFilme,
		Nota: pontuacao || 'Filme ainda não avaliado'
	}
	return {
		filme
  }; 
}

   console.log(filmes('Zé Gaiola', 2020, GENERO.DRAMA,10)) 