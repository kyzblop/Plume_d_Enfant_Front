import { CategorieHistoire } from './categorie-histoire';
import { CategorieAge } from './categorie-age';
import { Utilisateur } from './utilisateur';
export class Histoire {
  constructor(
    public id: number,
    public titre: string,
    public corps: string,
    public categorieHistoire: CategorieHistoire,
    public categorieAge: CategorieAge,
    public imageB64Json: string,
    public nbLike: number,
    public createur: Utilisateur
  ) {}
}
