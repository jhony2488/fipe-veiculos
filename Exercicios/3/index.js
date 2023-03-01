import axios from 'axios';

const getRickAndMortyCharacters = async () => {
    let result = [];
    await axios.get('https://rickandmortyapi.com/api/character').then((item) => {
        result = item.data;
        return item;
    });
    const resultFormated = await result.results?.map((item) => {
        return {
            nome: item.name,
            genero: item.gender==='Male' ? 'Homem' : item.gender==='Female' ? 'Mulher' : item.gender,
            avatar: item.image,
            especie: item.species==='Human' ? 'Humano' : item.species
        };
    })
    const filterResult= await resultFormated.filter((item)=>{
        return item.nome==='Rick Sanchez' 
        || item.nome==='Summer Smith' 
        || item.nome==='Morty Smith' 
        ||item.nome==='Beth Smith' 
        ||item.nome=== 'Jerry Smith'
    })
    console.log(filterResult);
}

getRickAndMortyCharacters();