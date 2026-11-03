// Equity from Astral, indexed to a $10,000 start: last sampled value of each session (QQQ is sampled about monthly).
// Series ending in Paper are paper runs to 3 Nov 2026; the rest are backtests.
const EQUITY = {
    aaplBacktest: [
        ["3 Aug", 9964.94], ["4 Aug", 9953.98], ["5 Aug", 9845.02], ["6 Aug", 9776.33],
        ["7 Aug", 9729.79], ["10 Aug", 9585.95], ["11 Aug", 9545.37], ["12 Aug", 9534.89],
        ["13 Aug", 9503.96], ["14 Aug", 9560.26], ["17 Aug", 9512.21], ["18 Aug", 9496.5],
        ["19 Aug", 9396.37], ["20 Aug", 9326.96], ["21 Aug", 9276.64], ["24 Aug", 9356.72],
        ["25 Aug", 9382.44], ["26 Aug", 9384.26], ["27 Aug", 9369.96], ["28 Aug", 9372.18],
        ["31 Aug", 9255.9], ["1 Sep", 9248.4], ["2 Sep", 9279.31], ["3 Sep", 9328.43],
        ["4 Sep", 9349.39], ["8 Sep", 9310.48], ["9 Sep", 9174.42], ["10 Sep", 9190.43],
        ["11 Sep", 9224.71], ["14 Sep", 9390.08], ["15 Sep", 9381.16], ["16 Sep", 9408.64],
        ["17 Sep", 9321.23], ["18 Sep", 9376.05], ["21 Sep", 9368.98], ["22 Sep", 9374.76]
    ],
    metaPaper: [
        ["12 Oct", 9952.05], ["13 Oct", 10045.27], ["14 Oct", 9936.74], ["15 Oct", 10036.68],
        ["16 Oct", 9809.7], ["19 Oct", 9865.98], ["20 Oct", 9801.84], ["21 Oct", 9844.31],
        ["22 Oct", 9205.33], ["23 Oct", 9215.39], ["26 Oct", 9170.46], ["27 Oct", 9091.96],
        ["28 Oct", 9062.94], ["29 Oct", 9062.94], ["30 Oct", 8987.97], ["2 Nov", 8955.27],
        ["3 Nov", 9041.7]
    ],
    qqq: [
        ["29 Dec 2023", 10000], ["1 Feb 2024", 10000], ["4 Mar 2024", 10000], ["3 Apr 2024", 10000],
        ["2 May 2024", 10000], ["3 Jun 2024", 10000], ["5 Jul 2024", 10000], ["5 Aug 2024", 10000],
        ["4 Sep 2024", 10000], ["3 Oct 2024", 10000], ["1 Nov 2024", 10000], ["4 Dec 2024", 10000],
        ["6 Jan 2025", 10000], ["6 Feb 2025", 10000], ["3 Mar 2025", 10000], ["1 Apr 2025", 10025.56],
        ["1 May 2025", 10025.56], ["9 May 2025", 10095.99], ["2 Jun 2025", 10095.99], ["3 Jul 2025", 10095.99],
        ["4 Aug 2025", 10095.99], ["3 Sep 2025", 10095.99], ["2 Oct 2025", 10095.99], ["31 Oct 2025", 10095.99],
        ["3 Dec 2025", 10095.99], ["5 Jan 2026", 10088.57], ["4 Feb 2026", 10088.57], ["9 Mar 2026", 10088.57],
        ["8 Apr 2026", 10088.57], ["4 May 2026", 10088.57], ["18 May 2026", 10146.89], ["3 Jun 2026", 10146.89],
        ["6 Jul 2026", 10146.89], ["4 Aug 2026", 10146.89], ["10 Sep 2026", 10146.89]
    ],
    spy: [
        ["18 Jun", 10000], ["22 Jun", 10000], ["23 Jun", 10000], ["24 Jun", 10000],
        ["25 Jun", 10000], ["26 Jun", 10004.15], ["29 Jun", 10147.51], ["30 Jun", 10158.53],
        ["1 Jul", 10183.5], ["2 Jul", 10206.01], ["6 Jul", 10211.57], ["7 Jul", 10171.16],
        ["8 Jul", 10164.55], ["9 Jul", 10164.55], ["10 Jul", 10168.97], ["13 Jul", 10180.59],
        ["14 Jul", 10180.59], ["15 Jul", 10157.46], ["16 Jul", 10158.95], ["17 Jul", 10162.93],
        ["20 Jul", 10162.93], ["21 Jul", 10165.77], ["22 Jul", 10175.32], ["23 Jul", 10156.66],
        ["24 Jul", 10156.66], ["27 Jul", 10156.66], ["28 Jul", 10161.35], ["29 Jul", 10110.93],
        ["30 Jul", 10110.93], ["31 Jul", 10117.55], ["3 Aug", 10117.55], ["4 Aug", 10172.68],
        ["5 Aug", 10215.38], ["6 Aug", 10205.33], ["7 Aug", 10200.05], ["10 Aug", 10196.6],
        ["11 Aug", 10202.1], ["12 Aug", 10200.1], ["13 Aug", 10210.7], ["14 Aug", 10197.11],
        ["17 Aug", 10206.42], ["18 Aug", 10206.42], ["19 Aug", 10206.42], ["20 Aug", 10206.42],
        ["21 Aug", 10206.42], ["24 Aug", 10206.42], ["25 Aug", 10206.42], ["26 Aug", 10207.4],
        ["27 Aug", 10199.89], ["28 Aug", 10174.49], ["31 Aug", 10174.49], ["1 Sep", 10174.49],
        ["2 Sep", 10174.49], ["3 Sep", 10200.64], ["4 Sep", 10146.63], ["8 Sep", 10126.19],
        ["9 Sep", 10126.19], ["10 Sep", 10126.19], ["11 Sep", 10126.12]
    ],
    spyv3: [
        ["18 Jun", 10000], ["22 Jun", 10000], ["23 Jun", 10000], ["24 Jun", 10000],
        ["25 Jun", 10000], ["26 Jun", 10004.15], ["29 Jun", 10152.27], ["30 Jun", 10169.71],
        ["1 Jul", 10191.6], ["2 Jul", 10173.57], ["6 Jul", 10174.6], ["7 Jul", 10132.4],
        ["8 Jul", 10122.97], ["9 Jul", 10122.97], ["10 Jul", 10146.67], ["13 Jul", 10132.04],
        ["14 Jul", 10132.04], ["15 Jul", 10114.06], ["16 Jul", 10101.04], ["17 Jul", 10099.63],
        ["20 Jul", 10099.63], ["21 Jul", 10112.91], ["22 Jul", 10121.25], ["23 Jul", 10100.25],
        ["24 Jul", 10100.25], ["27 Jul", 10100.25], ["28 Jul", 10121.12], ["29 Jul", 10070.65],
        ["30 Jul", 10070.65], ["31 Jul", 10079.17], ["3 Aug", 10141.61], ["4 Aug", 10213.57],
        ["5 Aug", 10257.88], ["6 Aug", 10247.78], ["7 Aug", 10237.14], ["10 Aug", 10233.48],
        ["11 Aug", 10242.89], ["12 Aug", 10242.89], ["13 Aug", 10240.66], ["14 Aug", 10219.77],
        ["17 Aug", 10230.6], ["18 Aug", 10230.6], ["19 Aug", 10230.6], ["20 Aug", 10230.6],
        ["21 Aug", 10230.6], ["24 Aug", 10230.6], ["25 Aug", 10230.73], ["26 Aug", 10223.74],
        ["27 Aug", 10237.63], ["28 Aug", 10226.66], ["31 Aug", 10228.17], ["1 Sep", 10228.17],
        ["2 Sep", 10228.17], ["3 Sep", 10258.31], ["4 Sep", 10202.47], ["8 Sep", 10181.92],
        ["9 Sep", 10181.92], ["10 Sep", 10181.92], ["11 Sep", 10184.48]
    ],
    aaplPaper: [
        ["24 Sep", 9975.27], ["25 Sep", 10031.85], ["28 Sep", 10015.07], ["29 Sep", 10005.3],
        ["30 Sep", 10020.89], ["1 Oct", 10001.57], ["2 Oct", 10114.26], ["5 Oct", 10114.26],
        ["6 Oct", 10114.26], ["7 Oct", 10129.03], ["8 Oct", 10276.72], ["9 Oct", 10147.91],
        ["12 Oct", 10307.6], ["13 Oct", 10249.9], ["14 Oct", 10152.8], ["15 Oct", 10157.37],
        ["16 Oct", 10179.32], ["19 Oct", 10203.74], ["20 Oct", 10235.26], ["21 Oct", 10269.5],
        ["22 Oct", 10258.05], ["23 Oct", 10233.09], ["26 Oct", 10157.89], ["27 Oct", 10161.86],
        ["28 Oct", 10080.94], ["29 Oct", 10251.4], ["30 Oct", 10097.18], ["2 Nov", 10078.76]
    ],
    metaBacktest: [
        ["9 Jul", 9994.75], ["10 Jul", 9994.96], ["13 Jul", 10142.46], ["14 Jul", 10122.9],
        ["15 Jul", 10173.03], ["16 Jul", 10026.35], ["17 Jul", 9934.59], ["20 Jul", 10047.41],
        ["21 Jul", 10099.24], ["22 Jul", 9941.31], ["23 Jul", 10050.97], ["24 Jul", 9995.14],
        ["27 Jul", 10082.93], ["28 Jul", 10023.28], ["29 Jul", 10002.57], ["30 Jul", 9920.3],
        ["31 Jul", 9978.41], ["3 Aug", 9939.4], ["4 Aug", 9916.06], ["5 Aug", 10037.26],
        ["6 Aug", 10166.63], ["7 Aug", 10122.65], ["10 Aug", 9993.24], ["11 Aug", 10006.39],
        ["12 Aug", 9782.03], ["13 Aug", 9893.57], ["14 Aug", 9835.04], ["17 Aug", 9651.34],
        ["18 Aug", 9459.0], ["19 Aug", 9614.48], ["20 Aug", 9557.4], ["21 Aug", 9619.37],
        ["24 Aug", 9692.74], ["25 Aug", 9781.53], ["26 Aug", 9723.73], ["27 Aug", 9693.39],
        ["28 Aug", 9751.66], ["31 Aug", 9900.72], ["1 Sep", 10095.12], ["2 Sep", 10159.44],
        ["3 Sep", 10154.89], ["4 Sep", 10038.96], ["8 Sep", 10110.26], ["9 Sep", 10347.71],
        ["10 Sep", 10395.04], ["11 Sep", 10299.55], ["14 Sep", 10329.0], ["15 Sep", 10568.5],
        ["16 Sep", 10583.99], ["17 Sep", 10589.67], ["18 Sep", 10476.65], ["21 Sep", 10690.49],
        ["22 Sep", 10596.24], ["23 Sep", 10819.48], ["24 Sep", 10963.75], ["25 Sep", 11022.96],
        ["28 Sep", 11109.19], ["29 Sep", 11052.12], ["30 Sep", 11191.96], ["1 Oct", 11291.77],
        ["2 Oct", 11275.81], ["5 Oct", 11291.17], ["6 Oct", 11404.35], ["7 Oct", 11272.26],
        ["8 Oct", 11183.53], ["9 Oct", 11216.29]
    ]
};

const START_EQUITY = 10000;
const PAD = { top: 12, right: 8, bottom: 22, left: 52 };
const SVG_NS = "http://www.w3.org/2000/svg";

function svgEl(name, attrs, text) {
    const el = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    if (text !== undefined) el.textContent = text;
    return el;
}

function formatDollars(value) {
    return "$" + Math.round(value).toLocaleString("en-US");
}

function formatReturn(value) {
    const pct = (value / START_EQUITY - 1) * 100;
    return (pct >= 0 ? "+" : "−") + Math.abs(pct).toFixed(2) + "%";
}

function drawEquity(plot, points) {
    plot.replaceChildren();
    const width = plot.clientWidth;
    const height = plot.clientHeight;
    const innerW = width - PAD.left - PAD.right;
    const innerH = height - PAD.top - PAD.bottom;

    const values = points.map((point) => point[1]).concat(START_EQUITY);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const margin = (max - min) * 0.08;
    const low = min - margin;
    const high = max + margin;

    const x = (i) => PAD.left + (i / (points.length - 1)) * innerW;
    const y = (value) => PAD.top + (1 - (value - low) / (high - low)) * innerH;

    const last = points[points.length - 1];
    const svg = svgEl("svg", {
        role: "img",
        "aria-label": `Equity from ${points[0][0]} to ${last[0]}, ending at ${formatDollars(last[1])}, ${formatReturn(last[1])} on the $10,000 start.`
    });

    svg.append(
        svgEl("line", { x1: PAD.left, x2: width - PAD.right, y1: y(START_EQUITY), y2: y(START_EQUITY), stroke: "#6b6b6b", "stroke-dasharray": "2 4" }),
        svgEl("text", { x: PAD.left - 8, y: y(START_EQUITY) + 4, "text-anchor": "end" }, "$10,000"),
        svgEl("text", { x: PAD.left - 8, y: y(max) + 4, "text-anchor": "end" }, y(START_EQUITY) - y(max) > 16 ? formatDollars(max) : ""),
        svgEl("text", { x: PAD.left - 8, y: y(min) + 4, "text-anchor": "end" }, y(min) - y(START_EQUITY) > 16 ? formatDollars(min) : ""),
        svgEl("text", { x: PAD.left, y: height - 4 }, points[0][0]),
        svgEl("text", { x: width - PAD.right, y: height - 4, "text-anchor": "end" }, last[0]),
        svgEl("polyline", {
            points: points.map((point, i) => `${x(i)},${y(point[1])}`).join(" "),
            fill: "none",
            stroke: "#fff",
            "stroke-width": 2,
            "stroke-linejoin": "round",
            "stroke-linecap": "round"
        })
    );

    const crosshair = svgEl("line", { y1: PAD.top, y2: height - PAD.bottom, stroke: "#6b6b6b", visibility: "hidden" });
    const marker = svgEl("circle", { r: 4, fill: "#fff", stroke: "#000", "stroke-width": 2, visibility: "hidden" });
    svg.append(crosshair, marker);
    plot.append(svg);

    const tip = document.createElement("div");
    tip.className = "equity__tip";
    tip.hidden = true;
    plot.append(tip);

    const showPoint = (event) => {
        const left = svg.getBoundingClientRect().left;
        const ratio = (event.clientX - left - PAD.left) / innerW;
        const i = Math.max(0, Math.min(points.length - 1, Math.round(ratio * (points.length - 1))));
        const [date, value] = points[i];

        crosshair.setAttribute("x1", x(i));
        crosshair.setAttribute("x2", x(i));
        crosshair.setAttribute("visibility", "visible");
        marker.setAttribute("cx", x(i));
        marker.setAttribute("cy", y(value));
        marker.setAttribute("visibility", "visible");

        tip.textContent = `${date}  ${formatDollars(value)}  ${formatReturn(value)}`;
        tip.hidden = false;
        tip.style.left = Math.min(x(i) + 8, width - tip.offsetWidth) + "px";
    };

    // Touch screens fire pointerdown on a tap, without any pointermove.
    svg.addEventListener("pointerdown", showPoint);
    svg.addEventListener("pointermove", showPoint);

    svg.addEventListener("pointerleave", () => {
        crosshair.setAttribute("visibility", "hidden");
        marker.setAttribute("visibility", "hidden");
        tip.hidden = true;
    });
}

function drawAllEquity() {
    document.querySelectorAll(".equity").forEach((figure) => {
        drawEquity(figure.querySelector(".equity__plot"), EQUITY[figure.dataset.series]);
    });
}

drawAllEquity();
window.addEventListener("resize", drawAllEquity);
