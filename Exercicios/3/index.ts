import axios from 'axios';

 export const getRickAndMortyCharacters = async () => {
    let result: any[] = [];
    await axios.get('https://rickandmortyapi.com/api/character').then((item) => {
        result = item.data.results;
        return item;
    });
    const resultFormated = await result?.map((item:{name: string; gender: string; image: string; species: string;}) => {
        return {
            nome: item.name,
            genero: item.gender==='Male' ? 'Homem' : item.gender==='Female' ? 'Mulher' : item.gender,
            avatar: item.image,
            especie: item.species==='Human' ? 'Humano' : item.species
        };
    })
    const filterResult= await resultFormated.filter((item: {nome: string})=>{
        return item.nome==='Rick Sanchez' 
        || item.nome==='Summer Smith' 
        || item.nome==='Morty Smith' 
        ||item.nome==='Beth Smith' 
        ||item.nome=== 'Jerry Smith'
    })

    return filterResult;
}