import { Histoire } from './histoire';

export class Utilisateur {
  constructor(
    public id: number,
    public email: string | null,
    public mdp: string | null,
    public listeLike: Array<Histoire> | null,
    public listeFavori: Array<Histoire> | null,
    public listeVue: Array<Histoire> | null
  ) {}
}
