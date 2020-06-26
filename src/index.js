// let g_staticVar = "staticVar";

// function privateStaticMethod1(v) {
//     return `privateStaticMethod1(${v}):${g_staticVar}`; 
// }

export class Hello {
    static s_staticVar = "staticVar";

    constructor(v) {
        this.m_instanceVar = v;
    }

    method1(v) {
        return `method1(${v}):${this.m_instanceVar}`;
    }

    static staticMethod1(v) {
        return `staticMethod1(${v}):${Hello.s_staticVar}`;
    }

    get instanceVar() {
        return this.m_instanceVar;
    }

    set instanceVar(v) {
        this.m_instanceVar = v;
    }

    static get staticVar() {
        return Hello.s_staticVar;
    }

    static set staticVar(v) {
        Hello.s_staticVar = v;
    }
}

// Hello.s_staticVar = "staticVar";

