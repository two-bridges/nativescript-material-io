import { Observable } from 'tns-core-modules/data/observable';
import { TbMaterial } from 'nativescript-tb-material';

export class HelloWorldModel extends Observable {
  public message: string;
  private tbMaterial: TbMaterial;

  constructor() {
    super();

    this.tbMaterial = new TbMaterial();
    this.message = this.tbMaterial.message;
  }
}
