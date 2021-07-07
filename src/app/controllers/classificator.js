const { educacional, hospedagem, professional, residencial, reunion, healthy, institutional, comercial } = require("./classes");

const classes = {
    educacional,
    hospedagem,
    professional,
    residencial,
    reunion,
    healthy,
    institutional,
    comercial
}

function classificator({ ocupation, height, area, population }) {
    const classifications = classes[ocupation].classifications;

    const comparator = (rule, ruleValue, value) => {
        switch (rule) {
            case ">":
                return value > ruleValue
            case "<":
                return value < ruleValue
            case ">=":
                return value >= ruleValue
            case "<=":
                return value <= ruleValue
        }
    }

    const getEspecial = (especial) => {
        const especialIts = [];
        for (const rule of especial) {
            switch (rule.parameter) {
                case "area":
                    if (comparator(rule.rule, rule.value, area)) {
                        especialIts.push(...rule.its)
                    }
                    break;
                case "height":
                    if (comparator(rule.rule, rule.value, height)) {
                        especialIts.push(...rule.its)
                    }
                    break;
                case "population":
                    if (comparator(rule.rule, rule.value, population)) {
                        especialIts.push(...rule.its)
                    }
                    break;
            }
        }
        return especialIts
    }

    for (const classification of classifications) {
        var ok = false;
        for (const rule of classification.rules) {
            switch (rule.parameter) {
                case "area":
                    if (comparator(rule.rule, rule.value, area)) {
                        ok = true
                    } else {
                        ok = false
                    }
                    break;
                case "height":
                    if (comparator(rule.rule, rule.value, height)) {
                        ok = true
                    } else { ok = false }
                    break;
                case "population":
                    if (comparator(rule.rule, rule.value, population)) {
                        ok = true
                    } else {
                        ok = false
                    }
                    break;
            }
        }
        if (ok) {
            const especialsIts = classification.especial.length != 0 ? getEspecial(classification.especial) : []
            console.log(classification)
            return [...classification.its, ...especialsIts]
        }
    }
}
module.exports = {
    classificator
}