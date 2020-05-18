---
title: Наши работы
cat: 4
main: true
sortid: 4.0
submenu: false
---

{% include el-slider.html  nimg = "3" %}

{::nomarkdown}
    <div class="uk-child-width-expand uk-grid-small uk-text-center" uk-height-match="row: false" uk-grid>
        {% for work in site.portfolio %}
            
                <a href="{{ work.url }}" class="uk-card uk-card-default uk-card-hover">
                   
                        <div class="uk-card-media-top">
                            <img src="{{ work.cover }}">
                        </div>
                        <div class="uk-card-body">               
                            <h3> {{ work.caption }} </h3>
                            <p> {{ work.description }} </p>
                        </div>                        
                    
                </a>
            
        {% endfor %}            
    </div>        
{:/}