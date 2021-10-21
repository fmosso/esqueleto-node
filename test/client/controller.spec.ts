import server from './../../src/index'
import supertest from 'supertest'
const clienteRoute = "/clientes"

afterAll(done => {
    server.close()
    done()
});

const data = {
    "name": "nombre",
    "id": 1,
    "mail": "a@b.com"
}

describe("Test cliente controlador", () => {
    test("agregar cliente", async () => {
        const response = await supertest(server).post(`${clienteRoute}/`).send(data);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({ status: "ok" });
    });

    test("obtener Clientes", async () => {
        const response = await supertest(server).get(`${clienteRoute}/`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({clientes: [data]});
    });
    test("obtener Clientes", async () => {
        const response = await supertest(server).get(`${clienteRoute}/1`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({cliente: data});
    });
});

