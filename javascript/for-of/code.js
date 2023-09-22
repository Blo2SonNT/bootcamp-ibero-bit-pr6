fetch('https://rickandmortyapi.com/api/episode')
    .then(data => data.json())
    .then(episodios => {
        for (const capitulo of episodios.results) {
            console.log(capitulo.name)
        }
    })


fetch('http://localhost:3000/api/v1/obtener-personajes')
    .then(data => data.json())
    .then(personajes => {
        for (const monacho of personajes) {
            console.log(monacho.nombre)
        }
    })