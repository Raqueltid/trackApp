export class Geo {
  private id: string;
  private fecha: Date;

  constructor(
    pId: string,
    pFecha: Date
  ) {
    this.id = pId;
    this.fecha = pFecha;
  }

  getId(): string {
    return this.id;
  }

  setId(pId: string) {
    this.id = pId;
  }

  getDate(): Date {
    return this.fecha;
  }

  setDate(pFecha: Date) {
    this.fecha = pFecha;
  }
}
