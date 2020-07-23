### Контакты:

* {%- for p in site.data.var.phones -%}<a href="tel:{{ p }}">{{ p }}</a>{%- unless forloop.last -%},&#32;{%- endunless -%}{% endfor %}
* {{ site.data.var.contacts['address'].val }}
* <a href="{{ site.data.var.contacts['email'].link }}">{{ site.data.var.contacts['email'].val }}</a>


