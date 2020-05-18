---
title: Наши работы
cat: 4
main: true
sortid: 4.0
submenu: false
---

{% include el-slider.html  nimg = "3" %}

{::nomarkdown}
    {% for work in site.portfolio %}
        <a href="{{ work.url }}">
            <img src="{{ work.cover }}">
            <h3> {{ work.name}} </h3>
            <p> {{ work.description}} </p>
        </a>
    {% endfor %}
{:/}