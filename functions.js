function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null)
    {
   	    page_style = "style.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}
var b = false;
function togg()
{
    
    if(b){
        localStorage.setItem("page_stylesheet_name", "style.css");
        load_style();
        b = false;
    }
    else{
        localStorage.setItem("page_stylesheet_name", "style2.css");
        load_style();
        b = true;
    }
    load_style();
}

load_style();  // load style immediately
