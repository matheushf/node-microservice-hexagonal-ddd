export default class BaseEntity<ID> {
  private id: ID;

  public getId(): ID {
    return this.id;
  }

  public setId(id: ID): void {
    this.id = id;
  }
}
