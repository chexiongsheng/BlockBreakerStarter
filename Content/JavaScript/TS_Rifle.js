"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TS_BaseGun_1 = require("./TS_BaseGun");
const UE = require("ue");
class TS_Rifle extends TS_BaseGun_1.default {
    Constructor() {
        this.MaxBulletDistance = 5000;
        this.Damage = 2;
        this.FireRate = 0.1;
        //this.RootComponent = this.GunMesh;
    }
    ReceiveBeginPlay() {
        this.GunMesh.StaticMesh = UE.StaticMesh.Load("/Game/BlockBreaker/Meshes/SM_Rifle");
    }
}
exports.default = TS_Rifle;
//# sourceMappingURL=TS_Rifle.js.map