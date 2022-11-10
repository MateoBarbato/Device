class Place {
  constructor(id, title, image, address, coords,description) {
    this.id = id.toString();
    this.title = title;
    this.image = image;
    this.address = address;
    this.coords = coords;
    this.description = description;
  }
}

export default Place;
