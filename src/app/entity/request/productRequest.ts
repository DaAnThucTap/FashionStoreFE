export class productRequest {
    constructor(
        public nameProduct:string,public price :Number,public publicationDate:Date,
        public description :string,public size :string,public gender :Boolean,public color :string,
        public isDelete: Boolean,public categoryId : Number
    ){};
}
