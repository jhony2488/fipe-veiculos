import { maskify } from '../../../Exercicios/1';
import { updateData } from '../../../Exercicios/2';
import { getRickAndMortyCharacters } from '../../../Exercicios/3';
import { checkIfTheFirstLetterIsUppercase } from '../../../Exercicios/4';
import { dataApi } from './datas';

describe('Exercicios', () => {
  it('should eagerly make the last 4 characters', () => {
    expect(maskify('jhonata')).toBe('###nata');
  });
  it('should eagerly make the last 4 characters', () => {
    expect(maskify('jhonata')).not.toBe('#####ata');
  });

  it('should cause the object to be updated without inserting new fields in it', () => {
    expect(
      updateData(
        { name: 'jhonata', profissao: 'Dev Front End' },
        { name: 'Alexander', sobre: 'ghjghjghj', ashtar: 'hggfhfg' },
      ),
    ).toEqual({ name: 'Alexander', profissao: 'Dev Front End' });
  });
  it('should cause the object to be updated without inserting new fields in it', () => {
    expect(
      updateData(
        { name: 'jhonata', profissao: 'Dev Front End' },
        { name: 'Alexander', sobre: 'ghjghjghj', ashtar: 'hggfhfg' },
      ),
    ).not.toEqual({ name: 'jhonata', profissao: 'Dev Front End',sobre: 'ghjghjghj', ashtar: 'hggfhfg' });
  });

  it('should return data from api as specified', async () => {
    let result: any[] = [];
    await getRickAndMortyCharacters().then((itens) => (result = itens));
    expect(result).toEqual(dataApi);
  });
  it('should return data from api as specified', async () => {
    let result: any[] = [];
    await getRickAndMortyCharacters().then((itens) => (result = itens));
    expect(result).not.toEqual([]);
  });

  it('should return true if the first letter of the string is uppercase', () => {
    expect(checkIfTheFirstLetterIsUppercase('Jhonata')).toBe(true);
  });
  it('should return false if the first letter of the string is not uppercase', () => {
    expect(checkIfTheFirstLetterIsUppercase('jHonata')).toBe(false);
  });
  it('should return false if the first letter of the string is not uppercase', () => {
    expect(checkIfTheFirstLetterIsUppercase('jhonata')).toBe(false);
  });
});
