class Article{

    constructor(title, abstract, imgpath, article){
        this.title = title;
        this.abstract = abstract;
        this.imgpath = imgpath;
        this.article = article;

        this.saveToStorage();
    }

    saveToStorage() {
        // Create an object with the article properties
        let articleData = {
            title: this.title,
            abstract: this.abstract,
            imgpath: this.imgpath,
            article: this.article
        };

        // Convert the articleData object to a JSON string
        let jsonStr = JSON.stringify(articleData);

        // Store the JSON string in localStorage
        localStorage.setItem('1', jsonStr);
    }

    readFromStorage(){
        
    }

}