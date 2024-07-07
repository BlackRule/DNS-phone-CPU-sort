//fixme duplicates like Snapdragon 680
//todo extractor from nanoreview
const cpus = [
    ["Snapdragon 8 Gen 3", "Qualcomm"],
    ["A17 Pro", "Apple"],
    ["Dimensity 9200 Plus", "MediaTek"],
    ["Exynos 2400", "Samsung"],
    ["A16 Bionic", "Apple"],
    ["Snapdragon 8 Plus Gen 2", "Qualcomm"],
    ["Snapdragon 8 Gen 2 Leading Version", "Qualcomm"],//from DNS
    ["Snapdragon 8 Gen 2", "Qualcomm"],
    ["Dimensity 9200", "MediaTek"],
    ["A15 Bionic", "Apple"],
    ["Snapdragon 8 Plus Gen 1", "Qualcomm"],
    ["Dimensity 8300", "MediaTek"],
    ["Dimensity 9000 Plus", "MediaTek"],
    ["Tensor G3", "Google"],
    ["Snapdragon 7 Plus Gen 2", "Qualcomm"],
    ["Snapdragon 8 Gen 1", "Qualcomm"],
    ["A14 Bionic", "Apple"],
    ["Dimensity 9000", "MediaTek"],
    ["Tensor", "Google"],
    ["Kirin 9000", "HiSilicon"],
    ["Exynos 2200", "Samsung"],
    ["Snapdragon 888 Plus", "Qualcomm"],
    ["Exynos 2100", "Samsung"],
    ["Snapdragon 888", "Qualcomm"],
    ["A13 Bionic", "Apple"],
    ["Dimensity 8200 Ultra", "MediaTek"],//from DNS
    ["Dimensity 8200", "MediaTek"],
    ["Tensor G2", "Google"],
    ["Dimensity 8100", "MediaTek"],
    ["Snapdragon 870", "Qualcomm"],
    ["Kirin 990 5G", "HiSilicon"], //not in rating
    ["Dimensity 1100", "MediaTek"],
    ["Snapdragon 865 Plus", "Qualcomm"],
    ["Exynos 1480", "Samsung"],
    ["Dimensity 7200 Ultra", "MediaTek"],
    ["Dimensity 8050", "MediaTek"],
    ["Dimensity 8020", "MediaTek"],
    ["Kirin 9000S", "HiSilicon"],
    ["Dimensity 7200", "MediaTek"],
    ["Dimensity 1200", "MediaTek"],
    ["Snapdragon 865", "Qualcomm"],
    ["Dimensity 1300", "MediaTek"],
    ["Kirin 990 (4G)", "HiSilicon"],
    ["Exynos 990", "Samsung"],
    ["Kirin 990 (5G)", "HiSilicon"],
    ["Snapdragon 7 Gen 1 Accelerated Edition", "Qualcomm"],//from DNS
    ["Snapdragon 7 Gen 1", "Qualcomm"],
    ["Snapdragon 782G", "Qualcomm"],
    ["A12 Bionic", "Apple"],
    ["Dimensity 1000 Plus", "MediaTek"],
    ["Snapdragon 7s Gen 2", "Qualcomm"],
    ["Snapdragon 778G 5G", "Qualcomm"],
    ["Snapdragon 778G Plus", "Qualcomm"],
    ["Exynos 9820", "Samsung"],
    ["Snapdragon 778G", "Qualcomm"],
    ["Snapdragon 780G", "Qualcomm"],
    ["Snapdragon 860", "Qualcomm"],
    ["Exynos 9825", "Samsung"],
    ["Snapdragon 855", "Qualcomm"],
    ["Kirin 985", "HiSilicon"], //not in rating
    ["Kirin 820E", "HiSilicon"], //not in rating
    ["Snapdragon 6 Gen 1", "Qualcomm"],
    ["Exynos 1380", "Samsung"],
    ["Dimensity 1050", "MediaTek"],
    ["Dimensity 7050", "MediaTek"],
    ["Dimensity 1080", "MediaTek"],
    ["Dimensity 920", "MediaTek"],
    ["Kirin 980", "HiSilicon"],
    ["Dimensity 7030", "MediaTek"],
    ["Snapdragon 855 Plus", "Qualcomm"],
    ["Dimensity 930", "MediaTek"],
    ["Dimensity 900", "MediaTek"],
    ["Dimensity 7020", "MediaTek"],
    ["Dimensity 820", "MediaTek"],
    ["Exynos 1330", "Samsung"],
    ["Exynos 1280", "Samsung"],
    ["Snapdragon 4 Gen 2", "Qualcomm"],
    ["Unisoc T820", "Unisoc"],
    ["Dimensity 6080", "MediaTek"],
    ["Snapdragon 695", "Qualcomm"],
    ["Exynos 9810", "Samsung"],
    ["Snapdragon 4 Gen 1", "Qualcomm"],
    ["Dimensity 810", "MediaTek"],
    ["Snapdragon 750G", "Qualcomm"],
    ["Exynos 980", "Samsung"],
    ["Snapdragon 845", "Qualcomm"],
    ["Dimensity 6100 Plus", "MediaTek"],
    ["Kirin 810", "HiSilicon"],
    ["Dimensity 800", "MediaTek"],
    ["Dimensity 800U", "MediaTek"],
    ["A11 Bionic", "Apple"],
    ["Dimensity 6020", "MediaTek"],
    ["Helio G99", "MediaTek"],
    ["Snapdragon 732G", "Qualcomm"],
    ["Dimensity 720", "MediaTek"],
    ["Snapdragon 765G", "Qualcomm"],
    ["Snapdragon 480 Plus", "Qualcomm"],
    ["Dimensity 700", "MediaTek"],
    ["Snapdragon 690", "Qualcomm"],
    ["Snapdragon 720G", "Qualcomm"],
    ["Helio G90T", "MediaTek"],
    ["Snapdragon 685", "Qualcomm"],
    ["Snapdragon 480", "Qualcomm"],
    ["Helio G95", "MediaTek"],
    ["Helio G96", "MediaTek"],
    ["Snapdragon 730G", "Qualcomm"],
    ["Snapdragon 730", "Qualcomm"],
    ["Snapdragon 680", "Qualcomm"],
    ["Kirin 970", "HiSilicon"],
    ["Snapdragon 835", "Qualcomm"],
    ["A10 Fusion", "Apple"],
    ["Helio P90", "MediaTek"],
    ["Exynos 8895", "Samsung"],
    ["Helio P95", "MediaTek"],
    ["Snapdragon 678", "Qualcomm"],
    ["Snapdragon 712", "Qualcomm"],
    ["Snapdragon 675", "Qualcomm"],
    ["Tiger T618", "Unisoc"],
    ["Snapdragon 710", "Qualcomm"],
    ["Tiger T616", "Unisoc"],
    ["Helio G91", "MediaTek"],
    ["Helio G88", "MediaTek"],
    ["Tiger T700", "Unisoc"],
    ["Helio G85", "MediaTek"],
    ["Helio G80", "MediaTek"],
    ["Snapdragon 821", "Qualcomm"],
    ["Tiger T612", "Unisoc"],
    ["Unisoc T606", "Unisoc"],
    ["Tiger T610", "Unisoc"],
    ["Exynos 850", "Samsung"],
    ["Snapdragon 662", "Qualcomm"],
    ["JR510", "JLQ"], //Snapdragon 662 rebrand; not from nanoreview
    ["Helio G70", "MediaTek"],
    ["Kirin 710F", "HiSilicon"],
    ["Exynos 9611", "Samsung"],
    ["Apple A9", "Apple"],
    ["Exynos 9609", "Samsung"],
    ["Snapdragon 665", "Qualcomm"],
    ["Kirin 960", "HiSilicon"],
    ["Snapdragon 670", "Qualcomm"],
    ["Helio P70", "MediaTek"],
    ["Exynos 9610", "Samsung"],
    ["Kirin 710A", "HiSilicon"],
    ["Helio P65", "MediaTek"],
    ["Helio P60", "MediaTek"],
    ["Kirin 710", "HiSilicon"],
    ["Snapdragon 660", "Qualcomm"],
    ["Helio G37", "MediaTek"],
    ["Snapdragon 460", "Qualcomm"],
    ["Snapdragon 820", "Qualcomm"],
    ["Snapdragon 632", "Qualcomm"],
    ["Exynos 8890", "Samsung"],
    ["Helio G36", "MediaTek"],
    ["Helio G35", "MediaTek"],
    ["Exynos 7904", "Samsung"],
    ["Snapdragon 636", "Qualcomm"],
    ["Helio P35", "MediaTek"],
    ["Helio G25", "MediaTek"],
    ["Helio A22", "MediaTek"],
    ["Helio A25", "MediaTek"],
    ["Exynos 7884B", "Samsung"],
    ["Exynos 7420", "Samsung"],
    ["Exynos 7885", "Samsung"],
    ["Snapdragon 439", "Qualcomm"],
    ["Helio P22", "MediaTek"],
    ["Unisoc SC9863A", "Unisoc"],
    ["Snapdragon 630", "Qualcomm"],
    ["Snapdragon 450", "Qualcomm"],
    ["Kirin 659", "HiSilicon"],
    ["Exynos 7880", "Samsung"],
    ["Snapdragon 625", "Qualcomm"],
    ["Exynos 7870", "Samsung"],
    ["Snapdragon 430", "Qualcomm"],
    ["Snapdragon 215", "Qualcomm"],//outside rating (sucks)
    ["Helio A22 MT6761", "MediaTek"], //not from nanoreview
    ["Helio A20", "MediaTek"], //not from nanoreview
    ["Helio P22", "MediaTek"], //outside rating (sucks) AnTuTu 9: 96644
    ["Helio P23", "MediaTek"], //outside rating (sucks)
    ["MT6580M", "MediaTek"], //outside rating (totally sucks)
    ["MT6580A", "MediaTek"], //outside rating (totally sucks)
    ["MT6580P", "MediaTek"], //outside rating (totally sucks)
    ["MT6737", "MediaTek"], //outside rating (totally sucks)
    ["MT6737T", "MediaTek"], //outside rating (totally sucks)
    ["MT6737V", "MediaTek"], //outside rating (totally sucks)
    ["MT6739", "MediaTek"], //outside rating (totally sucks)
    ["MT6739WA", "MediaTek"], //outside rating (totally sucks)
    ["MT6739WW", "MediaTek"], //outside rating (totally sucks)
    ["MT8765", "MediaTek"], //outside rating (totally sucks)
]

function extractText(element: Element) {
    if (element.firstElementChild?.firstChild?.nodeType !== Node.TEXT_NODE) return ''
    // @ts-ignore
    return (element.firstElementChild.firstChild.wholeText as string).trim()
}

function findIndex(element: Element) {
    let t = extractText(element)
    //Раньше компания UNiSoC называлась Spreadtrum
    if(t.includes('Spreadtrum')) return 999 //999 ~ absolutely sucks
    const replacements = [
        ['Gen2', 'Gen 2'],
        [' for Galaxy', ''],
        [' MT6765', ''],
        [' MT6762', ''],
        [' MT6763', ''],
        [' MT6771V', ''],
        ['+',' Plus'],
        ['680G','680'],
        ['778G 4G','778G'],
        ['870 5G','870'],
        ['(Accelerated Edition)','Accelerated Edition'],
        [' Ultra',''],
        [' Ultimate','']
    ]
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
        return idx
    }
    /*if (idx === -1) {
        //Раньше компания UNiSoC называлась Spreadtrum
        //if Unisoc is not found in rating above => absolutely sucks
        if(t.includes('Unisoc')) return 999 //999 ~ absolutely sucks
        throw new Error(`"${t}"`)
    }*/
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
    //TODO make work with expanded Модель процессора as well
    // use mutation observer for that
    // `as HTMLSpanElement | null` is a fix to TS bug "Variable is of type 'never' after potential assignment in a forEach lambda"
    if(msg==='sortCPUs') {
        let success = false
        let element: HTMLSpanElement | null = null as HTMLSpanElement | null
        document.querySelectorAll('.ui-collapse__link-text').forEach((el) => {
            if (el.innerHTML === 'Модель процессора') {
                element = el as HTMLSpanElement
            }
        })
        try {
            if (element === null) {
                throw new Error('FAIL ui-collapse__link-text Модель процессора')
            } else {
                element.style.backgroundColor = 'red'
            }
            const cpuList = ((element.parentNode as ParentNode).parentNode as ParentNode).querySelector<HTMLDivElement>('.ui-checkbox-group_list')
            if (cpuList === null) {
                console.dir(element)
                throw new Error('FAIL parent')
            }
            let swapped = true
            while (swapped) {
                swapped = false
                for (let i = 0; i < cpuList.childElementCount - 1; i++) {
                    if (compare(cpuList.children[i], cpuList.children[i + 1]) > 0) {
                        cpuList.insertBefore(cpuList.children[i + 1], cpuList.children[i])
                        swapped = true
                    }
                }
            }
            success = true
        } catch (e) {
            console.log(e)
        } finally {
            sendResponse("done");
            if (element === null) return
            if (success) element.style.backgroundColor = 'green'
        }
    }
    if(msg==='checkCPUs') {
        let success = false
        let element: HTMLSpanElement | null = null as HTMLSpanElement | null
        document.querySelectorAll('.ui-collapse__link-text').forEach((el) => {
            if (el.innerHTML === 'Модель процессора') {
                element = el as HTMLSpanElement
            }
        })
        try {
            if (element === null) {
                throw new Error('FAIL ui-collapse__link-text Модель процессора')
            } else {
                element.style.backgroundColor = 'red'
            }
            const cpuList = ((element.parentNode as ParentNode).parentNode as ParentNode).querySelector<HTMLDivElement>('.ui-checkbox-group_list')
            if (cpuList === null) {
                console.dir(element)
                throw new Error('FAIL parent')
            }
            for (let i = 0; i < cpuList.childElementCount; i++) {
                    if(findIndex(cpuList.children[i])===-1)
                        console.log(`NF ${extractText(cpuList.children[i])}`)
                }
            success = true
        } catch (e) {
            console.log(e)
        } finally {
            sendResponse("done");
            if (element === null) return
            if (success) element.style.backgroundColor = 'green'
        }
    }
});
