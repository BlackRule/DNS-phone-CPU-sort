//fixme duplicates like Snapdragon 680
//todo extractor from nanoreview
const cpus = [
    ["A16 Bionic", "Apple"],
    ["Dimensity 9200 Plus", "MediaTek"],
    ["Snapdragon 8 Gen 2", "Qualcomm"],
    ["Dimensity 9200", "MediaTek"],
    ["Dimensity 9000 Plus", "MediaTek"],
    ["Snapdragon 8 Plus Gen 1", "Qualcomm"],
    ["A15 Bionic", "Apple"],
    ["Dimensity 9000", "MediaTek"],
    ["Snapdragon 7 Plus Gen 2", "Qualcomm"],
    ["Snapdragon 8 Gen 1", "Qualcomm"],
    ["Dimensity 8200", "MediaTek"],
    ["Exynos 2200", "Samsung"],
    ["Snapdragon 888 Plus", "Qualcomm"],
    ["A14 Bionic", "Apple"],
    ["Snapdragon 888", "Qualcomm"],
    ["Tensor G2", "Google"],
    ["Dimensity 8100", "MediaTek"],
    ["Dimensity 8000", "MediaTek"],
    ["Exynos 2100", "Samsung"],
    ["Kirin 9000", "HiSilicon"],
    ["Google Tensor", "Google"],
    ["A13 Bionic", "Apple"],
    ["Dimensity 1200", "MediaTek"],
    ["Snapdragon 870", "Qualcomm"],
    ["Kirin 9000E", "HiSilicon"],
    ["Exynos 1080", "Samsung"],
    ["Dimensity 1300", "MediaTek"],
    ["Dimensity 8050", "MediaTek"],
    ["Snapdragon 865 Plus", "Qualcomm"],
    ["Dimensity 1100", "MediaTek"],
    ["Snapdragon 865", "Qualcomm"],
    ["Exynos 990", "Samsung"],
    ["Dimensity 7200", "MediaTek"],
    ["Dimensity 1000 Plus", "MediaTek"],
    ["A12 Bionic", "Apple"],
    ["Snapdragon 782G", "Qualcomm"],
    ["Snapdragon 7 Gen 1", "Qualcomm"],
    ["Snapdragon 778G Plus", "Qualcomm"],
    ["Snapdragon 860", "Qualcomm"],
    ["Snapdragon 855 Plus", "Qualcomm"],
    ["Snapdragon 780G", "Qualcomm"],
    ["Kirin 990 (5G)", "HiSilicon"],
    ["Snapdragon 855", "Qualcomm"],
    ["Snapdragon 778G", "Qualcomm"],
    ["Snapdragon 6 Gen 1", "Qualcomm"],
    ["Dimensity 7050", "MediaTek"],
    ["Exynos 1380", "Samsung"],
    ["Dimensity 1050", "MediaTek"],
    ["Dimensity 920", "MediaTek"],
    ["Dimensity 1000", "MediaTek"],
    ["Kirin 990 (4G)", "HiSilicon"],
    ["Exynos 9825", "Samsung"],
    ["Dimensity 1080", "MediaTek"],
    ["Exynos 9820", "Samsung"],
    ["Dimensity 900", "MediaTek"],
    ["Dimensity 1000L", "MediaTek"],
    ["Kirin 985", "HiSilicon"],
    ["Kirin 980", "HiSilicon"],
    ["Dimensity 930", "MediaTek"],
    ["Dimensity 820", "MediaTek"],
    ["Snapdragon 768G", "Qualcomm"],
    ["Kirin 820", "HiSilicon"],
    ["Kirin 820E", "HiSilicon"],
    ["Exynos 1280", "Samsung"],
    ["A11 Bionic", "Apple"],
    ["Snapdragon 845", "Qualcomm"],
    ["Snapdragon 695", "Qualcomm"],
    ["Exynos 980", "Samsung"],
    ["Snapdragon 765G", "Qualcomm"],
    ["Exynos 1330", "Samsung"],
    ["Snapdragon 4 Gen 1", "Qualcomm"],
    ["Dimensity 810", "MediaTek"],
    ["Dimensity 800U", "MediaTek"],
    ["Snapdragon 765", "Qualcomm"],
    ["Exynos 9810", "Samsung"],
    ["Helio G99", "MediaTek"],
    ["Snapdragon 750G", "Qualcomm"],
    ["Kirin 810", "HiSilicon"],
    ["Dimensity 6020", "MediaTek"],
    ["Dimensity 800", "MediaTek"],
    ["Snapdragon 732G", "Qualcomm"],
    ["Dimensity 720", "MediaTek"],
    ["Exynos 880", "Samsung"],
    ["Dimensity 700", "MediaTek"],
    ["Snapdragon 690", "Qualcomm"],
    ["Helio G90", "MediaTek"],
    ["Snapdragon 720G", "Qualcomm"],
    ["Snapdragon 730G", "Qualcomm"],
    ["Snapdragon 480", "Qualcomm"],
    ["Snapdragon 730", "Qualcomm"],
    ["Snapdragon 480 Plus", "Qualcomm"],
    ["Helio G95", "MediaTek"],
    ["Helio G90T", "MediaTek"],
    ["Snapdragon 835", "Qualcomm"],
    ["Helio G96", "MediaTek"],
    ["Snapdragon 685", "Qualcomm"],
    ["Snapdragon 680", "Qualcomm"],
    ["Helio G90T", "MediaTek"],
    ["Snapdragon 835", "Qualcomm"],
    ["Snapdragon 480 Plus", "Qualcomm"],
    ["Exynos 8895", "Samsung"],
    ["Snapdragon 680", "Qualcomm"],
    ["A10 Fusion", "Apple"],
    ["Snapdragon 712", "Qualcomm"],
    ["Snapdragon 678", "Qualcomm"],
    ["Kirin 970", "HiSilicon"],
    ["Snapdragon 710", "Qualcomm"],
    ["Helio P90", "MediaTek"],
    ["Helio G88", "MediaTek"],
    ["Tiger T618", "Unisoc"],
    ["Snapdragon 675", "Qualcomm"],
    ["Helio G85", "MediaTek"],
    ["Helio P95", "MediaTek"],
    ["Exynos 9611", "Samsung"],
    ["Snapdragon 820", "Qualcomm"],
    ["Kirin 960", "HiSilicon"],
    ["Snapdragon 670", "Qualcomm"],
    ["Helio G80", "MediaTek"],
    ["Apple A9", "Apple"],
    ["Exynos 9609", "Samsung"],
    ["Snapdragon 821", "Qualcomm"],
    ["Tiger T616", "Unisoc"],
    ["Tiger T700", "Unisoc"],
    ["Snapdragon 662", "Qualcomm"],
    ["JR510", "JLQ"], //Snapdragon 662 rebrand; not from nanoreview
    ["Helio G70", "MediaTek"],
    ["Snapdragon 665", "Qualcomm"],
    ["Kirin 710A", "HiSilicon"],
    ["Exynos 850", "Samsung"],
    ["Kirin 710F", "HiSilicon"],
    ["Helio P65", "MediaTek"],
    ["Helio P60", "MediaTek"],
    ["Helio P70", "MediaTek"],
    ["Kirin 710", "HiSilicon"],
    ["Exynos 8890", "Samsung"],
    ["Exynos 9610", "Samsung"],
    ["Tiger T612", "Unisoc"],
    ["Tiger T610", "Unisoc"],
    ["Snapdragon 660", "Qualcomm"],
    ["Unisoc T606", "Unisoc"],
    ["Helio G37", "MediaTek"],
    ["Snapdragon 460", "Qualcomm"],
    ["Exynos 7904", "Samsung"],
    ["Helio G35", "MediaTek"],
    ["Helio G36", "MediaTek"],
    ["Exynos 7420", "Samsung"],
    ["Snapdragon 636", "Qualcomm"],
    ["Helio P35", "MediaTek"],
    ["Snapdragon 632", "Qualcomm"],
    ["Kirin 950", "HiSilicon"],
    ["Helio A25", "MediaTek"],
    ["Helio G25", "MediaTek"],
    ["Helio A22 MT6761", "MediaTek"], //not from nanoreview
    ["Helio A20", "MediaTek"], //not from nanoreview
    ["Helio P22", "MediaTek"], //outside rating (sucks) AnTuTu 9: 96644
    ["MT6580M", "MediaTek"], //outside rating (totally sucks)
    ["MT6737T", "MediaTek"], //outside rating (totally sucks)
    ["MT6737V", "MediaTek"], //outside rating (totally sucks)
    ["MT6739", "MediaTek"], //outside rating (totally sucks)
    ["MT6739WA", "MediaTek"], //outside rating (totally sucks)
]

function extractText(element: Element) {
    if (element.firstElementChild?.firstChild?.nodeType !== Node.TEXT_NODE) return ''
    // @ts-ignore
    return (element.firstElementChild.firstChild.wholeText as string).trim()
}

function findIndex(element: Element) {
    const replacements = [
        ['Gen2', 'Gen 2'],
        [' for Galaxy', ''],
        [' MT6765', ''],
        ['+',' Plus'],
        ['680G','680'],
        ['778G 4G','778G'],
        ['870 5G','870'],
    ]
    let t = extractText(element)
    //Раньше компания UNiSoC называлась Spreadtrum
    if(t.includes('Spreadtrum')) return 999 //999 ~ absolutely sucks
    for (const replacement of replacements) {
        t=t.replace(replacement[0],replacement[1])
    }
    let idx = cpus.findIndex(
        (v) => `${v[1]} ${v[0]}` === t
    )

    if (idx === -1) {
        //Раньше компания UNiSoC называлась Spreadtrum
        //if Unisoc is not found in rating above => absolutely sucks
        if(t.includes('Unisoc')) return 999 //999 ~ absolutely sucks
        throw new Error(`"${t}"`)
    }
    return idx
}

function compare(element: Element, element2: Element) {
    let c1 = findIndex(element)
    let c2 = findIndex(element2)
    /*if (c2 - c1 > 0) {
        console.log(`swapped ${extractText(element)} and ${extractText(element2)}`)
    }*/
    return c1 - c2 //reversed
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    try {
        //TODO make work with expanded Модель процессора as well
        // use mutation observer for that
        // `as HTMLSpanElement | null` is a fix to TS bug "Variable is of type 'never' after potential assignment in a forEach lambda"
        let element: HTMLSpanElement | null = null as HTMLSpanElement | null
        document.querySelectorAll('.ui-collapse__link-text').forEach((el) => {
            if (el.innerHTML === 'Модель процессора') {
                element = el as HTMLSpanElement
            }
        })
        if (element !== null) {
            element.style.backgroundColor = 'red'
        } else throw new Error('FAIL ui-collapse__link-text Модель процессора')
        const cpuList = ((element.parentNode as ParentNode).parentNode as ParentNode).querySelector<HTMLDivElement>('.ui-checkbox-group_list')
        if (cpuList === null) {
            console.dir(element)
            throw new Error('FAIL parent')
        }
        let swapped = true
        while (swapped) {
            swapped = false
            for (let i = 0; i < cpuList.childElementCount-1; i++) {
                if (compare(cpuList.children[i], cpuList.children[i + 1]) > 0) {
                    cpuList.insertBefore(cpuList.children[i + 1], cpuList.children[i])
                    swapped = true
                }
            }
        }
    } finally {
        sendResponse("done");
    }

});
