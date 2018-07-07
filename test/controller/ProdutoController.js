const supertest = require("supertest")

const app = require('../../custom-express')()
const request = supertest(app)

describe("ProdutoController", function(){

    it("should return 400 if product is invalid", function(done){
        request
            .post("/produtos")
            .set("Content-Type", "application/json")
            .send({
                titulo: "Teste Mocha",
                preco: "fccvgbhnj",
                descricao: "blablal"
            })
            .expect(400, done)
    })

    it("retorna JSON caso seja pedido um JSON", function(done){
        request
            .get("/produtos")
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8", done)
    })
})