export class DomainException extends Error {
  message: string;
  code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
