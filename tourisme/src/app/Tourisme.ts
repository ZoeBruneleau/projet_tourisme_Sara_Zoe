export class Tourisme {
  constructor(id: number, name: string, longitude: number, latitude: number, comment: string) {
    this.id=id;
    this.name=name;
    this.longitude=longitude;
    this.latitude=latitude;
    this.comment=comment;
  }

  id!: number;
  name!: string;
  longitude!: number;
  latitude!: number;

  image!: string;

  comment!: string;

  wiki!: string;


}
