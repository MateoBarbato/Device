class Site {
    constructor(id,title,location,description,depth,difficulty){
        this.id= id.toString();
        this.title= title;
        this.location=location;
        this.description=description;
        this.depth=depth;
        this.difficulty=difficulty;
    }
}

export default Site;