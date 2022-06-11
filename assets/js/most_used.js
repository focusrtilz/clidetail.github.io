
var a_elems = document.body.getElementsByTagName("a");
var related_articles = document.querySelectorAll("li[class='post-title']")
var url_list = []
var post_url_list = []
for (let index = 0; index < a_elems.length; index++) {
    const element = a_elems[index];
    
    if (element.parentElement.getAttribute("class") != "post-title") {
        url_list.push(element.href)
    }
}

for (let index = 0; index < related_articles.length; index++) {
    const element = related_articles[index].getElementsByTagName("a")[0];
    post_url_list.push(element.getAttribute("href"))
}

var url_set = new Set
for (let index = 0; index < post_url_list.length; index++) {
    const relate_url = post_url_list[index];

    url_list.forEach(element => {
        if (element.includes(relate_url)) {
            url_set.add(relate_url)
        }
    });
}

const url_arr = Array.from(url_set)
for (let index = 0; index < related_articles.length; index++) {
    const element = related_articles[index]

    if (!url_arr.includes(element.getElementsByTagName("a")[0].getAttribute("href"))){
        // console.log(element)
        element.remove()
    }
}