scroll() {
    let shift = (elementId.scrollHeight - window.scrollY) < 0 ? -1 : 1;
    for (let i = 0; i < (elementId.scrollHeight - window.scrollY) * shift; i++ ) {
        setTimeout(function () { window.scrollBy(0,shift);},50);
    }
}
