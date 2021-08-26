const BASE_IMG_PATH = "/assets/img/";
$(() => {
  $($("#root")).prepend($("<div>").addClass("container"));
});

$(() => {
  const ROOT_EL = $(".container");
  DATA.map(({ name, photo, date, link }, i) => {
    $(`
        <div class="item item-${i + 1}">
            <div>
                <div>
                    <a href="${link}" target="_blank">Հոդվածն այստեղ</a>
                </div>
                <img src="${BASE_IMG_PATH + photo}" />
            </div>
            <div>
                <div>
                    <h3>${name}</h3>
                </div>
                <div>
                    <h4>${date}</h4>
                </div>
            </div>
        </div>

    `).appendTo(ROOT_EL);
  });
});
$(() => {
  $($("<div>").addClass("box box-1")).appendTo($(".container"));
  $($("<div>").addClass("box box-2")).appendTo($(".container"));
  for (let i = 0; i <= $(".item").length; i++) {
    const item = $(`.item-${i}`);
    if (i <= 3) {
      $(".box-1").append(item);
    } else {
      $(".box-2").append(item);
    }
  }
});
