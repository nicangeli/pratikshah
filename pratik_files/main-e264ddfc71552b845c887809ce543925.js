(function() {
var e, i;
e = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i), i = $(window).width() <= 727 || $(window).height() < 400, 
window.runAfterDomBinding.add("persona", function() {
var e;
return Bobcat.TH.applyTouchNav(), e = function() {
return $(".wide-bg").each(function() {
var e, i;
return i = $(this), e = i.find(".bottom").first(), e.height() > i.height() - 50 ? (e.addClass("relative"), 
i.addClass("relative")) :(e.removeClass("relative"), i.removeClass("relative"));
});
}, e(), setTimeout(e, 1e3), $(window).resize(e), 0 !== $(".side-header").length && $(".side-header").is(":visible") ? void 0 :$(".offset-three").removeClass("offset-three").addClass("offset-two");
});
}).call(this);