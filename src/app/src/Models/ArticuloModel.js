class ArticuloModel {
    constructor(title,content, date, image,price,stock,categorie){
      this.title = title;
      this.content = content;
      this.date = null;
      this.image = image;
      this.price = price;
      this.stock = stock;
      this.categorie = categorie;
    }
}

export default ArticuloModel;