---
title: Наши работы
cat: 4
main: true
sortid: 4.0
submenu: false
---

{% include el-slider.html  nimg = "3" %}

{::nomarkdown}
    <div class="uk-grid-match uk-grid-small uk-child-width-1-3 uk-padding" uk-grid>
        {% for work in site.portfolio %}
            <div>
                <a href="{{ work.url }}" class="uk-card uk-card-default uk-card-hover uk-card-small">
                    
                        <div class="uk-card-media-top uk-inline">
                            <img src="{{ work.cover }}">
                            <div class="uk-overlay uk-light uk-overlay-primary uk-position-bottom-center">
                                <h4> {{ work.caption }} </h4>
                            </div>
                        </div>
                        <div class="uk-card-body">    
                            <p> {{ work.description }} </p>
                        </div>                        
                    
                </a>
            </div>
        {% endfor %}            
    </div>        
{:/}