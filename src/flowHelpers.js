// @flow
export type $Return = <V>(v: (...args: any) => V) => V;
export type $ExtractReturn<Fn> = $Call<$Return, Fn>;
