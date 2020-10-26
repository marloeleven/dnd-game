declare global {
  interface Window {
    test: any;
    FB: {
      init: Function;
    };
  }
}

export enum GAME_TYPES {
  WORDS = 'words',
  NUMBERS = 'numbers',
}

export type userId = string;

export interface UserInfo {
  name: string;
  type: UserType;
}

export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
}

export interface ICanvasSize {
  width: number;
  height: number;
}

export enum IDirection {
  POSITIVE = '+',
  NEGATIVE = '-',
}

export enum IAxis {
  Y = 'y',
  X = 'x',
}

export interface IMovement {
  axis: IAxis;
  direction: IDirection;
}

export enum ITrackEvents {
  MOUSEDOWN = 'mousedown',
  MOUSEUP = 'pressup',
  MOUSEMOVE = 'pressmove',
  TICK = 'tick',
}
