### Контакты:

* {% for p in site.data.var.phones %}<a href="tel:{{ p }}">{{ p }}</a>{%- unless forloop.last -%},&#32;{%- endunless -%}{% endfor %}
* <nobr>{{ site.data.var.contacts['address'].val }}</nobr>
* <a href="{{ site.data.var.contacts['email'].link }}">{{ site.data.var.contacts['email'].val }}</a>


