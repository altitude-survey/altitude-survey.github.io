---
title: Наши работы
cat: 4
main: true
sortid: 4.0
submenu: false
---

{% include el-slider.html  nimg = "3" %}

{::nomarkdown}

    <div class="uk-flex uk-flex-wrap>
        {% for work in site.portfolio %}
            <div>
                <!-- <a href="{{ work.url }}"> -->
                    <div  class="uk-card">
                        <div class="uk-card-media-top">
                            <img src="{{ work.cover }}" alt="">
                        </div>
                        <div class="uk-card-body">               
                            <h3> {{ work.name}} </h3>
                            <p> {{ work.description}} </p>
                        </div>                        
                    </div>
                <!-- </a> -->
            </div>
        {% endfor %}            
    </div>
        
{:/}