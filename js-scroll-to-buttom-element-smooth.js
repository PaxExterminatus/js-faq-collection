scroll() {
    let shift = 1;
    if (cards.scrollHeight - window.scrollY < 0) {
        shift = -1;
    }
    for (let i = 0; i < (cards.scrollHeight - window.scrollY) * shift; i++ ) {
        setTimeout(function () { window.scrollBy(0,shift); console.log(cards.scrollTop) },50);
    }
}
