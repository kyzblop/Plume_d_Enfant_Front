import { LienEntrePersonnages } from './lien-entre-personnages';

export class PersonnageSecondaire {
  constructor(
    public nom: string,
    public details: string,
    public lien: LienEntrePersonnages
  ) {}
}
