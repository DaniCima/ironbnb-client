export class Apartment {
  constructor(
    private _img: string,
    private _pricePerDay: number,
    private __id: string,
    private _title: string,
    private _createdAt: Date,
    private _updatedAt: Date
  ) {}

  public get img(): string {
    return this._img;
  }
  public set img(value: string) {
    this._img = value;
  }
  public get pricePerDay(): number {
    return this._pricePerDay;
  }
  public set pricePerDay(value: number) {
    this._pricePerDay = value;
  }
  public get _id(): string {
    return this.__id;
  }
  public set _id(value: string) {
    this.__id = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }
  public get updatedAt(): Date {
    return this._updatedAt;
  }
  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }
}
