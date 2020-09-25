let form = document.getElementById("contact-form");

form.onsubmit = function(e) {
  e.preventDefault();

  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.open("POST", form.action, true);

  xhr.onload = function(e) {
    var response = JSON.parse(xhr.response);
    console.log(xhr.status);

    if (xhr.status >= 200 && xhr.status < 300) {
      UIkit.modal(document.getElementById("modal-contact-form")).hide();
      UIkit.notification({
        message: "Успешно отправлено!",
        status: "success",
        pos: "bottom-right",
        timeout: 5000
      });
    } else {
      UIkit.notification({
        message: "Ошибка!",
        status: "danger",
        pos: "bottom-right",
        timeout: 5000
      });
    }
  };

  xhr.send(formData);
};
