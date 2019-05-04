export class Standard {
  id: string;
  standardsId: string;
  description: string;
  boilerplate: string;

  constructor(standardsId: string, description: string) {
    this.description = description;
    this.standardsId = standardsId;
  }

}
