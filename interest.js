function CalcInt() {
    const p = document.getElementById("principal").value;
    p1 = parseInt(p);
    const r = document.getElementById("rate").value;
    r1 = parseInt(r);
    const t = document.getElementById("time").value;
    t1 = parseInt(t);
    var interest = (p1*r1*t1)/100;
    document.getElementById("res").value = interest;
}