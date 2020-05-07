export declare type Effect = (
    action: EffectAction,
    effects: EffectMap,
  ) => void;

export interface EffectAction {
    payload?: any;
}

export interface AnyAction extends EffectAction {
    [extraProps: string]: any
  }

export interface Reducer<S = any, A extends EffectAction = AnyAction> {
    (state :S | undefined, action: A): void;
}


export interface EffectPut {
    type: string;
    payload: any;
}

export interface EffectMap {
    put: (params: EffectPut) => void;
    select: Function;
    call: Function;
    take: Function;
    cancel: Function;
    [key: string]: any;
}