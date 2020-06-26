import { Hello } from "../src/index";

test('instance var', () => {
    const hello = new Hello("initVal");
    expect(hello.instanceVar).toBe("initVal");
});

test('static var', () => {
    Hello.staticVar = "staticVar";
    expect(Hello.staticVar).toBe("staticVar");
    Hello.staticVar = "overwrite";
    expect(Hello.staticVar).toBe("overwrite");
});

test('instance method', () => {
    const hello = new Hello("initVal");
    expect(hello.method1("param")).toBe("method1(param):initVal");
});

test('static method', () => {
    Hello.staticVar = "staticMethodTest";
    expect(Hello.staticMethod1("param")).toBe("staticMethod1(param):staticMethodTest");
});

