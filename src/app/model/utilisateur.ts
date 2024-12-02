import { Histoire } from './histoire';

export class Utilisateur {
  constructor(
    public id: string,
    public email: string,
    public mdp: string,
    public listeFavori: Array<Histoire>,
    public listeVue: Array<Histoire>
  ) {}
}
