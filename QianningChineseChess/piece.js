import { Position } from "./position.js";
import { onPieceClick } from "./selection.js";

/**
 * @type {Piece[]}
 * @description 所有棋子的数组
 * */
export const pieces = [];

class Piece {
    /**
     * @property {String} team - 棋子颜色，红("red")或黑("black")
     * @property {String} type - 棋子类型，如車("chariot")、馬("horse")等
     * @property {Position} position - 棋子位置
     * @property {HTMLElement} htmlElement - 棋子对应的HTML元素
     *
     * @constructor
     * @param {String} team - 棋子颜色，红("red")或黑("black")
     * @param {String} type - 棋子类型，如車("chariot")、馬("horse")等
     * @param {Position} position - 棋子位置
     * @param {HTMLElement} htmlElement - 棋子对应的HTML元素
     * */
    constructor(team, type, position, htmlElement) {
        this.team = team;
        this.type = type;
        this.position = position;
        this.htmlElement = htmlElement;
    }

    toggleSelected() {
        if (this.htmlElement.classList.contains("selected-piece")) {
            this.htmlElement.classList.remove("selected-piece");
        } else {
            let selected = document.getElementsByClassName("selected-piece");
            if (selected != undefined)
                for (let index = 0; index < selected.length; index++) {
                    selected[index].classList.remove("selected-piece");
                }
            this.htmlElement.classList.add("selected-piece");
        }
    }

    get selected() {
        return this.htmlElement.classList.contains("selected-piece");
    }

    set selected(value) {
        if (value) {
            this.htmlElement.classList.add("selected-piece");
        } else {
            this.htmlElement.classList.remove("selected-piece");
        }
    }

    get destinations() {
        return [];
    }

    init() {
        this.htmlElement.addEventListener("click", () => {
            // this.toggleSelected();
            onPieceClick(this);
        });
        this.draw();
    }

    draw() {
        this.htmlElement.style.left = this.position.getScreenPos()[0] + "px";
        this.htmlElement.style.top = this.position.getScreenPos()[1] + "px";
    }
}

class PieceType {
    static Master = "master";
    static Guard = "guard";
    static Elephant = "elephant";
    static Horse = "horse";
    static Chariot = "chariot";
    static Gun = "gun";
    static Pawn = "pawn";
}

class Team {
    static Red = "red";
    static Black = "black";
}

export { Piece, PieceType, Team };
