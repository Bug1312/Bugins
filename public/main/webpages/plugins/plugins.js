let JSONFile = new XMLHttpRequest();
JSONFile.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let dataJSON = JSON.parse(this.responseText);
        dataJSON.plugins.forEach(plugin => {
            let ul_Plugins = document.getElementById("plugins"),
                li_Plugin = document.createElement("li"),
                section_Top = document.createElement("section"),
                h1_title = document.createElement("h1"),
                section_Mid = document.createElement("section"),
                img_URLImage = document.createElement("img"),
                span_OnlineImage = document.createElement("span"),
                p_description = document.createElement("p"),
                div_rightSide = document.createElement("div"),
                a_docs = document.createElement("a"),
                a_download = document.createElement("a");

            ul_Plugins.append(li_Plugin);

            section_Top.classList.add("top");
            li_Plugin.append(section_Top);

            h1_title.innerHTML = plugin.name;
            section_Top.append(h1_title);

            section_Mid.classList.add("mid");
            li_Plugin.append(section_Mid);


            switch (plugin.image.type) {
                case "url":
                    img_URLImage.src = plugin.image.image;
                    section_Mid.append(img_URLImage);
                    break;
                case "fontawesome":
                    span_OnlineImage.classList = (plugin.image.image + " fa-4x");
                    section_Mid.append(span_OnlineImage);
                    break;
                case "google":
                    span_OnlineImage.innerHTML = plugin.image.image;
                    span_OnlineImage.classList.add("material-icons");
                    section_Mid.append(span_OnlineImage);
                    break;
            };
            img_URLImage.classList.add("image");
            span_OnlineImage.classList.add("image")

            p_description.innerHTML = plugin.description;
            section_Mid.append(p_description);

            div_rightSide.classList.add("right");
            section_Mid.append(div_rightSide);

            a_docs.innerHTML = "Documentation"
            if (plugin.docs != null)
                a_docs.href = plugin.docs;
            else
                a_docs.setAttribute("disabled", true);
            div_rightSide.append(a_docs);

            a_download.innerHTML = "Download";
            a_download.href = plugin.download.url;
            a_download.download = plugin.download.file;
            if (plugin.error4) {
                a_download.classList.add("no4");
                a_download.title = "Not compatible with Blockbench 4";
            };
            div_rightSide.append(a_download);
        })
    }
};
JSONFile.open("GET", "/main/data/plugins.json", true);
JSONFile.send();