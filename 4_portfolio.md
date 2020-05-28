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
            {% include el-card.html url=work.url img=work.cover header=work.caption text=work.description %}            
        {% endfor %}            
    </div>        
{:/}