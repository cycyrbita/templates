(function (post, comment, sale, footer) {
    var now = new Date(),
        weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
        d = weekAgo.getDate(),
        m = weekAgo.getMonth() + 1,
        y = weekAgo.getFullYear();
    post[0].textContent = buildDate(d, m, y);
    footer[0].textContent = now.getFullYear();
    sale[0].textContent = buildDate(now.getDate(), now.getMonth() + 1, now.getFullYear());
    for (var i = 0; i < comment.length; i++) {
        var commentDate = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), Math.round(weekAgo.getDate() + (i * 1))),
            chooseDate = commentDate < now ? commentDate : now;
        comment[i].textContent = buildDate(
            chooseDate.getDate(),
            chooseDate.getMonth() + 1,
            chooseDate.getFullYear())
    }

    function zero(val) {
        return val.toString().length === 1 ? '0' + val : val;
    }

    function buildDate(d, m, y) {
        return [zero(d), zero(m), y,].join('.');
    }
})(
    document.getElementsByClassName('post-date'),
    document.getElementsByClassName('comment-date'),
    document.getElementsByClassName('sale'),
    document.getElementsByClassName('footer-date')
);
