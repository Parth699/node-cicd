const supertest = require("supertest");
const { app } = require("./server");
const { describe } = require("yargs");

const request = supertest(app);

test('should return a response',async()=>{
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, Test endpoint.');
});