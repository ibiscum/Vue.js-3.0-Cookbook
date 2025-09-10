"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.FoodChainType = void 0;
var FoodChainType;
(function (FoodChainType) {
    FoodChainType["Carnivorous"] = "carnivorous";
    FoodChainType["Herbivorous"] = "herbivorous";
    FoodChainType["Omnivorous"] = "omnivorous";
})(FoodChainType || (exports.FoodChainType = FoodChainType = {}));
var Animal = /** @class */ (function () {
    class Animal {
        constructor(params) {
            this.name = params.name;
            this.sound = params.sound || '';
            this.family = params.family;
            this.foodChainType = params.foodChainType;
        }
        whoAmI() {
            console.log("I am a ".concat(this.name, ", my family is ").concat(this.family, ". My diet is ").concat(this.foodChainType, "."));
            if (this.sound) {
                console.log(__spreadArray([], Array(2).fill(this.sound), true).join(', '));
            }
        }
        makeSound() {
            console.log(this.sound);
        }
    }
    return Animal;
}());
exports.Animal = Animal;
