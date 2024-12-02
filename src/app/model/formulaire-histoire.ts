import { CategorieAge } from './categorie-age';
import { CategorieHistoire } from './categorie-histoire';
import { PersonnageSecondaire } from './personnage-secondaire';
export class FormulaireHistoire {
  constructor(
    public idCreateur: number,
    public categorieHistoire: CategorieHistoire,
    public categorieAge: CategorieAge,
    public nomPersoPrincipal: string,
    public detailPersoPrincipal: string,
    public listePersoSecondaire: Array<PersonnageSecondaire>,
    public detailsSupplementaires: Array<String>
  ) {}
}
