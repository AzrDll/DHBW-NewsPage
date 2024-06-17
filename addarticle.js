document.getElementById('addArticleForm').onsubmit = createArticle;


function createArticle(event){
    alert("Article added successfully");
    event.preventDefault();

    let title = document.getElementById("title");    
    let imgpath = document.getElementById("image");
    let abstract = document.getElementById("abstract");
    let articleTxt = document.getElementById("article");

    let article = new Article(title, abstract, imgpath, articleTxt);
}