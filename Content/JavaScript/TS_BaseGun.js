"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
class TS_BaseGun extends UE.Actor {
    MaxBulletDistance;
    Damage;
    FireRate;
    GunMesh;
    PS_BulletImpact;
    Constructor() {
    }
    ReceiveBeginPlay() {
        //console.log("==== BaseGun ReceiveBeginPlay");
        this.PS_BulletImpact = UE.ParticleSystem.Load("/Game/BlockBreaker/ParticleSystems/PS_BulletImpact");
    }
    //@no-blueprint
    Shoot(StartLocation, EndLocation) {
        let hitResultOut = (0, puerts_1.$ref)(undefined);
        if (UE.KismetSystemLibrary.LineTraceSingle(this, StartLocation, EndLocation, 0, false, undefined, 0, hitResultOut, true, undefined, undefined, 0)) {
            let hitResult = (0, puerts_1.$unref)(hitResultOut);
            UE.GameplayStatics.SpawnEmitterAtLocation(this, this.PS_BulletImpact, hitResult.Location, new UE.Rotator(0, 0, 0), new UE.Vector(1, 1, 1), true, UE.EPSCPoolMethod.AutoRelease, true);
            let hitActor = hitResult.GetActor();
            if (hitActor) {
                UE.GameplayStatics.ApplyDamage(hitActor, this.Damage, undefined, undefined, undefined);
            }
        }
    }
}
exports.default = TS_BaseGun;
//# sourceMappingURL=TS_BaseGun.js.map