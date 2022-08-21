export default class BaseEntity<ID> {
  private id: ID;

  constructor(id: ID) {
    this.id = id;
  }

  public getId(): ID {
    return this.id;
  }

  public setId(id: ID): void {
    this.id = id;
  }
}
