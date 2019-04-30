export class SortRequest {
  private id: string;
  private typeOrder: number;

  constructor(
    pId: string,
    pTypeOrder: number
  ) {
    this.id = pId;
    this.typeOrder = pTypeOrder;
  }

  getId(): string {
    return this.id;
  }

  getTypeOrder(): number {
    return this.typeOrder;
  }

  setId(pId: string) {
    this.id = pId;
  }

  setOrder(pTypeOrder: number) {
    this.typeOrder = pTypeOrder;
  }
}
