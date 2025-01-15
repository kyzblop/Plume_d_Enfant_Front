import { CategorieHistoire } from './categorie-histoire';
import { CategorieAge } from './categorie-age';
import { Utilisateur } from './utilisateur';
export class Histoire {
  constructor(
    public id: number,
    public titre: string | null,
    public corps: string | null,
    public categorieHistoire: CategorieHistoire,
    public categorieAge: CategorieAge,
    public urlImage: string | null,
    public nbLike: number | null,
    public createur: Utilisateur
  ) {}
}
