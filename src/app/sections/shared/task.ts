export class Task {
  id: string;
  standardId: string;
  description: string;
  boilerplate: string;

  constructor(standardId: string, description: string) {
    this.description = description;
    this.standardId = standardId;
  }

}
