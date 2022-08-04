const routes = require("./restApi");

describe(`Rest Api Testing `, () => {
    describe(`Rest Api Testing`, () => {
        test(`get Course`, async () => {
            const res = await routes.getCourse();
            const data = res.status;
            expect(data).toBe(200);
        });

        test(`Delete Employees`, async () => {
            const emp = await routes.selectEmployees();
            const employees = emp.data.view;
            const id = employees[employees.length - 1].id;

            const res = await routes.deleteEmployees({ id });
            const data = res.status;
            expect(data).toBe(200);
        });
    });