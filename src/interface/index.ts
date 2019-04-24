declare module cloudCodes {
  export interface cloudCodes<T> {
    [K:string]: cloudType;
  }
}

export interface cloudType {
  title: string;
  description: string;
}
