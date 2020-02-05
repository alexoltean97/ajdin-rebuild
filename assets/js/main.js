
$(".slider--prev, .slider--next").click(function() {
    var t = $(this),
        e = $(".slider").find(".slider--item-left"),
        i = $(".slider").children().index(e),
        n = $(".slider").find(".slider--item-center"),
        s = $(".slider").children().index(n),
        r = $(".slider").find(".slider--item-right"),
        o = $(".slider").children().index(r),
        a = $(".slider").children().length,
        l = $(".slider--item-left"),
        c = $(".slider--item-center"),
        h = $(".slider--item-right"),
        u = $(".slider--item");
    $(".slider").animate({
        opacity: 0
    }, 400), setTimeout(function() {
        t.hasClass("slider--next") ? a - 1 > i && a - 1 > s && a - 1 > o ? (l.removeClass("slider--item-left").next().addClass("slider--item-left"), c.removeClass("slider--item-center").next().addClass("slider--item-center"), h.removeClass("slider--item-right").next().addClass("slider--item-right")) : i === a - 1 ? (u.removeClass("slider--item-left").first().addClass("slider--item-left"), c.removeClass("slider--item-center").next().addClass("slider--item-center"), h.removeClass("slider--item-right").next().addClass("slider--item-right")) : s === a - 1 ? (l.removeClass("slider--item-left").next().addClass("slider--item-left"), u.removeClass("slider--item-center").first().addClass("slider--item-center"), h.removeClass("slider--item-right").next().addClass("slider--item-right")) : (l.removeClass("slider--item-left").next().addClass("slider--item-left"), c.removeClass("slider--item-center").next().addClass("slider--item-center"), u.removeClass("slider--item-right").first().addClass("slider--item-right")) : 0 !== i && 0 !== s && 0 !== o ? (l.removeClass("slider--item-left").prev().addClass("slider--item-left"), c.removeClass("slider--item-center").prev().addClass("slider--item-center"), h.removeClass("slider--item-right").prev().addClass("slider--item-right")) : 0 === i ? (u.removeClass("slider--item-left").last().addClass("slider--item-left"), c.removeClass("slider--item-center").prev().addClass("slider--item-center"), h.removeClass("slider--item-right").prev().addClass("slider--item-right")) : 0 === s ? (l.removeClass("slider--item-left").prev().addClass("slider--item-left"), u.removeClass("slider--item-center").last().addClass("slider--item-center"), h.removeClass("slider--item-right").prev().addClass("slider--item-right")) : (l.removeClass("slider--item-left").prev().addClass("slider--item-left"), c.removeClass("slider--item-center").prev().addClass("slider--item-center"), u.removeClass("slider--item-right").last().addClass("slider--item-right"))
    }, 400), $(".slider").animate({
        opacity: 1
    }, 400)
});


$(".work-request--information input").focusout(function() {
    "" === $(this).val() ? $(this).removeClass("has-value") : $(this).addClass("has-value")
});