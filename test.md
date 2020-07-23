---
title: Проверка
permalink: "/_test"
sitemap: false
---
{% comment %}
* site.data.var.contacts = {{ site.data.var.contacts }}
* site.data.var.contacts['address'] = {{ site.data.var.contacts['address'] }}
{% assign  address = site.data.var.contacts['address'] %}
* address = {{ address }}
* address.val = {{ address.val }}

{% for s in site.data.var.contacts %}
* s = {{ s }}
* s[0] = {{ s[0] }}
* s[1] = {{ s[1] }}
{% endfor %}
{% endcomment %}

{% include el-contact-form.html %}

{% include el-youtube.html  id="c2pz2mlSfXA" %}

{% include el-contact-form.html icon="receiver" text="Заказать обратный звонок" %}



# h1
Абзац
## h2
Абзац
### h3
Абзац
#### h4
Абзац
##### h5
Абзац


Текст по центру страницы
{: .uk-text-center}

{% include el-slider.html  %}  добавляет в галерею все фотографии из папки  /img/galX.X, где X.X - sortid свойство страницы можно укзать nimg = "5"

![](/img/0/0.1.1.jpg){:class="uk-align-left uk-width-1-2"}  Картинка будет слева на половину ширины.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas sagittis bibendum. Curabitur laoreet neque a ex pretium, in volutpat sem placerat. Morbi ac dui nec nunc aliquet 
blandit gravida blandit dolor. Proin iaculis lorem ante, sodales feugiat orci varius in. Donec 
eu est augue. 

Nulla at convallis purus. Class aptent taciti sociosqu ad litora torquent per 
conubia nostra, per inceptos himenaeos. Aliquam rhoncus mi neque, non facilisis diam porta at. 
Aliquam eget lacus sed orci dapibus pharetra. Nunc scelerisque libero vel magna varius, ac 
molestie tortor pellentesque. Integer pellentesque justo urna, sed porta eros viverra ac. 
Donec placerat tristique nunc ut laoreet. Maecenas id nunc ut ante fringilla finibus lacinia 
quis nulla. Morbi et nibh id ante lobortis fermentum.

###### отменяет действие align-left и align-right
![](/img/0/0.1.2.00.jpg){:class="uk-align-right uk-width-1-3"} Картинка будет справа на треть ширины.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas sagittis bibendum. Curabitur laoreet neque a ex pretium, in volutpat sem placerat. Morbi ac dui nec nunc aliquet 
blandit gravida blandit dolor. Proin iaculis lorem ante, sodales feugiat orci varius in. Donec 
eu est augue. 

Nulla at convallis purus. Class aptent taciti sociosqu ad litora torquent per 
conubia nostra, per inceptos himenaeos. Aliquam rhoncus mi neque, non facilisis diam porta at. 
Aliquam eget lacus sed orci dapibus pharetra. Nunc scelerisque libero vel magna varius, ac 
molestie tortor pellentesque. Integer pellentesque justo urna, sed porta eros viverra ac. 
Donec placerat tristique nunc ut laoreet. Maecenas id nunc ut ante fringilla finibus lacinia 
quis nulla. Morbi et nibh id ante lobortis fermentum.

###### отменяет действие align-left и align-right



*Курсив*

**Жирный**

__Выделение__

___Выделение и курсив___

` ` Абзац с отступом. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas sagittis bibendum. Curabitur laoreet neque a ex pretium, in volutpat sem placerat. Morbi ac dui nec nunc aliquet blandit gravida blandit dolor. Proin iaculis lorem ante, sodales feugiat orci varius in. Donec eu est augue. Nulla at convallis purus.

---

Сыылка на PDF врутри абаца. {% include el-pdf.html text="12-03-2001" name="СНиП 12-03-2001.pdf" %} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas sagittis bibendum. Curabitur laoreet neque a ex pretium, in volutpat sem placerat. Morbi ac dui nec nunc aliquet blandit gravida blandit dolor. Proin iaculis lorem ante, sodales feugiat orci varius in. Donec eu est augue. Nulla at convallis purus.

- Список
- Список
- Список
- Список
- Список

1. Нумерованный
1. Нумерованный
1. Нумерованный
1. Нумерованный
1. Нумерованный

Эксперименты:

---{:class=".clear-both"}


