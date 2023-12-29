class Artists {
    public _id: string;
    private artistname: string;
    // private albums: any[];

    constructor(id?: string, artistname?: string) {
        this._id = id;
        this.artistname = artistname;
    }

}

export { Artists };