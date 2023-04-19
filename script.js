$(".ui.form").submit(async function (e) {
  e.preventDefault();
  $(".ui.form").addClass("loading");
  const repoIdentifier = $("#repoIdentifier").val();
  try {
    window.location.href = `https://github.com/${repoIdentifier}/community/license/new`;
  } catch (err) {
    alert(err.message);
  } finally {
    $(".ui.form").removeClass("loading");
  }
});
