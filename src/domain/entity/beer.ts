type BeerDependencies = {
  id: number;
  name: string;
};

export class Beer {
  public id: number;
  public name: string;
  public desc?: string;
  public url?: string;
  public degree?: number;
  public bitterness?: string;
  public color?: string;

  constructor({ id, name }: BeerDependencies) {
    this.id = id;
    this.name = name;
  }
}
