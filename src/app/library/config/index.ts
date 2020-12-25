import { CONFIG } from './config';

export function config(name){
    let parameters : Array<string> = name.split('.');
    
    return CONFIG[ parameters[0] ][ parameters[1] ];
}