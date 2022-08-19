export default class BaseEntity<ID> {
  private id: string;

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }
}
