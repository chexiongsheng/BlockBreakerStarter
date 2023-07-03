"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
const ue_1 = require("ue");
require("./ObjectExt");
function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}
class TS_Player extends UE.Character {
    Constructor() {
        this.CanShoot = true;
    }
    MoveForward(axisValue) {
        this.AddMovementInput(this.GetActorForwardVector(), axisValue, false);
    }
    MoveRight(axisValue) {
        this.AddMovementInput(this.GetActorRightVector(), axisValue, false);
    }
    LookHorizontal(axisValue) {
        this.AddControllerYawInput(axisValue);
    }
    LookVertical(axisValue) {
        this.AddControllerPitchInput(axisValue * -1);
    }
    ReceiveBeginPlay() {
        this.FpsCamera.K2_SetRelativeLocationAndRotation(new UE.Vector(0, 0, 90), undefined, false, puerts_1.$ref(undefined), false);
        this.FpsCamera.bUsePawnControlRotation = true;
        this.GunLocation.K2_SetRelativeLocationAndRotation(new UE.Vector(30, 14, -12), new UE.Rotator(0, 95, 0), false, puerts_1.$ref(undefined), false);
        let ucls = UE.Class.Load("/Game/Blueprints/TypeScript/TS_Rifle.TS_Rifle_C");
        this.EquippedGun = UE.GameplayStatics.BeginDeferredActorSpawnFromClass(this, ucls, undefined, UE.ESpawnActorCollisionHandlingMethod.Undefined, this);
        UE.GameplayStatics.FinishSpawningActor(this.EquippedGun, undefined);
        this.EquippedGun.K2_AttachToComponent(this.GunLocation, undefined, UE.EAttachmentRule.SnapToTarget, UE.EAttachmentRule.SnapToTarget, UE.EAttachmentRule.SnapToTarget, true);
    }
    //@no-blueprint
    async AShoot(axisValue) {
        if (axisValue == 1 && this.CanShoot) {
            let cameraLocation = this.FpsCamera.K2_GetComponentLocation();
            let endLocation = cameraLocation.op_Addition(this.FpsCamera.GetForwardVector().op_Multiply(this.EquippedGun.MaxBulletDistance));
            this.EquippedGun.Shoot(cameraLocation, endLocation);
            this.CanShoot = false;
            await delay(this.EquippedGun.FireRate * 1000); //TODO: 支持Latent方法转async方法后，可以用KismetSystemLibrary.Delay
            this.CanShoot = true;
        }
    }
    Shoot(axisValue) {
        this.AShoot(axisValue);
    }
}
__decorate([
    ue_1.uproperty.attach("FpsCamera")
], TS_Player.prototype, "GunLocation", void 0);
exports.default = TS_Player;
//# sourceMappingURL=TS_Player.js.map