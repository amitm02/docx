export interface IXmlAttribute {
    [key: string]: string | number | boolean;
}
export interface IXmlableObject extends Object {
    _attr?: IXmlAttribute;
}
export declare const WORKAROUND3 = "";
