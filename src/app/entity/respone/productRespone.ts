export class productRespone {
    constructor(public productId : number,
        public nameProduct:string,public price :Number,public publicationDate:Date,
        public description :string,public size :string,public color :string,
        public imgUser: string,public categoryId : number
    ){};
}
