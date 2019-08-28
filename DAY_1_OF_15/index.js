class ObjectUtilities {
    static mergeObjects = (objA, objB) => {
        return { ...objA, ...objB };
    };

    static removePassword = ({ password, ...cleanUser }) => {
        return cleanUser;
    };

    static freezeObj = cleanUser => {
        return Object.freeze(cleanUser);
    };

    static getOnlyValues = user => {
        return Object.values(user);
    };

    static getOnlyProperties = user => {
        return Object.keys(user);
    };
}

const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
};

const objB = {
    password: "12345"
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!";
