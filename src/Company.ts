import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  MappableContent(): string {
    return `
      <div>
        <h1 style='font-size:19px;'>Company Name: ${this.companyName}</h1>
        <h3 style='font-size:16px;'>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
