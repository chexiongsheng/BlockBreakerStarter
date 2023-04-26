"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
UE.Object.prototype.CreateDefaultSubobjectGeneric = function CreateDefaultSubobjectGeneric(SubobjectFName, ReturnType) {
    return this.CreateDefaultSubobject(SubobjectFName, ReturnType, ReturnType, /*bIsRequired =*/ true, /*bIsAbstract =*/ false, /*bTransient =*/ false);
};
//# sourceMappingURL=ObjectExt.js.map