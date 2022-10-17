interface IProps {
  id: string;
  code: string;
  name: string;
  element: string;
  photo?: string;
  description?: string;
  type1?: string;
  type2?: string;
}

export class Pokemon implements IProps {
  id;
  code;
  name;
  element;
  photo;
  description;
  type1;
  type2;

  constructor(input: IProps) {
    this.id = input.id;
    this.code = input.code;
    this.name = input.name;
    this.element = input.element;
    this.photo = input.photo;
    this.description = input.description;
    this.type1 = input.type1;
    this.type2 = input.type2;
  }
}
