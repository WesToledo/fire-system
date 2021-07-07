const { classificator } = require('./classificator')

async function classificate(req, res) {

    console.log(req.body)
    const { height, area, population, ocupation } = req.body;
    try {
        const its = classificator({ height: parseInt(height), area: parseInt(area), population: parseInt(population), ocupation })

        var unique = its.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        })

        return res.send({ its: unique });
    } catch (err) {
        console.log(err)
        return res
            .status(400)
            .send({ error: "Erro ao cadastrar usuário", message: err });
    }
}

module.exports = {
    classificate
}