class Site {
    constructor(id,title,description,depth,difficulty){
        this.id= id.toString();
        this.title= title;
        this.description=description;
        this.depth=depth;
        this.difficulty=difficulty;
    }
}

export default Site;