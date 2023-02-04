function getArticleGenerator(articles) {
    
    return function showNext() {
        const div = document.getElementById('content');

        if (articles.length > 0) {
            const article = articles.shift();
            const newArticle = document.createElement('article');
            newArticle.textContent = article;
            div.appendChild(newArticle);
        }
    }
}
