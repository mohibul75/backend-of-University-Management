const routes = require("./restApi");

describe(`Rest Api Testing `, () => {
    test(`get Course`, async () => {
        const res = await routes.getCourse();
        const data = res.status;
        console.log(res);
        expect(data).toBe(200);
    });

    test(`add Course`, async () => {
        const res = await routes.addCourse();
        const data = res.status;
        console.log(res);
        expect(data).toBe(200);
    });
});